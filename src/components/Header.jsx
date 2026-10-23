import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/#gudang", label: "Gudang" },
  { href: "/#cara-kerja", label: "Cara kerja" },
  { href: "/#faq", label: "FAQ" },
  { href: "/catatan/", label: "Catatan" },
  { href: "/#kontak", label: "Kontak" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointer = (event) => {
      if (
        !navRef.current?.contains(event.target) &&
        !toggleRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <header className="top">
      <div className="top__inner">
        <a className="brand" href="/">
          <span className="brand__mark">B</span>
          BANGKAH<span>.TECH</span>
        </a>

        <button
          type="button"
          className="top__toggle"
          aria-expanded={open}
          aria-controls="nav-utama"
          aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
          ref={toggleRef}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="top__toggle-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>

        <nav
          id="nav-utama"
          ref={navRef}
          className={open ? "is-open" : undefined}
          aria-label="Navigasi utama"
          onClick={(event) => {
            if (event.target.closest("a")) setOpen(false);
          }}
        >
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <span className="live">
          <i />
          Terbuka
        </span>
      </div>
    </header>
  );
}
