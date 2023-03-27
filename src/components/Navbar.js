import React from "react";
import logo from "../assets/images/logo.png";
import { TbSpeakerphone } from "react-icons/tb";
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
        <div className="container py-3 mx-auto text-center">
          <a className="navbar-brand text-dark  mobile-logo" href="./Home">
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
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active mt-3 mx-2 desktop-logo">
                <Link to="/" className="nav-link">
                  <a className="navbar-brand text-dark" href="./Home">
                    <img
                      className="logo"
                      src={logo}
                      alt="logo..."
                      width={150}
                    />
                  </a>
                </Link>
              </li>
              <li className="nav-item active mt-3 mx-2">
                <Link
                  to="/"
                  className="nav-link text-dark"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mt-3 mx-2">
                <div class="dropdown show text-secondary">
                  <a
                    class="btn btn-white dropdown-toggle text-secondary pt-2 text-dark"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    style={{
                      fontWeight: "bold",
                    }}
                    aria-expanded="false"
                  >
                    Services
                  </a>

                  <div
                    class="dropdown-menu text-center border-0"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a
                      href="/wrt"
                      class="dropdown-item"
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      wrt Bet turn Key
                    </a>
                    <a
                      href="/ms"
                      class="dropdown-item"
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Managed Services
                    </a>
                    <a
                      href="/dm"
                      class="dropdown-item"
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Digital Marketing
                    </a>
                    <a
                      href="/sd"
                      class="dropdown-item"
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Software Development
                    </a>
                    <a
                      href="/consultancy"
                      class="dropdown-item"
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Consultancy
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item mt-3 mx-2">
                <Link
                  to="/career"
                  className="nav-link text-dark"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Career
                </Link>
              </li>
              <li className="nav-item mt-3 mx-2">
                <Link
                  to="/about"
                  className="nav-link text-dark"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  About us
                </Link>
              </li>
              <li className="nav-item mt-3 mx-2">
                <Link
                  to="/contact"
                  className="nav-link text-dark"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item mx-2" id="Account">
                <Link to="/contact" className="nav-link">
                  <button
                    className="border rounded btn-green p-3 full-width text-dark"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    <TbSpeakerphone className="me-2" color="white" size={25} />
                    Book a demo
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
