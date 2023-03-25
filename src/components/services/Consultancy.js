import React from "react";
import { FaEnvelope } from "react-icons/fa";
import {
  TfiFacebook,
  TfiTwitter,
  TfiInstagram,
  TfiLinkedin,
} from "react-icons/tfi";
import "../../index.css";

const Consultancy = () => {
  return (
    <div className="container">
      <div className="row bg-dark my-5 py-5">
        <div
          className="col-10 mx-auto text-white text-center"
          style={{
            fontSize: "2rem",
          }}
        >
          Consultancy
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
            Home >> Consultancy
          </span>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 mx-auto">
          <h4 className="text-left my-4">Consultancy</h4>
          <p className="text-left">
            Our consulting service includes Full Business Advisory & Strategic
            Planning, Brokering Market Analysis, Research Feasibility, Business
            plan, Financial planning, Go To Market, Market entry planning and
            Technology Solution.
            <br />
            <br />
            Licence and regulatory: We provide end-to-end management of the
            gaming licensing and the regulatory process across the region,
            ensuring our clients gets market cost, effectively and quickly,
            without taking undue risks.
            <br />
            <br />
            Brokering: We provide Mergers and Acquisition service through our
            extended network. We can introduce prospective and prospects and
            manage the due diligence and commercial negotiation process.
          </p>
          <div className="row bg-green py-3">
            <div className="col-md-8 mx-auto text-white">
              Follow us on:
              <a href="https://www.facebook.com/" className="mx-3">
                <TfiFacebook className="text-white" size="2rem" />
              </a>
              <a href="https://twitter.com/" className="mx-3">
                <TfiTwitter className="text-white" size="2rem" />
              </a>
              <a href="https://www.instagram.com/" className="mx-3">
                <TfiInstagram className="text-white" size="2rem" />
              </a>
              <a href="https://www.linkedin.com/" className="mx-3">
                <TfiLinkedin className="text-white" size="2rem" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mx-auto">
          <ul className="list-group">
            <h3 className="text-center mt-4">Our Services</h3>
            <li className="list-group-item">
              <a href="/service/wrt" className="text-dark">
                WRT Turn Key Solution
              </a>
            </li>
            <li className="list-group-item">
              <a href="/service/ms" className="text-dark">
                Managed Services
              </a>
            </li>
            <li className="list-group-item">
              <a href="/service/ds" className="text-dark">
                Digital Marketing
              </a>
            </li>
            <li className="list-group-item">
              <a href="/service/sd" className="text-dark">
                Software Development
              </a>
            </li>
            <li className="list-group-item">
              <a href="/service/consultancy" className="text-dark">
                Consultancy
              </a>
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

export default Consultancy;
