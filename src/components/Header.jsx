import { useEffect, useRef } from "react";

const links = [
  { href: "/#gudang", label: "Gudang" },
  { href: "/#cara-kerja", label: "Cara kerja" },
  { href: "/#faq", label: "FAQ" },
  { href: "/catatan/", label: "Catatan" },
  { href: "/#kontak", label: "Kontak" },
];

export default function Header() {
  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key !== "Escape" || !toggleRef.current?.checked) return;
      toggleRef.current.checked = false;
      toggleRef.current.focus();
    };
    const onPointer = (event) => {
      if (!toggleRef.current?.checked) return;
      if (!headerRef.current?.contains(event.target)) toggleRef.current.checked = false;
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  return (
    <header className="top" ref={headerRef}>
      <div className="top__inner">
        <a className="brand" href="/">
          <span className="brand__mark">B</span>
          BANGKAH<span>.TECH</span>
        </a>

        <input
          type="checkbox"
          id="nav-toggle"
          className="top__checkbox"
          aria-label="Menu navigasi"
          aria-controls="nav-utama"
          ref={toggleRef}
        />
        <label htmlFor="nav-toggle" className="top__toggle">
          <span className="top__toggle-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </label>

        <nav
          id="nav-utama"
          aria-label="Navigasi utama"
          onClick={(event) => {
            if (event.target.closest("a") && toggleRef.current) {
              toggleRef.current.checked = false;
            }
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
