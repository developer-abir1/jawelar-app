import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/icon/logo.png"


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark p-0 ">
      <div className="container">
        <Link to="/" className=" text-decoration-none">  <a className="navbar-brand d-flex align-items-center justify-content-center"  >
          <img style={{ height: "50px" }} src={logo} alt="" />

          <span className="fw-bold  text-danger">নারী</span>
        </a></Link>
        <button className="navbar-toggler " style={{ backgroundColor: "darkcyan" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon   "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto ">
            <span className="nav-link active text-white"  >Home</span>
            <span className="nav-link text-white"  >Features</span>
            <span className="nav-link text-white"  >Pricing</span>
            <span className="nav-link text-white">Disabled</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;