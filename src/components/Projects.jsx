import { projects } from "../data.js";

function ProjectCard({ project }) {
  return (
    <a
      className={`card card--${project.theme}`}
      href={project.url}
      target="_blank"
      rel="noopener external"
    >
      <div className="card__top">
        <span className="card__no">{project.no}</span>
        <span className="card__kind">{project.kind}</span>
      </div>
      <div className="card__body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="card__tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="card__foot">
        <span className="url">{project.display}</span>
        <span className="go">Buka →</span>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section className="section wrap" id="gudang">
      <div className="section__head">
        <h2>
          Isi <em>gudang</em>
        </h2>
        <p>Setiap rak punya alamat sendiri. Buka langsung, tidak perlu tanda tangan.</p>
        <span className="count">{projects.length} rak</span>
      </div>

      <div className="grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}

        <div className="card card--empty">
          <div className="card__top">
            <span className="card__no">{`RAK ${String(projects.length + 1).padStart(2, "0")}`}</span>
            <span className="card__kind">Kosong</span>
          </div>
          <div className="card__body">
            <h3>Sedang dirakit</h3>
            <p>Rak ini menunggu barang berikutnya. Project baru sedang dikerjakan di lantai pabrik.</p>
            <div className="card__tags">
              <span className="tag">Segera</span>
              <span className="tag">Dalam proses</span>
            </div>
          </div>
          <div className="card__foot">
            <span className="url">slot berikutnya</span>
            <span className="go">—</span>
          </div>
        </div>
      </div>
    </section>
  );
}
