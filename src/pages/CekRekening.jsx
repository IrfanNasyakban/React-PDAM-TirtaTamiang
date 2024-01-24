import React from "react";
import "../styles/CekRekening.css"

const CekRekening = () => {
  return (
    <div className="item-center-rekening">
      <h2 className="text-h2-rekening">Cek Rekening PDAM Tirta Tamiang</h2>
      <p className="mt-2">Lihat tagihan/tunggakan air Anda disini:</p>
      <div class="box">
        <label className="label-rekening" for="inputPelanggan">Masukkan ID Pelanggan:</label>
        <input
          type="text"
          id="inputPelanggan"
          placeholder="Contoh: 123456789"
        />
        <br />
        <button className="me-2" id="cekButton">
          Cek Rekening
        </button>
        <button className="me-2" id="batalButton">
          Kembali
        </button>
      </div>
    </div>
  );
};

export default CekRekening;
