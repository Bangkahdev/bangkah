export const SITE = {
  name: "Bangkah",
  domain: "bangkah.tech",
  url: "https://bangkah.tech/",
  email: "atha@bangkah.tech",
  title: "Bangkah — Gudang Project Publik | bangkah.tech",
  description:
    "Gudang project publik Bangkah: dokumentasi dan alat untuk pengembang. Jelajahi ATHA Docs, Bangkah Launcher, dan Bangk-Shield dalam satu domain.",
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
    kind: "Alat",
    name: "Bangk-Shield",
    url: "https://bangk-shield.bangkah.tech",
    display: "bangk-shield.bangkah.tech",
    description:
      "Perisai edge untuk project Bangkah: dipasang di depan pintu gudang, bekerja sebelum permintaan masuk ke origin.",
    tags: ["Keamanan", "Worker", "Edge"],
    theme: "c",
  },
];

export const stats = [
  { value: "03", label: "Rak publik" },
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
