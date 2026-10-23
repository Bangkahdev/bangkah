import { SITE } from "./data.js";
import { changelog } from "./changelog.js";

const esc = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export function atomFeed() {
  const updated = new Date().toISOString();
  const pageUrl = `${SITE.url}catatan/`;

  const entries = changelog
    .map(
      (entry) => `  <entry>
    <title>${esc(entry.title)}</title>
    <link href="${esc(`${pageUrl}#${entry.id}`)}"/>
    <id>${esc(`${pageUrl}#${entry.id}`)}</id>
    <updated>${entry.date}T00:00:00+07:00</updated>
    <summary>${esc(entry.description)}</summary>
    <category term="Catatan"/>
  </entry>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="id">
  <title>${esc(`${SITE.name} — Catatan rilis`)}</title>
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
