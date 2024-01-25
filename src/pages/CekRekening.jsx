import React, { useState } from "react";
import "../styles/CekRekening.css";
import { Link } from "react-router-dom";
import axios from "axios";

const CekRekening = () => {
  const [idPelanggan, setIdPelanggan] = useState("");
  const [noTagihan, setNoTagihan] = useState("");
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [zona, setZona] = useState("");
  const [waktuTagihan, setWaktuTagihan] = useState("");
  const [golonganRumah, setGolonganRumah] = useState("");
  const [jumlahBiaya, setJumlahBiaya] = useState("");

  const getPelangganById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/pelanggan/${idPelanggan}`
      );
      setIdPelanggan(response.data.idPelanggan);
      setNoTagihan(response.data.noTagihan);
      setNama(response.data.nama);
      setAlamat(response.data.alamat);
      setZona(response.data.zona);
      setWaktuTagihan(response.data.waktuTagihan);
      setGolonganRumah(response.data.golonganRumah);
      setJumlahBiaya(response.data.jumlahBiaya);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="item-center-rekening">
      <h2 className="text-h2-rekening">Cek Rekening PDAM Tirta Tamiang</h2>
      <p className="mt-2">Lihat tagihan/tunggakan air Anda disini:</p>
      <div class="box">
        <label className="label-rekening" for="inputPelanggan">
          Masukkan ID Pelanggan:
        </label>
        <input
          type="text"
          id="inputPelanggan"
          placeholder="Contoh: 123456789"
          value={idPelanggan}
          onChange={(e) => setIdPelanggan(e.target.value)}
        />
        <br />
        <button className="me-2" id="cekButton" onClick={getPelangganById}>
          Cek Rekening
        </button>
        <Link className="me-2" id="batalButton" to="/">
          Kembali
        </Link>
      </div>

      {idPelanggan && (
        <div className="printable">
          <h2 className="lampiran">Lampiran</h2>
          <table className="table colors table-bordered">
            <thead>
              <tr>
                <th>ID Pelanggan</th>
                <th>No Tagihan</th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Zona</th>
                <th>Waktu Tagihan</th>
                <th>Golongan Rumah</th>
                <th>Jumlah Biaya</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{idPelanggan}</td>
                <td>{noTagihan}</td>
                <td>{nama}</td>
                <td>{alamat}</td>
                <td>{zona}</td>
                <td>{waktuTagihan}</td>
                <td>{golonganRumah}</td>
                <td>{jumlahBiaya}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    id="cetakButton"
                    to="/"
                    onClick={handlePrint}
                  >
                    Cetak
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CekRekening;
