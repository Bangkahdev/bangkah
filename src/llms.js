import { SITE, projects, steps } from "./data.js";
import { CHAT } from "./chat.js";

const projectLine = (p) =>
  `- [${p.name}](${SITE.url}rak/${p.slug}/): ${p.description} — situs resmi: ${p.url}`;

export function llmsText() {
  return `# ${SITE.name}

> ${SITE.description}

Bangkah adalah gudang project publik yang dikelola oleh ${SITE.owner.name}. Semua
dokumentasi dan alat di sini terbuka untuk siapa saja — tanpa akun, tanpa paywall.
Setiap project punya raknya sendiri berupa subdomain atau tautan resmi.

## Project publik
${projects.map(projectLine).join("\n")}

## Halaman utama
- [Beranda](${SITE.url}): daftar seluruh rak dan ringkasan gudang.
- [Peta Situs](${SITE.url}peta-situs/): daftar halaman dan project publik.
- [Catatan](${SITE.url}catatan/): catatan rilis dan perubahan rak.
- [FAQ](${SITE.url}#faq): pertanyaan umum soal project, akses, dan pengelola.

## Cara kerja
${steps.map((s) => `- ${s.title}: ${s.description}`).join("\n")}

## Kontak
- Email: ${SITE.email}
- GitHub: ${SITE.owner.github}
- LinkedIn: ${SITE.owner.linkedin}
- Situs pengelola: ${SITE.owner.website}

## Berkas
- [sitemap.xml](${SITE.url}sitemap.xml)
- [feed.xml](${SITE.url}feed.xml)
- [robots.txt](${SITE.url}robots.txt)
`;
}

export function llmsFullText() {
  const projectDetails = projects
    .map(
      (p) => `### ${p.no} — ${p.name}
- Jenis: ${p.kind}
- Halaman: ${SITE.url}rak/${p.slug}/
- URL resmi: ${p.url}
- Domain: ${p.display}
- Tag: ${p.tags.join(", ")}
- Ringkasan: ${p.description}
- Sorotan: ${p.highlights.join(" ")}`,
    )
    .join("\n\n");

  const faq = CHAT.questions
    .map((q) => `### ${q.label}\n${q.answer}`)
    .join("\n\n");

  return `# ${SITE.name} — arsip lengkap

> ${SITE.description}

Situs: ${SITE.url}
Pengelola: ${SITE.owner.name} (${SITE.owner.role})
Email: ${SITE.email}
GitHub: ${SITE.owner.github}
LinkedIn: ${SITE.owner.linkedin}
Situs pengelola: ${SITE.owner.website}

## Tentang gudang
Bangkah adalah gudang project publik: dokumentasi, alat, dan catatan kerja untuk
pengembang. Semua halaman dapat dibuka langsung tanpa pendaftaran, langganan,
atau paywall. Tidak ada cookie iklan atau pelacakan pihak ketiga. Situs memakai
Cloudflare Web Analytics yang tidak memasang cookie.

## Daftar project
${projectDetails}

## Alur kerja
${steps.map((s) => `### ${s.phase} — ${s.title}\n${s.description}`).join("\n\n")}

## Tanya jawab
${faq}

## Halaman
- Beranda: ${SITE.url}
- Peta Situs: ${SITE.url}peta-situs/
- Catatan: ${SITE.url}catatan/
- FAQ: ${SITE.url}#faq
- Kontak: ${SITE.url}#kontak

## Berkas teknis
- Sitemap: ${SITE.url}sitemap.xml
- Feed: ${SITE.url}feed.xml
- Robots: ${SITE.url}robots.txt
- Manifest: ${SITE.url}site.webmanifest
`;
}
