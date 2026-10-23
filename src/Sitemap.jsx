import { SITE, projects } from "./data.js";

export default function Sitemap() {
  const owner = SITE.owner;
  const updated = new Date().toISOString().slice(0, 10);

  return (
    <main className="sm" id="main">
      <div className="sm__inner">
        <a className="sm__back" href="/">← Kembali ke beranda</a>

        <p className="eyebrow">bangkah.tech</p>
        <h1>Peta Situs</h1>
        <p className="sm__lead">
          Semua halaman dan project publik Bangkah dalam satu daftar. Halaman ini
          diperbarui otomatis setiap kali situs di-deploy.
        </p>

        <div className="sm__grid">
          <section className="sm__block">
            <h2>Halaman</h2>
            <ul>
              <li><a href="/">Beranda</a> — gudang project publik</li>
              <li><a href="/#gudang">Gudang</a> — daftar rak project</li>
              <li><a href="/#cara-kerja">Cara kerja</a> — alur dari rakitan ke rilis</li>
              <li><a href="/#faq">FAQ</a> — pertanyaan umum soal project</li>
              <li><a href="/#kontak">Kontak</a> — surel dan kanal resmi</li>
              <li><a href="/peta-situs/">Peta situs</a> — halaman ini</li>
            </ul>
          </section>

          <section className="sm__block">
            <h2>Project publik</h2>
            <ul>
              {projects.map((p) => (
                <li key={p.name}>
                  <a href={p.url} target="_blank" rel="noopener">{p.name}</a>
                  {" — "}
                  {p.display}
                </li>
              ))}
            </ul>
          </section>

          <section className="sm__block">
            <h2>Berkas teknis</h2>
            <ul>
              <li><a href="/sitemap.xml">sitemap.xml</a> — daftar URL untuk mesin pencari</li>
              <li><a href="/feed.xml">feed.xml</a> — feed Atom rak publik</li>
              <li><a href="/llms.txt">llms.txt</a> — indeks ringkas untuk LLM</li>
              <li><a href="/llms-full.txt">llms-full.txt</a> — arsip lengkap untuk LLM</li>
              <li><a href="/site.webmanifest">site.webmanifest</a> — metadata aplikasi web</li>
              <li><a href="/humans.txt">humans.txt</a> — kredit pengelola</li>
              <li><a href="/robots.txt">robots.txt</a> — aturan perayapan</li>
              <li><a href="/.well-known/security.txt">security.txt</a> — kontak keamanan</li>
            </ul>
          </section>

          <section className="sm__block">
            <h2>Kontak</h2>
            <ul>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a href={owner.github} target="_blank" rel="noopener me">github.com/Bangkah</a></li>
              <li><a href={owner.linkedin} target="_blank" rel="noopener me">LinkedIn</a></li>
              <li><a href={owner.website} target="_blank" rel="noopener me">mdhiyaulatha.me</a></li>
            </ul>
          </section>
        </div>

        <p className="sm__note">
          Terakhir diperbarui: <time dateTime={updated}>{updated}</time> · Dikelola oleh {owner.name}
        </p>
      </div>
    </main>
  );
}
