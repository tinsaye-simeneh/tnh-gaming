import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Career = () => {
  return (
    <div className="container">
      <div className="row bg-dark my-5 py-5">
        <div
          className="col-10 mx-auto text-white text-center"
          style={{
            fontSize: "2rem",
          }}
        >
          Career
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
            Home >> Career
          </span>
        </div>
      </div>

      <div className="row">
        <div className="col-10 mx-auto">
          <h4 className="text-center my-4">
            Start an exciting journey with us.
          </h4>
          <p className="text-center">
            We are a team of passionate and talented individuals who are
            dedicated to delivering competitive results, working together as a
            team, by combining our unique set of skills. STM believes that all
            ideas and opinions matter, and where the will to excel is not an
            object of fear. If you have assets to bring to our table we want to
            know more. {""}
          </p>
          <p className="text-center">
            Send your Details with your CV to {""}
            <a href="mailto: tnh.career@outlook.com">tnh.career@outlook.com</a>
          </p>
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

export default Career;
