import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/icon/logo.png"


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark p-0 ">
      <div class="container">
        <Link to="/" className=" text-decoration-none">  <a class="navbar-brand d-flex align-items-center justify-content-center" href="#">
          <img style={{ height: "50px" }} src={logo} alt="" srcset="" />

          <span className="fw-bold  text-danger">নারী</span>
        </a></Link>
        <button class="navbar-toggler " style={{ color: 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon   "></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto ">
            <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
            <a class="nav-link text-white" href="#">Features</a>
            <a class="nav-link text-white" href="#">Pricing</a>
            <a class="nav-link text-white">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;