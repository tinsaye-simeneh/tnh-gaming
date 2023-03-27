import React from "react";
import about from "../assets/images/about.png";
import { FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row bg-dark my-5 py-5">
          <div
            className="col-10 mx-auto text-white text-center"
            style={{
              fontSize: "2rem",
            }}
          >
            About Us
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
              Home >> About Us
            </span>
          </div>
        </div>

        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row my-5">
              <div className="col-lg-6 order-1 order-lg-1 header-img">
                <img
                  src={about}
                  className="img-fluid animated"
                  alt="home img"
                />
              </div>
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                TNH gaming is a growing and dynamic company in Africa; it serves
                as the gateway for companies, entrepreneurs, and investors
                covering all the African gaming industry's echelons. We
                specialise in developing personalized apps, USSD SMS systems,
                and offering bespoke gaming solutions for retail/online
                sportsbooks and casino operators, being a certified partner of
                Btobet in Africa. We help manage Customer Care, VIP, CRM
                Service, Digital Marketing service, Marketing Strategy, Content
                creation, SEO, and Consulting management. Whatever your needs
                might be , TNH is your gateway to Africa.
                <div className="mt-3">
                  <button className="btn btn-outline-success">
                    <a
                      href="https://www.tnhgaming.com/contact"
                      className="text-decoration-none text-green link-hover"
                    >
                      Get Started
                    </a>
                  </button>
                </div>
              </div>
            </div>
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
    </>
  );
};

export default About;
