import { SITE, projects } from "./data.js";

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
      url: SITE.url,
      logo: `${SITE.url}favicon.svg`,
      email: SITE.email,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "technical support",
        email: SITE.email,
        availableLanguage: ["id", "en"],
      },
    },
    {
      "@type": "CollectionPage",
      "@id": `${SITE.url}#page`,
      url: SITE.url,
      name: "Gudang Project Publik",
      isPartOf: { "@id": `${SITE.url}#website` },
      about: { "@id": `${SITE.url}#organization` },
      inLanguage: "id-ID",
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
        name: p.name,
        url: `${p.url}/`,
        description: p.description,
      })),
    },
  ],
};

export function headHtml() {
  return [
    `<title>${SITE.title}</title>`,
    `<meta name="description" content="${SITE.description}">`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">`,
    `<meta name="author" content="${SITE.name}">`,
    `<meta name="theme-color" content="#f2ede1">`,
    `<link rel="canonical" href="${SITE.url}">`,
    `<link rel="alternate" hreflang="id" href="${SITE.url}">`,
    `<link rel="alternate" hreflang="x-default" href="${SITE.url}">`,
    `<link rel="icon" href="/favicon.svg" type="image/svg+xml">`,
    `<link rel="apple-touch-icon" href="/favicon.svg">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${SITE.name}">`,
    `<meta property="og:locale" content="${SITE.locale}">`,
    `<meta property="og:url" content="${SITE.url}">`,
    `<meta property="og:title" content="Bangkah — Gudang Project Publik">`,
    `<meta property="og:description" content="Dokumentasi dan alat untuk pengembang, disimpan rapi di rak subdomain. Terbuka untuk publik, tanpa akun.">`,
    `<meta property="og:image" content="${SITE.ogImage}">`,
    `<meta property="og:image:type" content="image/png">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="Bangkah — pabrik dan gudang project publik di bangkah.tech">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="Bangkah — Gudang Project Publik">`,
    `<meta name="twitter:description" content="Dokumentasi dan alat untuk pengembang, disimpan rapi di rak subdomain. Terbuka untuk publik, tanpa akun.">`,
    `<meta name="twitter:image" content="${SITE.ogImage}">`,
    `<link rel="preconnect" href="https://fonts.googleapis.com">`,
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`,
    `<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
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
