import React from "react";
import logo from "../assets/images/logo.png";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const LoginStat = localStorage.getItem("loginStatus");
  let Redirect = "";

  if (LoginStat === "true") {
    Redirect = "/profile";
  } else {
    Redirect = "/login";
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white pt-3">
        <div className="container py-3">
          <a className="navbar-brand text-dark" href="./Home">
            <img className="logo" src={logo} alt="logo..." width={150} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active mt-3 mx-2">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item mt-3 mx-2">
                <Link to="/service/wrt" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item mt-3 mx-2">
                <Link to="/career" className="nav-link">
                  Career
                </Link>
              </li>
              <li className="nav-item mt-3 mx-2">
                <Link to="/about" className="nav-link">
                  About us
                </Link>
              </li>
              <li className="nav-item mt-3 mx-2">
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item mx-2" id="Account">
                <Link to="/contact" className="nav-link">
                  <button className="border rounded btn-green p-3 full-width">
                    <i className="fas fa-user-circle"></i> Book a demo
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
