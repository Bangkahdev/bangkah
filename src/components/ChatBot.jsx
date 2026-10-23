import { useEffect, useRef, useState } from "react";
import { CHAT } from "../chat.js";
import { SITE } from "../data.js";

const byId = Object.fromEntries(CHAT.questions.map((q) => [q.id, q]));

const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
  CHAT.mailSubject
)}&body=${encodeURIComponent(CHAT.mailBody)}`;

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [thread, setThread] = useState([]);
  const bodyRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const el = bodyRef.current;
    if (open && el) el.scrollTop = el.scrollHeight;
  }, [open, thread, active]);

  function ask(question) {
    setThread((prev) => [
      ...prev,
      { role: "user", text: question.label },
      { role: "bot", text: question.answer, links: question.links },
    ]);
    setActive(question.id);
  }

  function reset() {
    setThread([]);
    setActive(null);
  }

  const activeQuestion = active ? byId[active] : null;
  const options = activeQuestion
    ? activeQuestion.related.map((id) => byId[id]).filter(Boolean)
    : CHAT.questions;

  return (
    <div className="bot">
      {open && (
        <section
          className="bot__panel"
          role="dialog"
          aria-labelledby="bot-title"
          aria-describedby="bot-sub"
        >
          <header className="bot__head">
            <div>
              <h2 id="bot-title">{CHAT.title}</h2>
              <p id="bot-sub">{CHAT.subtitle}</p>
            </div>
            <button
              type="button"
              className="bot__close"
              onClick={() => setOpen(false)}
              aria-label="Tutup obrolan"
              ref={closeRef}
            >
              ×
            </button>
          </header>

          <div className="bot__body" ref={bodyRef}>
            <div className="bot__msg bot__msg--bot">
              <p>{CHAT.greeting}</p>
            </div>

            <div role="log" aria-live="polite" className="bot__thread">
              {thread.map((m, i) =>
                m.role === "user" ? (
                  <div key={i} className="bot__msg bot__msg--user">
                    <p>{m.text}</p>
                  </div>
                ) : (
                  <div key={i} className="bot__msg bot__msg--bot">
                    <p>{m.text}</p>
                    {m.links?.length > 0 && (
                      <div className="bot__links">
                        {m.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            {...(l.external
                              ? { target: "_blank", rel: "noopener" }
                              : {})}
                          >
                            {l.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>

            <div className="bot__options">
              <p className="bot__label">
                {activeQuestion ? CHAT.followUpLabel : CHAT.optionsLabel}
              </p>
              {options.map((q) => (
                <button
                  key={q.id}
                  type="button"
                  className="bot__opt"
                  onClick={() => ask(q)}
                >
                  {q.label}
                </button>
              ))}
              {thread.length > 0 && (
                <button
                  type="button"
                  className="bot__opt bot__opt--ghost"
                  onClick={reset}
                >
                  {CHAT.resetLabel}
                </button>
              )}
            </div>
          </div>

          <footer className="bot__foot">
            <a className="bot__mail" href={mailto}>
              {CHAT.fallbackLabel}
            </a>
          </footer>
        </section>
      )}

      <button
        type="button"
        className="bot__launcher"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Tutup — tutup obrolan bantuan" : "Tanya — buka obrolan bantuan"}
      >
        <span className="bot__icon" aria-hidden="true">{open ? "×" : "?"}</span>
        <span>{open ? "Tutup" : "Tanya"}</span>
      </button>
    </div>
  );
}
