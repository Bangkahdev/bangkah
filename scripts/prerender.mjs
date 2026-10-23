import { build } from "esbuild";
import { mkdir, readFile, writeFile } from "node:fs/promises";
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
const shell = await readFile(path.join(ROOT, "dist/index.html"), "utf8");

function inject(target, { head, html }) {
  return target
    .replace("<!--app-head-->", head)
    .replace("<!--app-html-->", html);
}

const index = inject(shell, mod.render());
const notFound = inject(shell, mod.render404());

const staticShell = shell
  .replace(/\s*<script type="module"[^>]*><\/script>/g, "")
  .replace(/\s*<link rel="modulepreload"[^>]*>/g, "");
const sitemapPage = inject(staticShell, mod.renderSitemap());

await writeFile(path.join(ROOT, "dist/index.html"), index, "utf8");
await writeFile(path.join(ROOT, "dist/404.html"), notFound, "utf8");
await mkdir(path.join(ROOT, "dist/peta-situs"), { recursive: true });
await writeFile(path.join(ROOT, "dist/peta-situs/index.html"), sitemapPage, "utf8");

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://bangkah.tech/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
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
console.log(`prerender: dist/index.html (${(bytes / 1024).toFixed(1)} KB) + dist/404.html + dist/peta-situs + sitemap.xml + feed.xml + llms.txt`);
