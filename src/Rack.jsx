import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { projects } from "./data.js";

export default function Rack({ project }) {
  const index = projects.findIndex((p) => p.slug === project.slug);
  const related = [1, 2, 3]
    .map((offset) => projects[(index + offset) % projects.length])
    .filter((p) => p && p.slug !== project.slug);

  return (
    <>
      <a className="skip" href="#main">
        Lewati ke konten
      </a>
      <Header />
      <main className="rack wrap" id="main">
        <nav className="rack__crumbs" aria-label="Breadcrumb">
          <a href="/">Beranda</a>
          <span aria-hidden="true">→</span>
          <a href="/#gudang">Gudang</a>
          <span aria-hidden="true">→</span>
          <span aria-current="page">{project.no}</span>
        </nav>

        <p className="eyebrow">
          {project.no} · {project.kind}
        </p>
        <h1>{project.name}</h1>
        <p className="rack__lead">{project.description}</p>

        <div className="rack__meta">
          <span className="stamp">{project.display}</span>
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <ul className="rack__highlights">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="rack__actions">
          <a className="btn" href={project.url} target="_blank" rel="noopener external">
            Buka {project.name} →
          </a>
          <a className="rack__ask" href="/#kontak">
            Tanya soal rak ini
          </a>
        </div>

        <section className="rack__related" aria-labelledby="rak-lain">
          <h2 id="rak-lain">
            Rak <em>lain</em>
          </h2>
          <div className="rack__links">
            {related.map((p) => (
              <a className="rack__link" href={`/rak/${p.slug}/`} key={p.slug}>
                <span>{p.no}</span>
                <b>{p.name}</b>
                <span>{p.kind}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
