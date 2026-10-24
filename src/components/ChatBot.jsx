import { useEffect, useRef, useState } from "react";
import { CHAT } from "../chat.js";
import { SITE } from "../data.js";

const byId = Object.fromEntries(CHAT.questions.map((q) => [q.id, q]));

const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
  CHAT.mailSubject
)}&body=${encodeURIComponent(CHAT.mailBody)}`;

export default function ChatBot({ defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const [active, setActive] = useState(null);
  const [thread, setThread] = useState([]);
  const bodyRef = useRef(null);
  const closeRef = useRef(null);
  const panelRef = useRef(null);
  const launcherRef = useRef(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      closeRef.current?.focus();
      return;
    }
    if (wasOpen.current) {
      wasOpen.current = false;
      launcherRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key !== "Tab") return;
      const focusable = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
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
          aria-modal="true"
          aria-labelledby="bot-title"
          aria-describedby="bot-sub"
          ref={panelRef}
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
        ref={launcherRef}
      >
        <span className="bot__icon" aria-hidden="true">{open ? "×" : "?"}</span>
        <span>{open ? "Tutup" : "Tanya"}</span>
      </button>
    </div>
  );
}
