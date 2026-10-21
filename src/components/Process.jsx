import { steps } from "../data.js";

export default function Process() {
  return (
    <section className="section wrap" id="cara-kerja">
      <div className="section__head">
        <h2>
          Cara <em>kerja</em>
        </h2>
        <p>Barang tidak muncul tiba-tiba di rak. Semua lewat alur yang sama.</p>
        <span className="count">3 tahap</span>
      </div>
      <div className="line-list">
        {steps.map((step) => (
          <div className="step" key={step.phase}>
            <b>{step.phase}</b>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
