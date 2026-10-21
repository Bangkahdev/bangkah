# bangkah.tech

Situs gudang project publik **Bangkah** — satu domain, banyak rak.

Dibangun dengan HTML/CSS statis bergaya neo-brutalism, tanpa framework, tanpa build step, dan di-deploy lewat Cloudflare Pages.

## Isi

| Berkas | Keterangan |
|---|---|
| `index.html` | Halaman utama: hero, statistik, daftar rak project, cara kerja, kontak |
| `404.html` | Halaman "Rak kosong" untuk URL yang tidak ada |
| `_headers` | Header keamanan (CSP, X-Frame-Options, dll) dan cache aset |
| `robots.txt` | Aturan crawler |
| `sitemap.xml` | Sitemap untuk mesin pencari |
| `og.png` | Gambar Open Graph 1200×630 |
| `favicon.svg` | Ikon situs |

## Rak yang terdaftar

- [ATHA Docs](https://atha.bangkah.tech) — dokumentasi alur kerja paket Arch
- [Bangkah Launcher](https://bangkah-launcher.bangkah.tech) — dokumentasi starter kit Laravel
- [Bangk-Shield](https://bangk-shield.bangkah.tech) — perisai edge untuk project Bangkah

## SEO

- Metadata lengkap: title, description, canonical, robots, Open Graph, Twitter Card
- JSON-LD: `WebSite`, `Organization`, `CollectionPage`, `ItemList`
- `sitemap.xml` + `robots.txt`
- HTML semantik (satu `h1`, hierarki heading rapi, skip-link, `lang="id"`)

## Menjalankan lokal

```bash
# cukup buka index.html, atau jalankan server statis:
npx serve .
```

## Deploy

```bash
npx wrangler pages deploy . --project-name bangkah-hub --branch main
```

Domain produksi: <https://bangkah.tech>

## Lisensi

Kode boleh dipelajari dan diambil inspirasinya. Nama, logo, dan isi konten tetap milik Bangkah.
