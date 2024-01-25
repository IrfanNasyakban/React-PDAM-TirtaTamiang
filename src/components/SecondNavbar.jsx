import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Navbar.css"

const SecondNavbar = () => {
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
        </div>
      </header>
    </div>
  )
}

export default SecondNavbar
