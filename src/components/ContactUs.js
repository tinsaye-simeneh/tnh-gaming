import React, { useState } from "react";
import "../index.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="container-fluid bg-silver py-4">
      <div className="row text-center">
        <div className="col-md-6">
          <h1
            className="caros text-dark px-5 pt-5 leftText"
            style={{ fontWeight: "bold" }}
          >
            Lets Chat <br />
            Tell me about <br /> your Concerns
          </h1>
          <p className="caros text-dark px-5 pt-2">
            Lets create something better
          </p>
        </div>
        <div className="col col-sm-12 col-md-6 text-center pb-5">
          <form
            className="p-5 rounded bg-white text-center"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(name, email, subject, message);
              alert(
                "Thank you for contacting us. We will get back to you soon"
              );
              window.location.href = "/";
            }}
          >
            <h1 className="caros text-black mb-4" style={{ fontSize: "2rem" }}>
              Contact Us
            </h1>
            <input
              type="text"
              className="border border-secondary mt-1 bg-white text-secondary rounded p-2 mb-3 contactinputs"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="border border-secondary bg-white text-secondary rounded p-2 mb-3 contactinputs"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="border border-secondary bg-white text-secondary rounded p-2 mb-3 contactinputs"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              className="border border-secondary bg-white text-secondary rounded p-2 mb-3 contactinputs"
              style={{ resize: "none" }}
              cols="30"
              rows="5"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="border rounded py-2 btn-green mt-3 contactinputs"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
