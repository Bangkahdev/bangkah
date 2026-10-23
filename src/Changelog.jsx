import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { changelog } from "./changelog.js";

const fmt = (date) =>
  new Date(`${date}T00:00:00+07:00`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  });

export default function Changelog() {
  return (
    <>
      <a className="skip" href="#main">
        Lewati ke konten
      </a>
      <Header />
      <main className="log wrap" id="main">
        <nav className="log__crumbs" aria-label="Breadcrumb">
          <a href="/">Beranda</a>
          <span aria-hidden="true">→</span>
          <span aria-current="page">Catatan</span>
        </nav>

        <p className="eyebrow">Catatan rilis</p>
        <h1>Catatan</h1>
        <p className="log__lead">
          Perubahan di gudang, rak baru, dan perbaikan situs — dicatat berurutan dari
          yang terbaru. Ikuti lewat <a href="/feed.xml">feed Atom</a>.
        </p>

        <ol className="log__list">
          {changelog.map((entry) => (
            <li className="log__item" key={entry.id} id={entry.id}>
              <time className="log__date" dateTime={entry.date}>
                {fmt(entry.date)}
              </time>
              <article>
                <h2>{entry.title}</h2>
                <p>{entry.description}</p>
                {entry.links.length > 0 && (
                  <div className="log__links">
                    {entry.links.map((link) => (
                      <a href={link.href} key={link.href}>
                        {link.label} →
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </li>
          ))}
        </ol>

        <p className="log__note">
          Arsip lengkap juga tersedia di <a href="/llms-full.txt">llms-full.txt</a>.
        </p>
      </main>
      <Footer />
    </>
  );
}
