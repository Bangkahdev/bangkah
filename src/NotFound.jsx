export default function NotFound() {
  return (
    <div className="nf-page">
      <div className="nf-box">
        <span className="nf-code">404 · RAK TIDAK ADA</span>
        <h1>Rak kosong</h1>
        <p>
          Barang yang kamu cari tidak ada di gudang ini. Mungkin sudah dipindah, mungkin memang
          belum diproduksi.
        </p>
        <a className="nf-link" href="/">
          Kembali ke gudang →
        </a>
      </div>
    </div>
  );
}
