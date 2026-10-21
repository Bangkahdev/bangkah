import { SITE } from "../data.js";

export default function Footer() {
  return (
    <footer>
      <div className="foot">
        <span>
          <strong>BANGKAH.TECH</strong> · gudang project publik
        </span>
        <span>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </span>
        <span>© 2026 Bangkah</span>
      </div>
    </footer>
  );
}
