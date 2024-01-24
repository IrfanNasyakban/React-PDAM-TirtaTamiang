import React from "react";
import "../styles/PasangBaru.css"
import PemasanganBaru from "../assets/pasangbaru.jpg"

const PasangBaru = () => {
  return (
    <div className="item-center-pasang-baru">
      <h2 className="text-h2-pasang-baru">Pemasangan Baru PDAM Tirta Tamiang</h2>
      <p className="mt-4">Baca pengumuman berikut sebelum melakukan pemasangan baru</p>
      <section>
        <div className="announcement-box-pasang-baru">
          <img
            className="img-announcement-pasang-baru"
            src={PemasanganBaru}
            alt="Gambar Pengumuman Pemasangan Baru"
          />
        </div>
      </section>
    </div>
  );
};

export default PasangBaru;
