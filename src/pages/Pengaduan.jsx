import React from "react";
import "../styles/Pengaduan.css"

const Pengaduan = () => {
  return (
    <div className="item-center-pengaduan">
      <h2 className="text-h2-pengaduan">Pengaduan Pelanggan PDAM Tirta Tamiang</h2>
      <p className="mt-2">Isi form pengaduan berikut jika Anda memiliki keluhan masalah air</p>
      <form className="form-pengaduan">
        <div className="form-group-pengaduan">
          <label className="label-pengaduan" for="idPelanggan">Id Pelanggan:</label>
          <input className="input-pengaduan" type="text" id="idPelanggan" name="idPelanggan" required />
        </div>

        <div className="form-group-pengaduan">
          <label className="label-pengaduan" for="tanggal">Tanggal:</label>
          <input className="input-pengaduan" type="date" id="tanggal" name="tanggal" required />
        </div>

        <div className="form-group-pengaduan">
          <label className="label-pengaduan" for="nama">Nama:</label>
          <input className="input-pengaduan" type="text" id="nama" name="nama" required />
        </div>

        <div className="form-group-pengaduan">
          <label className="label-pengaduan" for="sumberPengaduan">Sumber Pengaduan:</label>
          <select className="select-pengaduan" id="sumberPengaduan" name="sumberPengaduan">
            <option value="pelanggan" selected>
              Pelanggan
            </option>
            <option value="lainnya">Lainnya</option>
          </select>
        </div>

        <div className="form-group-pengaduan">
          <label className="label-pengaduan" for="noTelepon">No. Telepon:</label>
          <input className="input-pengaduan" type="tel" id="noTelepon" name="noTelepon" required />
        </div>

        <div className="form-group-pengaduan">
          <label className="label-pengaduan" for="pengaduanMelalui">Pengaduan Melalui:</label>
          <select className="select-pengaduan" id="pengaduanMelalui" name="pengaduanMelalui">
            <option value="datang">Datang</option>
            <option value="online">Online</option>
          </select>
        </div>

        <div className="form-group-pengaduan">
          <label className="label-pengaduan" for="alamat">Alamat:</label>
          <textarea className="textarea-pengaduan" id="alamat" name="alamat" rows="4" required></textarea>
        </div>

        <div className="form-group-pengaduan">
          <label className="label-pengaduan" for="isiPengaduan">Isi Pengaduan:</label>
          <textarea
            className="textarea-pengaduan"
            id="isiPengaduan"
            name="isiPengaduan"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="form-group-pengaduan">
          <button className="button-pengaduan" type="submit">Kirim</button>
          <button
            type="button"
            className="cancel-pengaduan"
            onclick="location.href='halaman_utama.html'"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
};

export default Pengaduan;
