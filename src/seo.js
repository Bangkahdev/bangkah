import { SITE, projects } from "./data.js";
import { CHAT } from "./chat.js";
import { changelog } from "./changelog.js";

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
      primaryImageOfPage: { "@id": `${SITE.url}#ogimage` },
      author: { "@id": `${SITE.url}#owner` },
      mainEntity: { "@id": `${SITE.url}#projects` },
    },
    {
      "@type": "ImageObject",
      "@id": `${SITE.url}#ogimage`,
      url: SITE.ogImage,
      contentUrl: SITE.ogImage,
      width: 1200,
      height: 630,
      caption: "Bangkah — pabrik dan gudang project publik di bangkah.tech",
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
          url: `${SITE.url}rak/${p.slug}/`,
          sameAs: p.url,
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
    `<meta name="apple-mobile-web-app-title" content="${SITE.name}">`,
    `<meta name="color-scheme" content="light">`,
    `<meta name="theme-color" content="#f2ede1">`,
    `<link rel="canonical" href="${SITE.url}">`,
    `<link rel="sitemap" type="application/xml" title="Sitemap" href="${SITE.url}sitemap.xml">`,
    `<link rel="alternate" type="application/atom+xml" title="Rak baru Bangkah" href="/feed.xml">`,
    `<link rel="manifest" href="/site.webmanifest">`,
    `<link rel="alternate" hreflang="id" href="${SITE.url}">`,
    `<link rel="alternate" hreflang="x-default" href="${SITE.url}">`,
    `<link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any">`,
    `<link rel="icon" type="image/png" sizes="64x64" href="/favicon-64.png">`,
    `<link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png">`,
    `<link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${SITE.name}">`,
    `<meta property="og:locale" content="${SITE.locale}">`,
    `<meta property="og:url" content="${SITE.url}">`,
    `<meta property="og:updated_time" content="${updated}T00:00:00+07:00">`,
    `<meta property="og:title" content="${shareTitle}">`,
    `<meta property="og:description" content="${SITE.description}">`,
    `<meta property="og:image" content="${SITE.ogImage}">`,
    `<meta property="og:image:secure_url" content="${SITE.ogImage}">`,
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
    `<link rel="preload" href="/fonts/space-mono-400.woff2" as="font" type="font/woff2" crossorigin>`,
    `<link rel="preload" href="/fonts/archivo-black-400.woff2" as="font" type="font/woff2" crossorigin>`,
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
    `<meta name="apple-mobile-web-app-title" content="${SITE.name}">`,
    `<meta name="color-scheme" content="light">`,
    `<meta name="theme-color" content="#f2ede1">`,
    `<link rel="canonical" href="${url}">`,
    `<link rel="sitemap" type="application/xml" title="Sitemap" href="${SITE.url}sitemap.xml">`,
    `<link rel="alternate" type="application/atom+xml" title="Rak baru Bangkah" href="/feed.xml">`,
    `<link rel="manifest" href="/site.webmanifest">`,
    `<link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any">`,
    `<link rel="icon" type="image/png" sizes="64x64" href="/favicon-64.png">`,
    `<link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png">`,
    `<link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${SITE.name}">`,
    `<meta property="og:locale" content="${SITE.locale}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:updated_time" content="${updated}T00:00:00+07:00">`,
    `<meta property="og:title" content="Peta Situs — Daftar Project & Halaman Bangkah">`,
    `<meta property="og:description" content="Daftar semua halaman, project publik, dan berkas teknis Bangkah di bangkah.tech.">`,
    `<meta property="og:image" content="${SITE.ogImage}">`,
    `<meta property="og:image:secure_url" content="${SITE.ogImage}">`,
    `<meta property="og:image:type" content="image/png">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="Bangkah — pabrik dan gudang project publik di bangkah.tech">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="Peta Situs — Daftar Project & Halaman Bangkah">`,
    `<meta name="twitter:description" content="Daftar semua halaman, project publik, dan berkas teknis Bangkah di bangkah.tech.">`,
    `<meta name="twitter:url" content="${url}">`,
    `<meta name="twitter:image" content="${SITE.ogImage}">`,
    `<meta name="twitter:image:alt" content="Bangkah — pabrik dan gudang project publik di bangkah.tech">`,
    `<link rel="preload" href="/fonts/space-mono-400.woff2" as="font" type="font/woff2" crossorigin>`,
    `<link rel="preload" href="/fonts/archivo-black-400.woff2" as="font" type="font/woff2" crossorigin>`,
    `<script type="application/ld+json">${JSON.stringify(data)}</script>`,
  ].join("\n");
}

