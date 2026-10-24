export const SITE = {
  name: "Bangkah",
  domain: "bangkah.tech",
  url: "https://bangkah.tech/",
  email: "atha@bangkah.tech",
  owner: {
    name: "Muhammad Dhyaul Atha",
    role: "Pengelola Bangkah",
    github: "https://github.com/Bangkah",
    linkedin: "https://www.linkedin.com/in/muhammad-dhyaul-atha/",
    website: "https://mdhiyaulatha.me",
  },
  title: "Bangkah — Gudang Project Publik & Alat Developer | bangkah.tech",
  description:
    "Gudang project publik Bangkah: ATHA Docs, Bangkah Launcher, Bangk-Shield, Fishing OS, DevOpsGen, Muslim Life, netinfo. Dokumentasi dan alat developer.",
  keywords: [
    "Bangkah",
    "Muhammad Dhyaul Atha",
    "bangkah.tech",
    "gudang project publik",
    "project publik Indonesia",
    "dokumentasi developer",
    "alat developer",
    "ATHA",
    "Bangkah Launcher",
    "Bangk-Shield",
    "Fishing OS",
    "DevOpsGen",
    "Muslim Life",
    "netinfo",
    "Arch Linux",
    "Laravel starter kit",
    "live ISO Arch Linux",
    "CLI DevOps",
    "AUR",
    "pengembang Indonesia",
  ],
  ogImage: "https://bangkah.tech/og.png",
  locale: "id_ID",
  lang: "id",
};

