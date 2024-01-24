import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
    const [title, setTitle] = useState(" TirtaTamiangCare - Website Resmi PDAM Tirta Tamiang - ");

  useEffect(() => {
    const speed = 100;
    let timeout;

    const moveTitle = () => {
      document.title = title;
      setTitle(prevTitle => prevTitle.substring(1, prevTitle.length) + prevTitle.charAt(0));
      timeout = setTimeout(moveTitle, speed);
    };

    moveTitle();

    return () => clearTimeout(timeout);
  }, [title]);

    const testimonialsSwiper = new Swiper('.testimonials-slider', {
      slidesPerView: 5,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

  return (
    <div>
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="container text-center text-md-left" data-aos="fade-up">
          <h1>Selamat Datang di <br /><span>TirtaTamiangCare - PDAM Tirta Tamiang</span></h1>
          <h2>Situs website resmi dari PDAM Tirta Tamiang untuk akses lebih mudah bagi pelanggan.</h2>
          <a href="#about" className="btn-get-started scrollto">Yuk Kenali</a>
        </div>
      </section>

      <main id="main"/>
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>Tentang Kami</h2>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <img src="assets/img/tentang.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <h3>TirtaTamiangCare - PDAM Tirta Tamiang</h3>
                <p align="justify">
                  Pada tahun 2008 Perusahaan Umum Daerah Air Minum (Perumda) Tirta Tamiang Kabupaten Aceh Tamiang didirikan berdasarkan Peraturan Bupati Aceh Tamiang No. 19 Tahun 2008 tanggal 16 September 2008 yang kemudian diubah Qanun Kabupaten Aceh Tamiang No. 8 Tahun 2010 tanggal 7 Juni 2010 tentang Pendirian Perusahaan Umum Daerah Air Minum (Perumda) Tirta Tamiang.
                </p>
                <ul style={{ textAlign: 'justify' }}>
                  <li><i className="bx bx-check-double"></i> PDAM Tirta Tamiang merupakan salah satu perusahaan milik Pemerintah Kabupaten Aceh Tamiang yang memiliki peranan penting dalam pendistribusian air bersih kepada seluruh masyarakat Kabupaten Aceh Tamiang. </li>
                  <li><i className="bx bx-check-double"></i> TirtaTamiangCare merupakan sistem informasi yang dikembangkan oleh PDAM Tirta Tamiang untuk meningkatkan efisiensi dan kualitas layanan pelanggan mengenai pendistribusian air bersih kepada masyarakat Kabupaten Aceh Tamiang.</li>
                </ul>
                <div className="row icon-boxes">
                  <div className="col-md-6">
                    <i className="bx bx-receipt"></i>
                    <h4>Visi</h4>
                    <p align="justify">Menjadikan PDAM Tirta Tamiang sebagai Perusahaan Daerah terbaik dalam pelayanan masyarakat.</p>
                    <a href="https://drive.google.com/file/d/1amOBHqvJ1bXEhsdzNck5ZXs5ARpKJft7/view?usp=sharing" className="btn btn-primary">Lainnya</a>
                  </div>
                  <div className="col-md-6 mt-4 mt-md-0">
                    <i className="bx bx-cube-alt"></i>
                    <h4>Misi</h4>
                    <p align="justify">Penyedia air minum yang mengutamakan kepuasan pelanggan baik kualitas, kuantitas, kontinuitas sesuai standard kesehatan dan menjadi sumber Pendapatan Asli Daerah (PAD).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Pelayanan</h2>
              <p>Silahkan pilih jenis layanan yang anda butuhkan berkut ini:</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-file"></i></div>
                  <h4><a href="/pasang-baru">Pemasangan Baru</a></h4>
                  <p>Informasi terkait syarat permohonan pemasangan baru</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-journal-richtext"></i></div>
                  <h4><a href="/cek-rekening">Cek Rekening</a></h4>
                  <p>Lihat jumlah tagihan/tunggakan pemakaian air Anda</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="icon-box">
                  <div className="icon"><i className="bi bi-headset"></i></div>
                  <h4><a href="/pengaduan">Pengaduan Pelanggan</a></h4>
                  <p>Sampaikan keluhan Anda terhadap pelayanan kami</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-title">
              <h2>Informasi</h2>
              <p>Cari hal-hal yang ingin anda ketahui terkait PDAM Tirta Tamiang disini:</p>
            </div>
            
            <div className="row portfolio-container">
              <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
                <div className="portfolio-wrap">
                  <figure>
                    <img src="assets/img/berita1.jpg" className="img-fluid" alt="" />
                  </figure>
                  <div className="portfolio-info">
                    <h4><a href="https://tribratanews.polresacehtamiang.com/jelang-hut-ke-72-humas-polres-aceh-tamiang-gelar-bakti-sosial-distribusikan-air-bersih-untuk-masyarakat/#gsc.tab=0">Berita 1</a></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
                <div className="portfolio-wrap">
                  <figure>
                    <img src="assets/img/berita2.jpg" className="img-fluid" alt="" />
                  </figure>
                  <div className="portfolio-info">
                    <h4><a href="https://www.ajnn.net/news/pdam-tirta-tamiang-rugi-rp4-m-pada-2022/index.html">Berita 2</a></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
                <div className="portfolio-wrap">
                  <figure>
                    <img src="assets/img/berita3.jpg" className="img-fluid" alt="" />
                  </figure>
                  <div className="portfolio-info">
                    <h4><a href="https://www.matatelinga.com/berita-aceh/ribuan-warga-aceh-tamiang-berang--air-pdam-mati-sejak-pagi/all">Berita 3</a></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                <div className="portfolio-wrap">
                  <figure>
                    <img src="assets/img/informasi/pengumuman.jpg" className="img-fluid" alt="" />
                  </figure>
                  <div className="portfolio-info">
                    <h4><a href="portfolio-details.html">Pengumuman 1</a></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                <div className="portfolio-wrap">
                  <figure>
                    <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                  </figure>
                  <div className="portfolio-info">
                    <h4><a href="portfolio-details.html">Pengumuman 2</a></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp" data-wow-delay="0.1s">
                <div className="portfolio-wrap">
                  <figure>
                    <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                  </figure>
                  <div className="portfolio-info">
                    <h4><a href="portfolio-details.html">Pengumuman 3</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section id="testimonials" className="testimonials section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Testimoni</h2>
            <p>Berikut testimoni dari pelanggan yang telah menggunakan layanan air bersih PDAM Tirta Tamiang</p>
          </div>

          <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Saya sangat puas dengan pelayanan PDAM Tirta Tamiang. Air bersihnya selalu lancar, dan tim mereka responsif terhadap setiap permintaan. Terima kasih atas layanan yang prima dan sukses selalu!
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials-1.jpg" className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Wow luar biasa pelayanan PDAM Tirta Tamiang sungguh memuaskan dan patut diacungi jempol. Air bersih selalu tersedia kapan pun kita butuhkan. Terimakasih atas konsistensi dan dedikasi tim PDAM.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials-2.jpg" className="testimonial-img" alt="" />
                  <h3>Sara Wilsson</h3>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Tirta Tamiang selalu memberikan pelayanan terbaik. Air bersihnya selalu jernih, dan pelayanan pelanggan mereka sangat ramah. Saya bangga menjadi pelanggan PDAM ini.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials-3.jpg" className="testimonial-img" alt="" />
                  <h3>Jena Karlis</h3>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    PDAM Tirta Tamiang tidak pernah mengecewakan air bersihnya stabil, dan tim mereka sangat responsif terhadap keluhan. Terima kasih atas kualitas pelayanan yang luar biasa.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials-4.jpg" className="testimonial-img" alt="" />
                  <h3>Matt Brandon</h3>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Apresiasi tinggi untuk PDAM Tirta Tamiang. Air bersihnya selalu terjaga, dan pelayanan pelanggan mereka sangat membantu. Semoga tetap menjadi penyedia air terbaik di kota ini.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials-5.jpg" className="testimonial-img" alt="" />
                  <h3>John Larson</h3>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
