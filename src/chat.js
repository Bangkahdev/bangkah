import { projects } from "./data.js";

const projectNames =
  projects.length > 1
    ? `${projects.slice(0, -1).map((p) => p.name).join(", ")}, dan ${projects.at(-1).name}`
    : projects[0]?.name;

const projectLinks = projects.map((p) => ({
  label: p.name,
  href: p.url,
  external: true,
}));

const docsLinks = projects
  .filter((p) => p.kind !== "Aplikasi web")
  .map((p) => ({
    label: p.kind === "Paket AUR" ? `${p.name} (AUR)` : p.name,
    href: p.url,
    external: true,
  }));

export const CHAT = {
  title: "Tanya Bangkah",
  subtitle: "Jawaban siap pakai soal project dan pengelolanya. Tanpa AI, tanpa tebakan.",
  greeting:
    "Halo. Pilih pertanyaan di bawah — semua jawaban sudah disiapkan dan ditinjau, bukan hasil tebakan mesin.",
  optionsLabel: "Pilih pertanyaan",
  followUpLabel: "Pertanyaan lanjutan",
  resetLabel: "Lihat semua pertanyaan",
  fallbackLabel: "Pertanyaan kamu tidak ada? Tanyakan ke developer",
  mailSubject: "Pertanyaan dari bangkah.tech",
  mailBody:
    "Halo Atha,\n\nSaya ingin bertanya tentang bangkah.tech:\n\n\n\nHalaman yang saya buka: https://bangkah.tech",
  questions: [
    {
      id: "siapa",
      label: "Siapa Bangkah?",
      answer:
        "Bangkah adalah Muhammad Dhyaul Atha — pengembang di balik semua project di situs ini. Nama Bangkah dipakai sebagai identitas karyanya, sedangkan situs ini adalah wadah publiknya.",
      links: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/muhammad-dhyaul-atha/",
          external: true,
        },
        { label: "mdhiyaulatha.me", href: "https://mdhiyaulatha.me", external: true },
        { label: "github.com/Bangkah", href: "https://github.com/Bangkah", external: true },
      ],
      related: ["pengelola", "project"],
    },
    {
      id: "pengelola",
      label: "Siapa pengelola project ini?",
      answer:
        "Pengelola project ini adalah Muhammad Dhyaul Atha, dari perakitan sampai rilis. Untuk urusan teknis, kerja sama, atau laporan bug, hubungi langsung melalui surel.",
      links: [
        { label: "atha@bangkah.tech", href: "mailto:atha@bangkah.tech" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/muhammad-dhyaul-atha/",
          external: true,
        },
        { label: "mdhiyaulatha.me", href: "https://mdhiyaulatha.me", external: true },
      ],
      related: ["kontak", "bug"],
    },
    {
      id: "project",
      label: "Project apa saja yang ada?",
      answer: `Saat ini ada ${projects.length} rak terisi dan satu masih dirakit: ${projectNames}.`,
      links: projectLinks,
      related: ["fishing", "docs"],
    },
    {
      id: "fishing",
      label: "Apa itu Fishing OS?",
      answer:
        "Fishing OS adalah live/rescue ISO berbasis Arch Linux untuk developer dan DevOps: boot dari USB atau mesin virtual, lalu langsung dapat git, Docker, kubectl, Helm, Terraform, dan desktop XFCE tanpa instalasi. Panduan dan unduhan ada di fishingos.bangkah.tech, dan rilisnya ditandatangani GPG.",
      links: [
        {
          label: "fishingos.bangkah.tech",
          href: "https://fishingos.bangkah.tech",
          external: true,
        },
        {
          label: "Rilis terbaru",
          href: "https://github.com/Bangkahdev/Fishing-OS/releases/latest",
          external: true,
        },
      ],
      related: ["project", "docs"],
    },
    {
      id: "akun",
      label: "Perlu akun atau bayar?",
      answer:
        "Tidak. Semua halaman project bisa dibuka langsung — tanpa pendaftaran, langganan, atau paywall.",
      links: [{ label: "Buka gudang", href: "/#gudang" }],
      related: ["project", "privasi"],
    },
    {
      id: "docs",
      label: "Di mana dokumentasinya?",
      answer:
        "ATHA, Bangkah Launcher, Bangk-Shield, Fishing OS, dan DevOpsGen punya situs dokumentasi sendiri. netinfo didokumentasikan lewat README repo, sedangkan Muslim Life adalah aplikasi langsung pakai.",
      links: docsLinks,
      related: ["project", "bug"],
    },
    {
      id: "baru",
      label: "Ada project baru?",
      answer: `Rak ${String(projects.length + 1).padStart(2, "0")} masih dirakit. Pengumuman selalu muncul di beranda lebih dulu, sebelum project naik rak.`,
      links: [{ label: "Pantau beranda", href: "/#gudang" }],
      related: ["project", "siapa"],
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
      related: ["kontak", "pengelola"],
    },
    {
      id: "privasi",
      label: "Ada pelacakan atau cookie?",
      answer:
        "Tidak ada cookie iklan, analitik, atau pelacakan pihak ketiga. Obrolan ini berjalan di browser dan tidak menyimpan riwayat ke server.",
      links: [{ label: "Kontak pengelola", href: "/#kontak" }],
      related: ["siapa", "kontak"],
    },
    {
      id: "kontak",
      label: "Bagaimana menghubungi pengelola?",
      answer:
        "Surel adalah kanal utama dan paling cepat dibaca. Kanal lain tersedia untuk melihat rekam jejak dan karya.",
      links: [
        { label: "atha@bangkah.tech", href: "mailto:atha@bangkah.tech" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/muhammad-dhyaul-atha/",
          external: true,
        },
        { label: "mdhiyaulatha.me", href: "https://mdhiyaulatha.me", external: true },
      ],
      related: ["pengelola", "bug"],
    },
  ],
};
