import { CHAT } from "../chat.js";

export default function Faq() {
  return (
    <section className="section wrap" id="faq">
      <div className="section__head">
        <h2>
          Tanya <em>jawab</em>
        </h2>
        <p>Pertanyaan yang paling sering muncul soal project dan pengelolanya.</p>
        <span className="count">{CHAT.questions.length} jawaban</span>
      </div>

      <div className="faq">
        {CHAT.questions.map((q) => (
          <details className="faq__item" key={q.id}>
            <summary>{q.label}</summary>
            <div className="faq__body">
              <p>{q.answer}</p>
              {q.links?.length > 0 && (
                <div className="faq__links">
                  {q.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      {...(l.external ? { target: "_blank", rel: "noopener" } : {})}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
