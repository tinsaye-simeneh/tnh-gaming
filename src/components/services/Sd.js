import React from "react";
import { FaEnvelope } from "react-icons/fa";
import {
  TfiFacebook,
  TfiTwitter,
  TfiInstagram,
  TfiLinkedin,
} from "react-icons/tfi";
import "../../index.css";

import { Outlet, Link } from "react-router-dom";

const Sd = () => {
  return (
    <div className="container">
      <div className="row bg-dark my-5 py-5">
        <div
          className="col-10 mx-auto text-white text-center"
          style={{
            fontSize: "3rem",
          }}
        >
          Software Development
          <hr
            className="text-green text-center mx-auto bg-green"
            style={{
              width: "10%",
              height: "5px",
              border: "none",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          />
          <span
            className="text-white"
            style={{
              fontSize: "1rem",
            }}
          >
            Home >> Software Development
          </span>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 mx-auto">
          <h4 className="text-left my-4">Software Development</h4>
          <p className="text-left">
            We create, build and develop a site that fits and caters to your
            needs, and your brand identity. We prioritize your opinion, this is
            why we are meticulous about our rendering to make sure you are
            satisfied.
            <br />
            <br />
            Technology Solutions: We provide solution consultancy and
            development to localise your offering to suit your needs, light
            front-ends, SMS, USSD and APPs solution.
          </p>
        </div>
        <div className="col-md-4 mx-auto">
          <ul className="list-group">
            <h3 className="text-center mt-4">Our Services</h3>
            <li className="list-group-item">
              <Link to="/wrt" className="text-dark text-decoration-none">
                WRT Turn Key Solution
                <span className="text-green float-end">></span>
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/ms" className="text-dark text-decoration-none">
                Managed Services
                <span className="text-green float-end">></span>
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/ds" className="text-dark text-decoration-none">
                Digital Marketing
                <span className="text-green float-end">></span>
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/sd" className="text-dark text-decoration-none">
                Software Development
                <span className="text-green float-end">></span>
              </Link>
            </li>
            <li className="list-group-item">
              <Link
                to="/consultancy"
                className="text-dark text-decoration-none"
              >
                Consultancy
                <span className="text-green float-end">></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="custom-container container mb-5 pb-5 bg-white rounded w-75">
        <div class="row mx-auto">
          <div class="col-md-6 mx-auto text-center my-3 mt-5">
            <FaEnvelope className="text-green" size="3rem" />
            <span
              className="text-dark ms-3 mt-2"
              style={{
                fontSize: "1.2rem",
              }}
            >
              Stay Updated With Us
            </span>
          </div>
          <div class="col-md-8 mx-auto text-center my-3">
            <div class="row">
              <input
                type="email"
                class="form-control p-3"
                placeholder="Signup to Our Newsletter"
              />
              <button class="p-3 px-5 mt-3 fullWidth btn btn-dark">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sd;
