import { useState } from "react";
import { SITE } from "../data.js";

const IDLE = "Balasan dikirim dari alamat yang sama.";

export default function Contact() {
  const [note, setNote] = useState(IDLE);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setNote(`Alamat disalin: ${SITE.email}`);
    } catch {
      setNote(`Salin manual: ${SITE.email}`);
    }
    window.setTimeout(() => setNote(IDLE), 2500);
  }

  return (
    <section className="wrap" id="kontak">
      <div className="contact">
        <div>
          <h2>
            Hubungi <em>gudang</em>
          </h2>
          <p>
            Ada pertanyaan, temuan bug, atau ingin berkolaborasi? Kirim email ke alamat resmi di
            samping — semua pesan masuk ke satu pintu.
          </p>
        </div>
        <div>
          <a className="btn" href={`mailto:${SITE.email}`}>
            {SITE.email} →
          </a>
          <button className="copy" type="button" onClick={copyEmail}>
            Salin alamat email
          </button>
          <p className="hint" aria-live="polite">
            {note}
          </p>
        </div>
      </div>
    </section>
  );
}
