import { SITE, projects } from "../data.js";

const owner = SITE.owner;

export default function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="foot__grid">
          <div className="foot__brand">
            <a className="brand brand--foot" href="/">
              <span className="brand__mark">B</span>
              BANGKAH<span>.TECH</span>
            </a>
            <p className="foot__desc">
              Gudang project publik Bangkah. Dokumentasi, alat, dan catatan kerja untuk
              pengembang — terbuka tanpa akun, tanpa paywall.
            </p>
            <p className="foot__owner">
              Dikelola oleh <strong>{owner.name}</strong>
            </p>
          </div>

          <nav className="foot__col" aria-labelledby="foot-nav">
            <h2 className="foot__title" id="foot-nav">Jelajahi</h2>
            <ul>
              <li><a href="/#gudang">Gudang</a></li>
              <li><a href="/#cara-kerja">Cara kerja</a></li>
              <li><a href="/#faq">FAQ</a></li>
              <li><a href="/catatan/">Catatan</a></li>
              <li><a href="/#kontak">Kontak</a></li>
              <li><a href="/peta-situs/">Peta situs</a></li>
            </ul>
          </nav>

          <nav className="foot__col" aria-labelledby="foot-projects">
            <h2 className="foot__title" id="foot-projects">Project</h2>
            <ul>
              {projects.map((p) => (
                <li key={p.name}>
                  <a href={`/rak/${p.slug}/`}>{p.name}</a>
                </li>
              ))}
              <li><span className="foot__soon">Rak berikutnya — segera</span></li>
            </ul>
          </nav>

          <div className="foot__col">
            <h2 className="foot__title">Kontak &amp; sosial</h2>
            <ul>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <a href={owner.github} target="_blank" rel="noopener me">
                  github.com/Bangkah
                </a>
              </li>
              <li>
                <a href={owner.linkedin} target="_blank" rel="noopener me">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={owner.website} target="_blank" rel="noopener me">
                  mdhiyaulatha.me
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot__bottom">
          <p>© 2026 Bangkah. Seluruh hak atas nama, logo, dan konten dilindungi.</p>
          <p>
            {SITE.domain} · {owner.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