export function headRackHtml(project) {
  const url = `${SITE.url}rak/${project.slug}/`;
  const title = `${project.name} — ${project.kind} | Bangkah`;
  const description = project.description;
  const projectKeywords = [
    project.name,
    project.display,
    ...project.tags,
    "Bangkah",
    "bangkah.tech",
  ].join(", ");

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        url,
        name: title,
        description,
        inLanguage: "id-ID",
        keywords: projectKeywords,
        dateModified: updated,
        isPartOf: { "@id": `${SITE.url}#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: { "@id": `${SITE.url}#ogimage` },
        mainEntity: { "@id": `${url}#project` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Beranda", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Gudang", item: `${SITE.url}#gudang` },
          { "@type": "ListItem", position: 3, name: project.name, item: url },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": `${url}#project`,
        name: project.name,
        alternateName: project.display,
        url: project.url,
        description,
        keywords: [...project.tags, project.kind].join(", "),
        genre: project.kind,
        isPartOf: { "@id": `${SITE.url}#page` },
        creator: { "@id": `${SITE.url}#owner` },
        sameAs: project.url,
      },
    ],
  };

  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}">`,
    `<meta name="keywords" content="${projectKeywords}">`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">`,
    `<meta name="author" content="${SITE.owner.name}">`,
    `<meta name="application-name" content="${SITE.name}">`,
    `<meta name="apple-mobile-web-app-title" content="${SITE.name}">`,
    `<meta name="color-scheme" content="light">`,
    `<meta name="theme-color" content="#f2ede1">`,
    `<link rel="canonical" href="${url}">`,
    `<link rel="sitemap" type="application/xml" title="Sitemap" href="${SITE.url}sitemap.xml">`,
    `<link rel="alternate" type="application/atom+xml" title="Rak baru Bangkah" href="/feed.xml">`,
    `<link rel="manifest" href="/site.webmanifest">`,
    `<link rel="alternate" hreflang="id" href="${url}">`,
    `<link rel="alternate" hreflang="x-default" href="${url}">`,
    `<link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any">`,
    `<link rel="icon" type="image/png" sizes="64x64" href="/favicon-64.png">`,
    `<link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png">`,
    `<link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${SITE.name}">`,
    `<meta property="og:locale" content="${SITE.locale}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:updated_time" content="${updated}T00:00:00+07:00">`,
    `<meta property="og:title" content="${title}">`,
    `<meta property="og:description" content="${description}">`,
    `<meta property="og:image" content="${SITE.ogImage}">`,
    `<meta property="og:image:secure_url" content="${SITE.ogImage}">`,
    `<meta property="og:image:type" content="image/png">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="${project.name} — ${project.kind} di Bangkah">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${title}">`,
    `<meta name="twitter:description" content="${description}">`,
    `<meta name="twitter:url" content="${url}">`,
    `<meta name="twitter:image" content="${SITE.ogImage}">`,
    `<meta name="twitter:image:alt" content="${project.name} — ${project.kind} di Bangkah">`,
    `<link rel="preload" href="/fonts/space-mono-400.woff2" as="font" type="font/woff2" crossorigin>`,
    `<link rel="preload" href="/fonts/archivo-black-400.woff2" as="font" type="font/woff2" crossorigin>`,
    `<script type="application/ld+json">${JSON.stringify(data)}</script>`,
  ].join("\n");
}

