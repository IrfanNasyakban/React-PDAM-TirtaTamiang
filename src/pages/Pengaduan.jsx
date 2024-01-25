import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Modal } from "bootstrap";
import axios from "axios";
import "../styles/Pengaduan.css";

const Pengaduan = () => {
  const [idPelanggan, setIdPelanggan] = useState("");
  const [nama, setNama] = useState("");
  const [noTelepon, setNoTelepon] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [sumberPengaduan, setSumberPengaduan] = useState("");
  const [pengaduanMelalui, setPengaduanMelalui] = useState("");
  const [isiPengaduan, setIsiPengaduan] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const savePengaduan = async (e) => {
    e.preventDefault();
    console.log("State sebelum dikirim:", {
      idPelanggan,
      nama,
      noTelepon,
      alamat,
      tanggal,
      sumberPengaduan,
      pengaduanMelalui,
      isiPengaduan,
    });
    const formData = new FormData();
    formData.append("idPelanggan", idPelanggan);
    formData.append("nama", nama);
    formData.append("noTelepon", noTelepon);
    formData.append("alamat", alamat);
    formData.append("tanggal", tanggal);
    formData.append("sumberPengaduan", sumberPengaduan);
    formData.append("pengaduanMelalui", pengaduanMelalui);
    formData.append("isiPengaduan", isiPengaduan);
    console.log(formData);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    try {
      await axios.post("http://localhost:5000/pengaduan", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const myModal = new Modal(document.getElementById('exampleModal'), {}); // Inisialisasi modal saat komponen dimount
    if (showModal) {
      myModal.show(); // Tampilkan modal jika state showModal true
    }
  }, [showModal]);

  const closeModal = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <div className="item-center-pengaduan">
      <h2 className="text-h2-pengaduan">
        Pengaduan Pelanggan PDAM Tirta Tamiang
      </h2>
      <p className="mt-2">
        Isi form pengaduan berikut jika Anda memiliki keluhan masalah air
      </p>
      <form onSubmit={savePengaduan}>
        <div className="form-group">
          <label className="label" for="idPelanggan">
            Id Pelanggan:
          </label>
          <input
            className="input input"
            type="text"
            id="idPelanggan"
            name="idPelanggan"
            value={idPelanggan}
            onChange={(e) => setIdPelanggan(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label" for="tanggal">
            Tanggal:
          </label>
          <input
            className="input"
            type="date"
            id="tanggal"
            name="tanggal"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="label" for="nama">
            Nama:
          </label>
          <input
            className="input"
            type="text"
            id="nama"
            name="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="label" for="sumberPengaduan">
            Sumber Pengaduan:
          </label>
          <select
            className="select"
            value={sumberPengaduan}
            onChange={(e) => setSumberPengaduan(e.target.value)}
          >
            <option>-- Pilih --</option>
            <option value="Pelanggan">Pelanggan</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        <div className="form-group">
          <label className="label" for="noTelepon">
            No. Telepon:
          </label>
          <input
            className="input"
            type="tel"
            id="noTelepon"
            name="noTelepon"
            value={noTelepon}
            onChange={(e) => setNoTelepon(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="label" for="pengaduanMelalui">
            Pengaduan Melalui:
          </label>
          <select
            className="select"
            value={pengaduanMelalui}
            onChange={(e) => setPengaduanMelalui(e.target.value)}
          >
            <option>-- Pilih --</option>
            <option value="Datang">Datang</option>
            <option value="Online">Online</option>
          </select>
        </div>

        <div className="form-group">
          <label className="label" for="alamat">
            Alamat:
          </label>
          <textarea
            className="textarea"
            id="alamat"
            name="alamat"
            rows="4"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label className="label" for="isiPengaduan">
            Isi Pengaduan:
          </label>
          <textarea
            className="textarea"
            id="isiPengaduan"
            name="isiPengaduan"
            rows="4"
            value={isiPengaduan}
            onChange={(e) => setIsiPengaduan(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <button className="button" type="submit" onClick={savePengaduan}>
            Kirim
          </button>
          <Link type="button" className="cancel" to="/">
            Batal
          </Link>
        </div>
      </form>
      {/* Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!showModal}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Informasi
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Data Laporan Pengaduan sudah dikirim, mohon tunggu informasi
                selanjutnya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pengaduan;