export const projects = [
  {
    no: "RAK 01",
    kind: "Dokumentasi",
    name: "Bangk-Shield",
    slug: "bangk-shield",
    url: "https://bangk-shield.bangkah.tech",
    display: "bangk-shield.bangkah.tech",
    description:
      "Situs dokumentasi Bangk-Shield: cara memasang perisai edge di depan project, dari konfigurasi sampai pemakaian sehari-hari.",
    tags: ["Dokumentasi", "Keamanan", "Edge"],
    theme: "c",
    highlights: [
      "Honeypot application layer di edge Cloudflare Workers.",
      "Mendeteksi SQLi, RCE, SSRF, LFI, XSS, dan aktivitas recon.",
      "Mencatat percobaan serangan secara persisten dengan balasan roast.",
    ],
  },
  {
    no: "RAK 02",
    kind: "Sistem operasi",
    name: "Fishing OS",
    slug: "fishing-os",
    url: "https://fishingos.bangkah.tech",
    display: "fishingos.bangkah.tech",
    description:
      "Live/rescue ISO berbasis Arch Linux untuk developer dan DevOps: git, Docker, kubectl, Terraform, dan desktop XFCE siap pakai dari USB.",
    tags: ["Arch Linux", "Live ISO", "GPG"],
    theme: "d",
    highlights: [
      "Boot dari USB atau mesin virtual tanpa instalasi.",
      "Toolchain DevOps: git, Docker, kubectl, Helm, Terraform, dan Ansible.",
      "ISO ditandatangani GPG dengan checksum SHA-256.",
    ],
  },
  {
    no: "RAK 03",
    kind: "Dokumentasi",
    name: "DevOpsGen",
    slug: "devopsgen",
    url: "https://devopsgen.bangkah.tech/",
    display: "devopsgen.bangkah.tech",
    description:
      "CLI scaffolding DevOps: menghasilkan Dockerfile, workflow GitHub Actions, dan manifest Kubernetes yang deterministik dari konfigurasi kecil.",
    tags: ["Go", "CLI", "CI/CD"],
    theme: "e",
    highlights: [
      "Menghasilkan Dockerfile, workflow GitHub Actions, dan manifest Kubernetes.",
      "Output deterministik dari konfigurasi kecil yang eksplisit.",
      "CLI Go dengan mode wizard interaktif dan headless.",
    ],
  },
  {
    no: "RAK 04",
    kind: "Dokumentasi",
    name: "ATHA",
    slug: "atha",
    url: "https://atha.bangkah.tech",
    display: "atha.bangkah.tech",
    description:
      "Panduan alur kerja paket Arch yang lebih aman: build, tanda tangan, sampai rilis tanpa langkah yang terlewat.",
    tags: ["Arch", "CLI", "Panduan"],
    theme: "a",
    highlights: [
      "Alur kerja paket Arch yang lebih aman.",
      "Build, tanda tangan, dan rilis dengan langkah yang jelas.",
      "Dokumentasi praktis untuk pengguna Arch dan maintainer paket.",
    ],
  },
  {
    no: "RAK 05",
    kind: "Dokumentasi",
    name: "Bangkah Launcher",
    slug: "bangkah-launcher",
    url: "https://bangkah-launcher.bangkah.tech",
    display: "bangkah-launcher.bangkah.tech",
    description:
      "Dokumentasi starter kit Laravel modern: struktur rapi, konfigurasi jelas, siap dipakai di hari pertama.",
    tags: ["Laravel", "Starter kit", "PHP"],
    theme: "b",
    highlights: [
      "Starter kit Laravel modern dengan struktur rapi.",
      "Konfigurasi jelas dan siap dipakai di hari pertama.",
      "Dokumentasi pemakaian lengkap di subdomainnya.",
    ],
  },
  {
    no: "RAK 06",
    kind: "Aplikasi web",
    name: "Muslim Life",
    slug: "muslim-life",
    url: "https://muslim-life.vercel.app",
    display: "muslim-life.vercel.app",
    description:
      "Aplikasi Muslim harian: baca dan dengar Al-Quran, jadwal shalat sesuai lokasi, doa harian, asmaul husna, dan arah kiblat.",
    tags: ["PWA", "Al-Quran", "React"],
    theme: "f",
    highlights: [
      "Al-Quran dengan teks dan audio.",
      "Jadwal shalat sesuai lokasi dan arah kiblat.",
      "Doa harian dan asmaul husna dalam satu aplikasi.",
    ],
  },
  {
    no: "RAK 07",
    kind: "Paket AUR",
    name: "netinfo",
    slug: "netinfo",
    url: "https://aur.archlinux.org/packages/netinfo",
    display: "aur.archlinux.org/packages/netinfo",
    description:
      "Paket AUR untuk menampilkan informasi jaringan dan sistem — IP publik, ASN, ISP, dan detail koneksi lain lewat satu perintah.",
    tags: ["Arch", "AUR", "CLI"],
    theme: "g",
    highlights: [
      "Menampilkan IP publik, ASN, dan ISP lewat satu perintah.",
      "Ringan dan cocok untuk troubleshooting atau skrip.",
      "Tersedia sebagai paket AUR untuk Arch Linux.",
    ],
  },
];

const hostedProjects = projects.filter((project) => project.kind !== "Paket AUR");
const contactEntryPoints = [SITE.email].filter(Boolean).length;

export const stats = [
  { value: String(projects.length).padStart(2, "0"), label: "Rak publik" },
  {
    value: String(hostedProjects.length).padStart(2, "0"),
    label: "Titik online",
  },
  {
    value: String(contactEntryPoints).padStart(2, "0"),
    label: "Pintu masuk",
  },
  { value: "24/7", label: "Jam operasional" },
];

export const steps = [
  {
    phase: "Tahap 01",
    title: "Dirakit",
    description: "Ditulis dan dirakit di meja kerja. Komponen dipilih yang benar-benar dipakai.",
  },
  {
    phase: "Tahap 02",
    title: "Diuji",
    description: "Dites sampai lolos, diperbaiki bila perlu, lalu diberi cap siap dipakai.",
  },
  {
    phase: "Tahap 03",
    title: "Naik rak",
    description: "Diterbitkan ke subdomain, dipasang di edge, dan dibuka untuk publik.",
  },
];

export const ticker = [
  "Gudang project publik",
  "Dokumentasi terbuka",
  "Alat untuk pengembang",
  "Satu domain, banyak rak",
  "Tanpa akun",
];