export function headChangelogHtml() {
  const url = `${SITE.url}catatan/`;
  const title = "Catatan Rilis — Perubahan Rak & Situs Bangkah | bangkah.tech";
  const description =
    "Catatan rilis Bangkah: rak baru, pembaruan project, dan perbaikan situs di bangkah.tech.";
  const changelogKeywords =
    "catatan rilis bangkah, changelog bangkah, rak baru, pembaruan project, bangkah.tech";

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        url,
        name: "Catatan Rilis — Bangkah",
        description,
        inLanguage: "id-ID",
        keywords: changelogKeywords,
        dateModified: updated,
        isPartOf: { "@id": `${SITE.url}#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#entries` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Beranda", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Catatan", item: url },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${url}#entries`,
        itemListElement: changelog.map((entry, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "BlogPosting",
            headline: entry.title,
            datePublished: entry.date,
            url: `${url}#${entry.id}`,
            description: entry.description,
            author: { "@id": `${SITE.url}#owner` },
          },
        })),
      },
    ],
  };

  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}">`,
    `<meta name="keywords" content="${changelogKeywords}">`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">`,
    `<meta name="author" content="${SITE.owner.name}">`,
    `<meta name="application-name" content="${SITE.name}">`,
    `<meta name="apple-mobile-web-app-title" content="${SITE.name}">`,
    `<meta name="color-scheme" content="light">`,
    `<meta name="theme-color" content="#f2ede1">`,
    `<link rel="canonical" href="${url}">`,
    `<link rel="sitemap" type="application/xml" title="Sitemap" href="${SITE.url}sitemap.xml">`,
    `<link rel="alternate" type="application/atom+xml" title="Catatan Bangkah" href="/feed.xml">`,
    `<link rel="manifest" href="/site.webmanifest">`,
    `<link rel="alternate" hreflang="id" href="${url}">`,
    `<link rel="alternate" hreflang="x-default" href="${url}">`,
    `<link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any">`,
    `<link rel="icon" type="image/png" sizes="64x64" href="/favicon-64.png">`,
    `<link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png">`,
    `<link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png">`,
    `<meta property="og:type" content="article">`,
    `<meta property="og:site_name" content="${SITE.name}">`,
    `<meta property="og:locale" content="${SITE.locale}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:updated_time" content="${updated}T00:00:00+07:00">`,
    `<meta property="og:title" content="${title}">`,
    `<meta property="og:description" content="${description}">`,
    `<meta property="og:image" content="${SITE.ogImage}">`,
    `<meta property="og:image:secure_url" content="${SITE.ogImage}">`,
    `<meta property="og:image:type" content="image/png">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="Catatan rilis Bangkah">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${title}">`,
    `<meta name="twitter:description" content="${description}">`,
    `<meta name="twitter:url" content="${url}">`,
    `<meta name="twitter:image" content="${SITE.ogImage}">`,
    `<meta name="twitter:image:alt" content="Catatan rilis Bangkah">`,
    `<link rel="preload" href="/fonts/space-mono-400.woff2" as="font" type="font/woff2" crossorigin>`,
    `<link rel="preload" href="/fonts/archivo-black-400.woff2" as="font" type="font/woff2" crossorigin>`,
    `<script type="application/ld+json">${JSON.stringify(data)}</script>`,
  ].join("\n");
}

export function head404Html() {
  return [
    `<title>Rak kosong — Bangkah</title>`,
    `<meta name="robots" content="noindex, follow">`,
    `<meta name="color-scheme" content="light">`,
    `<meta name="theme-color" content="#f2ede1">`,
    `<link rel="manifest" href="/site.webmanifest">`,
    `<link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any">`,
    `<link rel="icon" type="image/png" sizes="64x64" href="/favicon-64.png">`,
    `<link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png">`,
    `<link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png">`,
    `<link rel="preload" href="/fonts/space-mono-400.woff2" as="font" type="font/woff2" crossorigin>`,
    `<link rel="preload" href="/fonts/archivo-black-400.woff2" as="font" type="font/woff2" crossorigin>`,
  ].join("\n");
}
