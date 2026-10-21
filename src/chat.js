export const CHAT = {
  title: "Tanya Bangkah",
  subtitle: "Jawaban siap pakai soal gudang dan project. Tanpa AI, tanpa tebakan.",
  greeting:
    "Halo. Pilih pertanyaan di bawah â€” semua jawaban sudah disiapkan dan ditinjau, bukan hasil tebakan mesin.",
  optionsLabel: "Pilih pertanyaan",
  followUpLabel: "Pertanyaan lanjutan",
  resetLabel: "Lihat semua pertanyaan",
  fallbackLabel: "Pertanyaan kamu tidak ada? Tanyakan ke developer",
  mailSubject: "Pertanyaan dari bangkah.tech",
  mailBody:
    "Halo Atha,\n\nSaya ingin bertanya tentang bangkah.tech:\n\n\n\nHalaman yang saya buka: https://bangkah.tech",
  questions: [
    {
      id: "apa",
      label: "Apa itu Bangkah?",
      answer:
        "Bangkah adalah gudang project publik: dokumentasi dan alat untuk pengembang, disimpan rapi di rak subdomain bangkah.tech. Terbuka untuk siapa saja, tanpa akun dan tanpa paywall.",
      links: [{ label: "Lihat gudang", href: "/#gudang" }],
      related: ["project", "akun"],
    },
    {
      id: "project",
      label: "Project apa saja yang ada?",
      answer:
        "Saat ini ada tiga rak terisi dan satu masih dirakit: dokumentasi ATHA, dokumentasi Bangkah Launcher, dan situs dokumentasi Bangk-Shield.",
      links: [
        { label: "ATHA Docs", href: "https://atha.bangkah.tech", external: true },
        {
          label: "Bangkah Launcher",
          href: "https://bangkah-launcher.bangkah.tech",
          external: true,
        },
        {
          label: "Bangk-Shield",
          href: "https://bangk-shield.bangkah.tech",
          external: true,
        },
      ],
      related: ["docs", "baru"],
    },
    {
      id: "akun",
      label: "Perlu akun atau bayar?",
      answer:
        "Tidak. Semua halaman project bisa dibuka langsung â€” tanpa pendaftaran, langganan, atau paywall.",
      links: [{ label: "Buka gudang", href: "/#gudang" }],
      related: ["project", "privasi"],
    },
    {
      id: "docs",
      label: "Di mana dokumentasinya?",
      answer:
        "Setiap project punya situs dokumentasinya sendiri, jadi tidak perlu mencari di satu halaman panjang.",
      links: [
        { label: "atha.bangkah.tech", href: "https://atha.bangkah.tech", external: true },
        {
          label: "bangkah-launcher.bangkah.tech",
          href: "https://bangkah-launcher.bangkah.tech",
          external: true,
        },
        {
          label: "bangk-shield.bangkah.tech",
          href: "https://bangk-shield.bangkah.tech",
          external: true,
        },
      ],
      related: ["project", "bug"],
    },
    {
      id: "baru",
      label: "Ada project baru?",
      answer:
        "Rak keempat masih dirakit. Pengumuman selalu muncul di beranda lebih dulu, sebelum project naik rak.",
      links: [{ label: "Pantau beranda", href: "/#gudang" }],
      related: ["project", "teknologi"],
    },
    {
      id: "bug",
      label: "Cara lapor bug atau kolaborasi?",
      answer:
        "Kirim surel ke atha@bangkah.tech dengan tautan halaman dan langkah reproduksinya. Untuk kolaborasi, sertakan ringkasan singkat, peran yang ditawarkan, dan tenggat.",
      links: [
        { label: "atha@bangkah.tech", href: "mailto:atha@bangkah.tech" },
        { label: "github.com/Bangkah", href: "https://github.com/Bangkah", external: true },
      ],
      related: ["kontak", "teknologi"],
    },
    {
      id: "teknologi",
      label: "Situs ini dibuat dengan apa?",
      answer:
        "React dan Vite, di-prerender menjadi HTML statis saat build, lalu di-deploy ke Cloudflare Pages lewat GitHub Actions. Tidak ada basis data di balik halaman ini.",
      links: [{ label: "Peta situs", href: "/peta-situs/" }],
      related: ["privasi", "baru"],
    },
    {
      id: "privasi",
      label: "Ada pelacakan atau cookie?",
      answer:
        "Tidak ada cookie iklan, analitik, atau pelacakan pihak ketiga. Obrolan ini berjalan di browser dan tidak menyimpan riwayat ke server.",
      links: [{ label: "Kontak pengelola", href: "/#kontak" }],
      related: ["teknologi", "kontak"],
    },
    {
      id: "kontak",
      label: "Bagaimana menghubungi pengelola?",
      answer:
        "Surel adalah kanal utama dan paling cepat dibaca. Kanal lain tersedia untuk melihat rekam jejak dan karya.",
      links: [
        { label: "atha@bangkah.tech", href: "mailto:atha@bangkah.tech" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-dhyaul-atha/", external: true },
        { label: "mdhiyaulatha.me", href: "https://mdhiyaulatha.me", external: true },
      ],
      related: ["bug", "privasi"],
    },
  ],
};

