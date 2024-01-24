import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>PDAM Tirta Tamiang</h3>
                <p align="justify">
                  Berkomitmen untuk memberikan pelayanan terbaik kepada pelanggan dengan berupaya untuk
                  senantiasa siap mendengarkan saran dan keluhan mereka.<br></br>
                  Jl. Ir. H. Juanda No.19 Desa Tanjung Karang <br></br>
                  Kecamatan Karang Baru - 24476<br></br>
                  Kabupaten Aceh Tamiang <br></br>
                  <strong>Telp/Faks:</strong>(0641) 332992<br></br>
                  <strong>Email:</strong> perumda@tirtatamiang.co.id<br></br>
                </p>
              </div>

              <div className="col-lg-2 col-md-5 footer-links">
                <h4>Tautan Lainnya</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="hero">Beranda</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="about">Tentang Kami</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="services">Pelayanan</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="informasi">Informasi</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Kontak</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Lokasi Perusahaan</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15914.57996115395!2d98.0508259!3d4.2889777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303775d7730ee733%3A0x8fa7ef86a0362806!2sPDAM%20Tirta%20Tamiang!5e0!3m2!1sid!2sid!4v1705023469246!5m2!1sid!2sid"
                  width="750" height="350" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright <strong><span>PDAM Tirta Tamiang</span></strong>. 2024
            </div>
            <div className="credits">
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> dan Fannisa Nadira
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
