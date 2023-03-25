import React from "react";
import { FaEnvelope } from "react-icons/fa";
import {
  TfiFacebook,
  TfiTwitter,
  TfiInstagram,
  TfiLinkedin,
} from "react-icons/tfi";
import "../../index.css";

const Wrt = () => {
  return (
    <div className="container">
      <div className="row bg-dark my-5 py-5">
        <div
          className="col-10 mx-auto text-white text-center"
          style={{
            fontSize: "2rem",
          }}
        >
          WRT Turn Key Solution
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
            Home >> Wrt Turn Key Solution
          </span>
        </div>
      </div>

      <div className="row">
        <div className="col-8 mx-auto">
          <h4 className="text-left my-4">WRT Turn Key Solution</h4>
          <p className="text-left">
            We have the honour of collaborating and partnering up with WRT, one
            of the biggest pioneers in sport betting and online casino
            technology, that operates in Africa. WRT has proven its worth by
            generating award winning Solutions for it’s partners, and for sure
            this professional and experienced Gaming software company is shining
            on a competitive level due to all it’s acquired knowledge throughout
            the years. WRT’s attentiveness in the African market and hard work
            in software development, propelled the company so high that it can
            be considered as one of the leaders on the african market. The
            company stands out from the crowd and masters the term “thinking
            outside the box", which is obviously key to staying at the top.
            Through the years WRT has driven many brands towards success
            focusing on: Intuitive and user-friendly interface, ease of
            navigation, Quick Links to promoted tournaments...and many more
            catered needs for the player. They deal with each brand differently
            according to market trends, personalised usability for each market,
            and further analysis into player interaction. This way they can
            identify the different solutions that are needed in each market,
            integrating the best options, and providing monitoring on player
            interaction.
            <br />
            WRT focuses on different aspects that influence the ultimate gaming
            experience, by providing all the key elements needed such as:
            <ol className="text-left mt-3">
              <li>Sportsbook content risk strategy.</li>
              <li>Jackpot betting services.</li>
              <li>Real time alerts.</li>
              <li>Marketing consultancy and assistance 24/7.</li>
              <li>Player risk management service.</li>
            </ol>
          </p>
          <p className="text-left">
            With all these smartly developed tools made available for your
            business, we can guarantee terrific results, awesome user
            navigation, experience, and guaranteed satisfaction.
          </p>
          <div className="row bg-green py-3">
            <div className="col-8 mx-auto text-white">
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
        <div className="col-4 mx-auto">
          <ul className="list-group">
            <li className="list-group-item">
              <a href="/services/wrt" className="text-dark">
                1. WRT Turn Key Solution
              </a>
            </li>
            <li className="list-group-item">
              <a href="/services/ms" className="text-dark">
                Managed Services
              </a>
            </li>
            <li className="list-group-item">
              <a href="/services/ds" className="text-dark">
                Digital Marketing
              </a>
            </li>
            <li className="list-group-item">
              <a href="/services/sd" className="text-dark">
                Software Development
              </a>
            </li>
            <li className="list-group-item">
              <a href="/services/consultancy" className="text-dark">
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

export default Wrt;
