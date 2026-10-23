import { build } from "esbuild";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = process.cwd();
const TMP_DIR = path.join(ROOT, ".prerender");
const ENTRY = path.join(TMP_DIR, "entry.mjs");

await mkdir(TMP_DIR, { recursive: true });

await build({
  entryPoints: [path.join(ROOT, "src/entry-server.jsx")],
  outfile: ENTRY,
  bundle: true,
  format: "esm",
  platform: "node",
  target: "node20",
  jsx: "automatic",
  logLevel: "warning",
  packages: "external",
  define: { "process.env.NODE_ENV": '"production"' },
});

const mod = await import(pathToFileURL(ENTRY).href);
let shell = await readFile(path.join(ROOT, "dist/index.html"), "utf8");

const assets = await readdir(path.join(ROOT, "dist/assets"));
const cssFile = assets.find((file) => file.endsWith(".css"));
if (!cssFile) throw new Error("prerender: CSS bundle tidak ditemukan");
const css = await readFile(path.join(ROOT, "dist/assets", cssFile), "utf8");
shell = shell.replace(
  /<link rel="stylesheet"[^>]*>/,
  `<style>${css}</style>`,
);

function inject(target, { head, html }) {
  return target
    .replace("<!--app-head-->", head)
    .replace("<!--app-html-->", html);
}

const index = inject(shell, mod.render());
const notFound = inject(shell, mod.render404());
const racks = mod.renderRacks();

const staticShell = shell
  .replace(/\s*<script type="module"[^>]*><\/script>/g, "")
  .replace(/\s*<link rel="modulepreload"[^>]*>/g, "");
const sitemapPage = inject(staticShell, mod.renderSitemap());
const changelogPage = inject(staticShell, mod.renderChangelog());

await writeFile(path.join(ROOT, "dist/index.html"), index, "utf8");
await writeFile(path.join(ROOT, "dist/404.html"), notFound, "utf8");
await mkdir(path.join(ROOT, "dist/peta-situs"), { recursive: true });
await writeFile(path.join(ROOT, "dist/peta-situs/index.html"), sitemapPage, "utf8");
await mkdir(path.join(ROOT, "dist/catatan"), { recursive: true });
await writeFile(path.join(ROOT, "dist/catatan/index.html"), changelogPage, "utf8");

for (const rack of racks) {
  const dir = path.join(ROOT, "dist/rak", rack.slug);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), inject(staticShell, rack), "utf8");
}

const today = new Date().toISOString().slice(0, 10);
const rackUrls = racks
  .map(
    (rack) => `  <url>
    <loc>https://bangkah.tech/rak/${rack.slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
  )
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://bangkah.tech/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
${rackUrls}
  <url>
    <loc>https://bangkah.tech/catatan/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://bangkah.tech/peta-situs/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
`;
await writeFile(path.join(ROOT, "dist/sitemap.xml"), sitemap, "utf8");

await writeFile(path.join(ROOT, "dist/feed.xml"), mod.atomFeed(), "utf8");
await writeFile(path.join(ROOT, "dist/llms.txt"), mod.llmsText(), "utf8");
await writeFile(path.join(ROOT, "dist/llms-full.txt"), mod.llmsFullText(), "utf8");

const bytes = Buffer.byteLength(index, "utf8");
console.log(
  `prerender: dist/index.html (${(bytes / 1024).toFixed(1)} KB) + 404 + ${racks.length} rak + catatan + peta-situs + sitemap.xml + feed.xml + llms`,
);
