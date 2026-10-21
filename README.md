# bangkah.tech

Situs gudang project publik **Bangkah** — satu domain, banyak rak.

Dibangun dengan **React 19 + Vite**, di-prerender ke HTML statis saat build (agar SEO dan First Paint tetap bagus tanpa JavaScript), bergaya neo-brutalism, dan di-deploy otomatis ke Cloudflare Pages lewat GitHub Actions.

## Stack

| Bagian | Teknologi |
|---|---|
| UI | React 19 (komponen di `src/components/`) |
| Build | Vite 8 |
| Prerender | `scripts/prerender.mjs` — React `renderToString` → `dist/index.html` + `dist/404.html` |
| Hosting | Cloudflare Pages (`bangkah-hub`) |
| CI/CD | GitHub Actions (`.github/workflows/deploy.yml`) |

## Struktur

```
src/
  App.jsx            komposisi halaman
  main.jsx           entry client (hydrateRoot)
  entry-server.jsx   entry SSR/prerender
  seo.js             title, meta, Open Graph, JSON-LD
  data.js            daftar project, statistik, langkah
  styles.css         neo-brutalism
  components/        Ticker, Header, Hero, Stats, Projects, Process, Contact, Footer
public/
  favicon.svg  og.png  robots.txt  _headers
scripts/prerender.mjs
```

## Perintah

```bash
npm install
npm run dev        # server lokal
npm run build      # vite build + prerender → dist/
npm run preview    # cek hasil build
npm run deploy     # build + deploy manual ke Cloudflare Pages
```

## SEO

- HTML hasil prerender sudah berisi seluruh konten (tidak bergantung JS untuk diindeks)
- Title, description, canonical, `hreflang`, robots lengkap
- Open Graph + Twitter Card dengan `og.png` 1200×630
- JSON-LD: `WebSite`, `Organization`, `CollectionPage`, `ItemList`
- `sitemap.xml` dibuat saat build, `robots.txt` statis
- HTML semantik: satu `h1`, hierarki heading, skip-link, `lang="id"`
- 404 dengan `noindex`

## CI/CD

Setiap push ke `main` (dan `workflow_dispatch`) menjalankan:

1. `npm ci` + `npm run build` (termasuk prerender)
2. Upload artefak `dist`
3. Deploy ke Cloudflare Pages project `bangkah-hub` (production branch `main`)

Pull request hanya menjalankan build, tanpa deploy.

Secret yang dibutuhkan (Settings → Secrets and variables → Actions):

| Secret | Isi |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Token dengan permission **Cloudflare Pages: Edit** untuk akun ini |
| `CLOUDFLARE_ACCOUNT_ID` | ID akun Cloudflare |

## Lisensi

Kode boleh dipelajari dan diambil inspirasinya. Nama, logo, dan isi konten tetap milik Bangkah.
