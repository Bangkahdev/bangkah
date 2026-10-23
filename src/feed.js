import { SITE, projects } from "./data.js";

const esc = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export function atomFeed() {
  const updated = new Date().toISOString();

  const entries = projects
    .map(
      (p) => `  <entry>
    <title>${esc(`${p.no} — ${p.name}`)}</title>
    <link href="${esc(p.url)}"/>
    <id>${esc(p.url)}</id>
    <updated>${updated}</updated>
    <summary>${esc(p.description)}</summary>
    <category term="${esc(p.kind)}"/>
  </entry>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="id">
  <title>${esc(`${SITE.name} — Rak publik`)}</title>
  <subtitle>${esc(SITE.description)}</subtitle>
  <link href="${SITE.url}feed.xml" rel="self"/>
  <link href="${SITE.url}"/>
  <updated>${updated}</updated>
  <id>${SITE.url}</id>
  <author>
    <name>${esc(SITE.owner.name)}</name>
    <uri>${SITE.owner.website}</uri>
  </author>
${entries}
</feed>
`;
}
