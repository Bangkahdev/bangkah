export const changelog = [
  {
    id: "2026-10-24-menu-tanpa-js",
    date: "2026-10-24",
    title: "Menu mobile tanpa JavaScript dan FAQ dinamis",
    description:
      "Navigasi memakai kontrol checkbox native dan CSS sehingga tetap bisa dibuka di halaman rak, catatan, dan peta situs yang diprerender tanpa skrip. Angka dan daftar tautan FAQ kembali dihitung dari data project, bukan ditulis tangan.",
    links: [
      { label: "Beranda", href: "/" },
      { label: "Peta situs", href: "/peta-situs/" },
    ],
  },
  {
    id: "2026-10-24-faq-tunggal",
    date: "2026-10-24",
    title: "FAQ jadi satu kanal jawaban",
    description:
      "Chatbot dihapus karena hanya menyajikan ulang sepuluh jawaban yang sama dengan FAQ. FAQ kini satu-satunya kanal jawaban: terbuka tanpa JavaScript, mudah dipindai mesin pencari, dan datanya tetap menjadi sumber JSON-LD serta llms.txt.",
    links: [
      { label: "FAQ", href: "/#faq" },
      { label: "Beranda", href: "/" },
    ],
  },
  {
    id: "2026-10-24-review-aksesibilitas",
    date: "2026-10-24",
    title: "Menu mobile, privasi analitik, dan cache aset",
    description:
      "Menu navigasi untuk layar kecil, klaim privasi Cloudflare Web Analytics yang lebih tepat, angka statistik dari data project, cache aset ber-hash, dan lastmod sitemap dari catatan.",
    links: [
      { label: "Beranda", href: "/" },
      { label: "Peta situs", href: "/peta-situs/" },
    ],
  },
  {
    id: "2026-10-23-berkas-pencari",
    date: "2026-10-23",
    title: "Berkas SEO dan AI discovery",
    description:
      "Meta keywords, JSON-LD lengkap, FAQ terlihat, llms.txt, feed Atom, manifest, favicon PNG, dan font self-host. Semua berkas teknis kini tertaut dari peta situs.",
    links: [
      { label: "Peta situs", href: "/peta-situs/" },
      { label: "llms.txt", href: "/llms.txt" },
    ],
  },
  {
    id: "2026-10-23-fishing-os",
    date: "2026-10-23",
    title: "Fishing OS pindah ke fishingos.bangkah.tech",
    description:
      "Rak 02 kini menunjuk ke subdomain resmi Fishing OS. Tautan lama di dokumentasi dan README ikut diperbarui.",
    links: [{ label: "Detail Fishing OS", href: "/rak/fishing-os/" }],
  },
  {
    id: "2026-10-23-seo-dasar",
    date: "2026-10-23",
    title: "SEO dasar dan tautan rak",
    description:
      "Judul, deskripsi, keywords, dan struktur data diperbarui. Tautan Fishing OS dirapikan agar cocok dengan subdomain barunya.",
    links: [{ label: "Beranda", href: "/" }],
  },
  {
    id: "2026-10-21-tiga-rak",
    date: "2026-10-21",
    title: "DevOpsGen, Muslim Life, dan netinfo naik rak",
    description:
      "Tiga rak baru ditambahkan: CLI scaffolding DevOps, aplikasi Muslim harian, dan paket AUR untuk informasi jaringan.",
    links: [
      { label: "DevOpsGen", href: "/rak/devopsgen/" },
      { label: "Muslim Life", href: "/rak/muslim-life/" },
      { label: "netinfo", href: "/rak/netinfo/" },
    ],
  },
  {
    id: "2026-10-21-chatbot-peta",
    date: "2026-10-21",
    title: "Chatbot tanpa AI dan Peta Situs",
    description:
      "Chatbot berbasis pertanyaan pilihan untuk menjawab pertanyaan umum, plus halaman Peta Situs untuk manusia dan mesin pencari.",
    links: [
      { label: "Peta situs", href: "/peta-situs/" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
];
