import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const handleClick = () => {
  // Handle click logic
}



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  px-0 py-3">
      <div className="container-xl">
        <a className="navbar-brand" href="/">
          UniCraft
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-lg-auto">
            <a className="nav-item nav-link active" href="/">
              How it works
            </a>
            <a className="nav-item nav-link" href="/browse">
              Pricing
            </a>
            <a className="nav-item nav-link" href="/createBook">
              FAQ
            </a>
          </div>

          <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
            <a
              href="/login"
              className="w-full w-lg-auto btn custom-button"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
