import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { SITE, projects } from "../src/data.js";

const ROOT = process.cwd();
const DIST = join(ROOT, "dist");
const ORIGIN = new URL(SITE.url).origin;
const LIVE = process.argv.includes("--live");

const pagePaths = [
  "/",
  "/catatan/",
  "/peta-situs/",
  ...projects.map((project) => `/rak/${project.slug}/`),
];

const assetPaths = [
  "/sitemap.xml",
  "/feed.xml",
  "/llms.txt",
  "/llms-full.txt",
  "/robots.txt",
  "/site.webmanifest",
  "/humans.txt",
  "/.well-known/security.txt",
  "/favicon.svg",
  "/favicon-64.png",
  "/favicon-180.png",
  "/favicon-512.png",
  "/og.png",
  "/fonts/archivo-black-400.woff2",
  "/fonts/space-mono-400.woff2",
  "/fonts/space-mono-700.woff2",
];

const internalPaths = [...new Set([...pagePaths, ...assetPaths])];
const externalUrls = new Map();

const failures = [];
const warnings = [];
const checked = { files: 0, internal: 0, external: 0 };

function fileFor(pathname) {
  const clean = decodeURIComponent(pathname).replace(/^\/+/, "");
  if (!clean) return join(DIST, "index.html");
  if (pathname.endsWith("/")) return join(DIST, clean, "index.html");
  return join(DIST, clean);
}

function normalizePath(pathname) {
  if (pathname === "") return "/";
  return pathname;
}

function fail(message) {
  failures.push(message);
}

function warn(message) {
  warnings.push(message);
}

function sameOrigin(url) {
  return url.origin === ORIGIN;
}

function checkAnchor(file, hash, source) {
  if (!hash) return;
  const html = readFileSync(file, "utf8");
  const id = decodeURIComponent(hash.slice(1));
  const pattern = new RegExp(
    `\\b(?:id|name)\\s*=\\s*["']${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`,
  );
  if (!pattern.test(html)) {
    fail(`${source}: fragmen #${id} tidak ditemukan di ${file}`);
  }
}

function collectExternal(href) {
  if (!/^https?:/i.test(href)) return;
  const url = new URL(href);
  url.hash = "";
  externalUrls.set(url.href, url.href);
}

function checkLocal() {
  for (const pathname of internalPaths) {
    const file = fileFor(pathname);
    if (!existsSync(file)) {
      fail(`Berkas hilang: ${pathname} (${file})`);
      continue;
    }
    checked.files += 1;
  }

  for (const page of pagePaths) {
    const file = fileFor(page);
    if (!existsSync(file)) continue;
    const html = readFileSync(file, "utf8");
    const attrs = html.matchAll(/\b(?:href|src)\s*=\s*"([^"]+)"/g);
    for (const match of attrs) {
      const raw = match[1].trim();
      if (!raw || raw.startsWith("#")) continue;
      if (/^(?:mailto:|tel:|data:|javascript:)/i.test(raw)) continue;
      const url = new URL(raw, `${ORIGIN}${page}`);
      if (!sameOrigin(url)) {
        collectExternal(url.href);
        continue;
      }
      const pathname = normalizePath(url.pathname);
      const target = fileFor(pathname);
      checked.internal += 1;
      if (!existsSync(target)) {
        fail(`${page}: tautan rusak ${raw} -> ${pathname}`);
        continue;
      }
      if (url.hash) checkAnchor(target, url.hash, page);
    }
  }

  const sitemapFile = join(DIST, "sitemap.xml");
  if (existsSync(sitemapFile)) {
    const sitemap = readFileSync(sitemapFile, "utf8");
    const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    const listed = new Set(
      locs.map((loc) => normalizePath(new URL(loc).pathname)),
    );
    for (const page of pagePaths) {
      if (!listed.has(page)) fail(`Sitemap tidak memuat ${page}`);
    }
  }
}

async function request(url, attempt = 1) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent":
          "Mozilla/5.0 (compatible; bangkah-link-check/1.0; +https://bangkah.tech/)",
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });
    return { status: response.status, url: response.url, response };
  } catch (error) {
    if (attempt < 2) return request(url, attempt + 1);
    return { error };
  } finally {
    clearTimeout(timer);
  }
}

async function checkUrl(url, { internal = false } = {}) {
  const result = await request(url);
  if (result.error) {
    const reason = result.error.name === "AbortError" ? "timeout" : result.error.message;
    if (internal) fail(`Gagal memuat ${url}: ${reason}`);
    else warn(`Tidak bisa dijangkau ${url}: ${reason}`);
    return;
  }
  const { status } = result;
  if (status >= 200 && status < 400) return;
  if (!internal && [401, 403, 405, 429, 999].includes(status)) {
    warn(`Diblokir bot (${status}): ${url}`);
    return;
  }
  if (internal) fail(`Status ${status}: ${url}`);
  else fail(`Status ${status}: ${url}`);
}

async function checkLive() {
  const targets = internalPaths.map((pathname) => `${ORIGIN}${pathname}`);
  const queue = [...targets];
  const concurrency = 6;

  async function worker() {
    while (queue.length) {
      const url = queue.shift();
      if (!url) return;
      await checkUrl(url, { internal: true });
    }
  }

  await Promise.all(Array.from({ length: concurrency }, worker));
}

async function checkExternal() {
  for (const [url] of externalUrls) {
    checked.external += 1;
    await checkUrl(url);
  }
}

function report() {
  console.log(
    `Lokal: ${checked.files} berkas, ${checked.internal} tautan internal.`,
  );
  if (LIVE) console.log(`Live: ${internalPaths.length} URL produksi.`);
  console.log(`Eksternal: ${checked.external} URL.`);

  if (warnings.length) {
    console.log("\nPeringatan:");
    for (const message of warnings) console.log(`  ! ${message}`);
  }
  if (failures.length) {
    console.log("\nGagal:");
    for (const message of failures) console.log(`  x ${message}`);
  }

  if (!failures.length) console.log("\nSemua tautan wajib lolos.");
}

checkLocal();
await checkExternal();
if (LIVE) await checkLive();
report();

if (failures.length) process.exit(1);
