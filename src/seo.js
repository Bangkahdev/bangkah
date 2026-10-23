import { SITE, projects } from "./data.js";
import { CHAT } from "./chat.js";

const keywords = SITE.keywords.join(", ");
const shareTitle = "Bangkah — Gudang Project Publik & Alat Developer";
const knowsAbout = [...new Set(projects.flatMap((p) => p.tags))];
const updated = new Date().toISOString().slice(0, 10);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE.url}#website`,
      url: SITE.url,
      name: SITE.name,
      alternateName: "Bangkah — Gudang Project Publik",
      description: SITE.description,
      inLanguage: "id-ID",
      publisher: { "@id": `${SITE.url}#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE.url}#organization`,
      name: SITE.name,
      alternateName: SITE.domain,
      url: SITE.url,
      description: SITE.description,
      email: SITE.email,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}favicon.svg`,
      },
      image: `${SITE.url}og.png`,
      founder: { "@id": `${SITE.url}#owner` },
      sameAs: [SITE.owner.github, SITE.owner.linkedin, SITE.owner.website],
      knowsAbout,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "technical support",
        email: SITE.email,
        availableLanguage: ["id", "en"],
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE.url}#owner`,
      name: SITE.owner.name,
      jobTitle: SITE.owner.role,
      description: `${SITE.owner.name} — ${SITE.owner.role} di ${SITE.name}.`,
      email: `mailto:${SITE.email}`,
      url: SITE.owner.website,
      sameAs: [SITE.owner.github, SITE.owner.linkedin, SITE.owner.website],
      knowsAbout,
      worksFor: { "@id": `${SITE.url}#organization` },
    },
    {
      "@type": "CollectionPage",
      "@id": `${SITE.url}#page`,
      url: SITE.url,
      name: "Gudang Project Publik",
      description: SITE.description,
      isPartOf: { "@id": `${SITE.url}#website` },
      about: { "@id": `${SITE.url}#organization` },
      inLanguage: "id-ID",
      keywords,
      dateModified: updated,
      mainEntity: { "@id": `${SITE.url}#projects` },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE.url}#projects`,
      name: "Project publik Bangkah",
      numberOfItems: projects.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: p.name,
          url: p.url,
          description: p.description,
          keywords: p.tags.join(", "),
          genre: p.kind,
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}#faq`,
      inLanguage: "id-ID",
      isPartOf: { "@id": `${SITE.url}#website` },
      mainEntity: CHAT.questions.map((q) => ({
        "@type": "Question",
        name: q.label,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
        },
      })),
    },
  ],
};

export function headHtml() {
  return [
    `<title>${SITE.title}</title>`,
    `<meta name="description" content="${SITE.description}">`,
    `<meta name="keywords" content="${keywords}">`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">`,
    `<meta name="author" content="${SITE.owner.name}">`,
    `<meta name="application-name" content="${SITE.name}">`,
    `<meta name="theme-color" content="#f2ede1">`,
    `<link rel="canonical" href="${SITE.url}">`,
    `<link rel="sitemap" type="application/xml" title="Sitemap" href="${SITE.url}sitemap.xml">`,
    `<link rel="alternate" hreflang="id" href="${SITE.url}">`,
    `<link rel="alternate" hreflang="x-default" href="${SITE.url}">`,
    `<link rel="icon" href="/favicon.svg" type="image/svg+xml">`,
    `<link rel="apple-touch-icon" href="/favicon.svg">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${SITE.name}">`,
    `<meta property="og:locale" content="${SITE.locale}">`,
    `<meta property="og:url" content="${SITE.url}">`,
    `<meta property="og:title" content="${shareTitle}">`,
    `<meta property="og:description" content="${SITE.description}">`,
    `<meta property="og:image" content="${SITE.ogImage}">`,
    `<meta property="og:image:type" content="image/png">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="Bangkah — pabrik dan gudang project publik di bangkah.tech">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${shareTitle}">`,
    `<meta name="twitter:description" content="${SITE.description}">`,
    `<meta name="twitter:url" content="${SITE.url}">`,
    `<meta name="twitter:image" content="${SITE.ogImage}">`,
    `<meta name="twitter:image:alt" content="Bangkah — pabrik dan gudang project publik di bangkah.tech">`,
    `<link rel="preconnect" href="https://fonts.googleapis.com">`,
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`,
    `<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
  ].join("\n");
}

export function headSitemapHtml() {
  const url = `${SITE.url}peta-situs/`;
  const sitemapKeywords =
    "peta situs bangkah, daftar project bangkah, bangkah.tech, dokumentasi developer";
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        url,
        name: "Peta Situs — Daftar Project & Halaman Bangkah",
        description:
          "Peta situs bangkah.tech: daftar semua halaman, project publik, dan berkas teknis Bangkah.",
        inLanguage: "id-ID",
        keywords: sitemapKeywords,
        dateModified: updated,
        isPartOf: { "@id": `${SITE.url}#website` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Beranda", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Peta Situs", item: url },
        ],
      },
    ],
  };

  return [
    `<title>Peta Situs — Daftar Project & Halaman Bangkah | bangkah.tech</title>`,
    `<meta name="description" content="Peta situs bangkah.tech: daftar semua halaman, project publik, dan berkas teknis Bangkah — ATHA Docs, Fishing OS, DevOpsGen, dan lainnya.">`,
    `<meta name="keywords" content="${sitemapKeywords}">`,
    `<meta name="robots" content="index, follow">`,
    `<meta name="author" content="${SITE.owner.name}">`,
    `<meta name="theme-color" content="#f2ede1">`,
    `<link rel="canonical" href="${url}">`,
    `<link rel="sitemap" type="application/xml" title="Sitemap" href="${SITE.url}sitemap.xml">`,
    `<link rel="icon" href="/favicon.svg" type="image/svg+xml">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${SITE.name}">`,
    `<meta property="og:locale" content="${SITE.locale}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:title" content="Peta Situs — Daftar Project & Halaman Bangkah">`,
    `<meta property="og:description" content="Daftar semua halaman, project publik, dan berkas teknis Bangkah di bangkah.tech.">`,
    `<meta property="og:image" content="${SITE.ogImage}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="Peta Situs — Daftar Project & Halaman Bangkah">`,
    `<meta name="twitter:description" content="Daftar semua halaman, project publik, dan berkas teknis Bangkah di bangkah.tech.">`,
    `<meta name="twitter:url" content="${url}">`,
    `<meta name="twitter:image" content="${SITE.ogImage}">`,
    `<meta name="twitter:image:alt" content="Bangkah — pabrik dan gudang project publik di bangkah.tech">`,
    `<link rel="preconnect" href="https://fonts.googleapis.com">`,
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`,
    `<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">`,
    `<script type="application/ld+json">${JSON.stringify(data)}</script>`,
  ].join("\n");
}

export function head404Html() {
  return [
    `<title>Rak kosong — Bangkah</title>`,
    `<meta name="robots" content="noindex, follow">`,
    `<meta name="theme-color" content="#f2ede1">`,
    `<link rel="icon" href="/favicon.svg" type="image/svg+xml">`,
    `<link rel="preconnect" href="https://fonts.googleapis.com">`,
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`,
    `<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">`,
  ].join("\n");
}
