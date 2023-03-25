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
          Tnh Gaming is a gaming community that is dedicated to providing the
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
            <span className="text-white ms-2">
              1st Floor, St. Julians, Malta
            </span>
          </div>

          <div className="mx-auto my-3">
            <BsFillTelephoneFill className="text-white" />
            <span className="text-white ms-2">+299 999 999 08</span>
          </div>

          <div className="mx-auto my-3">
            <FaEnvelope className="text-white" />
            <span className="text-white ms-2">tnh-sales@outlook.com</span>
          </div>
        </div>{" "}
        <div className="col-md-4 bg-dark text-black py-5 mx-auto text-center">
          <h3 className="text-white">Services</h3>
          <div className="mx-auto my-3">
            <ul className="list-unstyled">
              <li className="text-white">wrt Bet turn Key</li>
              <li className="text-white">Managed Services</li>
              <li className="text-white">Digital Marketing</li>
              <li className="text-white">Software Development</li>
              <li className="text-white">Consultancy</li>
            </ul>
          </div>
        </div>{" "}
        <div className="col-md-4 bg-dark text-black py-5 mx-auto text-center">
          <h3 className="text-white">Quick Links</h3>
          <div className="mx-auto my-3">
            <ul className="list-unstyled">
              <li className="text-white">About Us</li>
              <li className="text-white">Career</li>
              <li className="text-white">Contact us</li>
            </ul>
          </div>
        </div>{" "}
      </div>
      <div className="row">
        <div className="col-md-12 text-center text-white py-3">
          <hr />© 2023 Tnh Gaming. All Rights Reserved.
        </div>{" "}
        <hr />
      </div>{" "}
    </div>
  );
};

export default Footer;
