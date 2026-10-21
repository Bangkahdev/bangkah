import { SITE } from "../data.js";

export default function Hero() {
  return (
    <section className="hero wrap">
      <p className="eyebrow">Pabrik &amp; gudang project · bangkah.tech</p>
      <h1>
        Gudang
        <br />
        <span className="outline">project</span>
        <br />
        <span className="hl">publik</span>
      </h1>

      <div className="hero__body">
        <div>
          <p className="lead">
            <b>bangkah.tech</b> adalah gudang tempat project publik Bangkah disimpan. Setiap
            dokumentasi dan alat hasil rakitan di lantai pabrik mendapat raknya sendiri berupa
            subdomain — dan semuanya terbuka untuk siapa saja, tanpa akun, tanpa izin khusus.
          </p>
          <div className="stamps">
            <span className="stamp">No akun</span>
            <span className="stamp">No paywall</span>
            <span className="stamp">Selalu bertambah</span>
          </div>
        </div>

        <aside className="panel" aria-label="Papan gudang">
          <div className="panel__head">
            <span>Papan gudang</span>
            <span>BT-HUB</span>
          </div>
          <dl>
            <dt>Domain</dt>
            <dd>bangkah.tech</dd>
            <dt>Isi rak</dt>
            <dd>3 project publik</dd>
            <dt>Akses</dt>
            <dd>Terbuka untuk publik</dd>
            <dt>Kontak</dt>
            <dd>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </dd>
            <dt>Status</dt>
            <dd>Operasional</dd>
          </dl>
        </aside>
      </div>
    </section>
  );
}
