export default function Header() {
  return (
    <header className="top">
      <div className="top__inner">
        <a className="brand" href="/">
          <span className="brand__mark">B</span>
          BANGKAH<span>.TECH</span>
        </a>
        <nav aria-label="Navigasi utama">
          <a href="#gudang">Gudang</a>
          <a href="#cara-kerja">Cara kerja</a>
          <a href="#faq">FAQ</a>
          <a href="#kontak">Kontak</a>
        </nav>
        <span className="live">
          <i />
          Terbuka
        </span>
      </div>
    </header>
  );
}
