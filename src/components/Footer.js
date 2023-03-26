import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import Logo from "../assets/images/logo.png";
import "../index.css";

const Footer = () => {
  return (
    <div className="container-fluid bg-green py-5">
      <div className="row">
        <div className="col-md-12 text-center text-white py-3">
          <hr />
          TNH Gaming is a gaming community that is dedicated to providing the
          best gaming experience for all gamers. We are a community of gamers
          that are passionate about gaming and want to provide the best
          experience for all gamers.{" "}
        </div>{" "}
        <hr />
      </div>{" "}
      <div className="row mx-auto">
        <div className="col-md-4 bg-dark text-black py-5 mx-auto text-center">
          <img src={Logo} alt="logo" className="img-fluid" width={150} />
          <div className="mx-auto my-3">
            <IoLocationSharp className="text-white" />
            <span className="text-white ms-2">Spain - Malta</span>
          </div>

          <div className="mx-auto my-3">
            <BsFillTelephoneFill className="text-white" />
            <span className="text-white ms-2">+299 999 999 08</span>
          </div>

          <div className="mx-auto my-3 text-white">
            <FaEnvelope className="text-white me-2" /> Our Email Address:
            <br />
            <span className="text-white ms-2">
              <a href="mailto:sales@tnhgaming.com" className="text-white">
                sales@tnhgaming.com
              </a>
            </span>
            <br />
            <span className="text-white ms-2">
              <a
                href="mailto:tnhgaming.sales@outlook.com"
                className="text-white"
              >
                tnhgaming.sales@outlook.com
              </a>
            </span>
            <br />
            <span className="text-white ms-2">
              <a href="mailto:info@tnhgaming.com" className="text-white">
                info@tnhgaming.com
              </a>
            </span>
            <br />
            <span className="text-white ms-2">
              <a href="mailto:contact@tnhgaming.com" className="text-white">
                contact@tnhgaming.com
              </a>
            </span>
          </div>
        </div>{" "}
        <div className="col-md-4 bg-dark text-black py-5 mx-auto text-center">
          <h3 className="text-white">Services</h3>
          <div className="mx-auto my-3">
            <ul className="list-unstyled">
              <li className="text-white">
                <a href="/wrt" className="text-white text-decoration-none">
                  >> wrt Bet turn Key
                </a>
              </li>
              <li className="text-white text-left">
                <a href="/ms" className="text-white text-decoration-none">
                  >> Managed Services
                </a>
              </li>
              <li className="text-white">
                <a href="/dm" className="text-white text-decoration-none">
                  >> Digital Marketing
                </a>
              </li>
              <li className="text-white">
                <a href="/sd" className="text-white text-decoration-none">
                  >> Software Development
                </a>
              </li>
              <li className="text-white">
                <a
                  href="/consultancy"
                  className="text-white text-decoration-none"
                >
                  >> Consultancy
                </a>
              </li>
            </ul>
          </div>
        </div>{" "}
        <div className="col-md-4 bg-dark text-black py-5 mx-auto text-center">
          <h3 className="text-white">Quick Links</h3>
          <div className="mx-auto my-3">
            <ul className="list-unstyled">
              <li className="text-white">
                <a href="/about" className="text-white text-decoration-none">
                  >> About Us
                </a>
              </li>
              <li className="text-white">
                <a href="/career" className="text-white text-decoration-none">
                  >> Career
                </a>
              </li>
              <li className="text-white">
                <a href="/contact" className="text-white text-decoration-none">
                  >> Contact us
                </a>
              </li>
              <li className="text-white">
                <a href="/wrt" className="text-white text-decoration-none">
                  >> Services
                </a>
              </li>
            </ul>
          </div>
        </div>{" "}
      </div>
      <div className="row">
        <div className="col-md-12 text-center text-white py-3">
          <hr />© 2023 TNH Gaming. All Rights Reserved.
        </div>{" "}
        <hr />
      </div>{" "}
    </div>
  );
};

export default Footer;
