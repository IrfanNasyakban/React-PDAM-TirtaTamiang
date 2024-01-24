import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <div className="logo me-auto">
            <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img src="assets/img/logo.jpg" width="30" height="28" alt="" style={{ marginRight: '10px' }} />
              <h1><span className="text-warning">TirtaTamiang</span>Care</h1>
            </a>
          </div>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a className="nav-link scrollto" href="#hero">Beranda</a></li>
              <li><a className="nav-link scrollto" href="#about">Tentang</a></li>
              <li><a className="nav-link scrollto" href="#services">Pelayanan</a></li>
              <li><a className="nav-link scrollto " href="#portfolio">Informasi</a></li>
              <li><a className="nav-link scrollto " href="#testimonials">Testimoni</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
