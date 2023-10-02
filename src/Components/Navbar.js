import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg shadow sticky-top bg-none position-sticky">
  <div className="container-fluid">
    <a className="navbar-brand text-light " href="#">Navbar</a>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-light" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/about">ABOUT US</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/services">SERVICES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/blog">BLOG</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/contact">CONTACT</Link>
        </li>
       
        
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  );
}

export default Navbar;
