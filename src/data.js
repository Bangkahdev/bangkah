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
  title: "Bangkah — Gudang Project Publik | bangkah.tech",
  description:
    "Gudang project publik Bangkah: dokumentasi dan alat untuk pengembang. Jelajahi ATHA Docs, Bangkah Launcher, Bangk-Shield, Fishing OS, DevOpsGen, Muslim Life, dan netinfo dalam satu domain.",
  ogImage: "https://bangkah.tech/og.png",
  locale: "id_ID",
  lang: "id",
};

export const projects = [
  {
    no: "RAK 01",
    kind: "Dokumentasi",
    name: "ATHA Docs",
    url: "https://atha.bangkah.tech",
    display: "atha.bangkah.tech",
    description:
      "Panduan alur kerja paket Arch yang lebih aman: build, tanda tangan, sampai rilis tanpa langkah yang terlewat.",
    tags: ["Arch", "CLI", "Panduan"],
    theme: "a",
  },
  {
    no: "RAK 02",
    kind: "Dokumentasi",
    name: "Bangkah Launcher",
    url: "https://bangkah-launcher.bangkah.tech",
    display: "bangkah-launcher.bangkah.tech",
    description:
      "Dokumentasi starter kit Laravel modern: struktur rapi, konfigurasi jelas, siap dipakai di hari pertama.",
    tags: ["Laravel", "Starter kit", "PHP"],
    theme: "b",
  },
  {
    no: "RAK 03",
    kind: "Dokumentasi",
    name: "Bangk-Shield",
    url: "https://bangk-shield.bangkah.tech",
    display: "bangk-shield.bangkah.tech",
    description:
      "Situs dokumentasi Bangk-Shield: cara memasang perisai edge di depan project, dari konfigurasi sampai pemakaian sehari-hari.",
    tags: ["Dokumentasi", "Keamanan", "Edge"],
    theme: "c",
  },
  {
    no: "RAK 04",
    kind: "Sistem operasi",
    name: "Fishing OS",
    url: "https://github.com/Bangkahdev/Fishing-OS/wiki",
    display: "github.com/Bangkahdev/Fishing-OS/wiki",
    description:
      "Live/rescue ISO berbasis Arch Linux untuk developer dan DevOps: git, Docker, kubectl, Terraform, dan desktop XFCE siap pakai dari USB.",
    tags: ["Arch Linux", "Live ISO", "GPG"],
    theme: "d",
  },
  {
    no: "RAK 05",
    kind: "CLI",
    name: "DevOpsGen",
    url: "https://devopsgen.bangkah.tech/",
    display: "devopsgen.bangkah.tech",
    description:
      "CLI scaffolding DevOps: menghasilkan Dockerfile, workflow GitHub Actions, dan manifest Kubernetes yang deterministik dari konfigurasi kecil.",
    tags: ["Go", "CLI", "CI/CD"],
    theme: "e",
  },
  {
    no: "RAK 06",
    kind: "Aplikasi web",
    name: "Muslim Life",
    url: "https://muslim-life.vercel.app",
    display: "muslim-life.vercel.app",
    description:
      "Aplikasi Muslim harian: baca dan dengar Al-Quran, jadwal shalat sesuai lokasi, doa harian, asmaul husna, dan arah kiblat.",
    tags: ["PWA", "Al-Quran", "React"],
    theme: "f",
  },
  {
    no: "RAK 07",
    kind: "Paket AUR",
    name: "netinfo",
    url: "https://aur.archlinux.org/packages/netinfo",
    display: "aur.archlinux.org/packages/netinfo",
    description:
      "Paket AUR untuk menampilkan informasi jaringan dan sistem — IP publik, ASN, ISP, dan detail koneksi lain lewat satu perintah.",
    tags: ["Arch", "AUR", "CLI"],
    theme: "g",
  },
];

export const stats = [
  { value: "07", label: "Rak publik" },
  { value: "06", label: "Titik online" },
  { value: "01", label: "Pintu masuk" },
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
    description: "Dites sampai gagal, diperbaiki, lalu diberi cap siap dipakai.",
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
