import React from "react";
import Carousel from "react-multi-carousel";
import { AiFillInfoCircle } from "react-icons/ai";
import { AiOutlineOrderedList } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { TbChartCircles } from "react-icons/tb";
import { MdOutlineNoteAlt } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import "react-multi-carousel/lib/styles.css";
import CarouselImg from "../assets/images/home-banner.jpg";
import { FaEnvelope } from "react-icons/fa";

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div class="container-fluid bg-silver pb-5 pt-2">
      <div
        id="carouselExampleControls"
        class="carousel slide my-5"
        data-ride="carousel"
        style={{
          width: "100%",
        }}
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="w-100 d-block carousel-img"
              src={CarouselImg}
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100 carousel-img"
              src={CarouselImg}
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100 carousel-img mx-5"
              src={CarouselImg}
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev bg-dark carousel-btn"
          style={{
            width: "7%",
          }}
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
        <a
          class="carousel-control-next bg-dark carousel-btn"
          style={{
            width: "7%",
          }}
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 py-5">
            <h1 class="text-dark mt-5">
              Welcome to <span class="text-green">S</span>mart{" "}
              <span class="text-green">S</span>olutions
            </h1>
            <p
              class="text-dark
                "
            >
              TNH Gaming is a gaming community that is dedicated to providing
              the best gaming experience for all gamers. We are a community of
              gamers that are passionate about gaming and want to provide the
              best experience for all gamers.
            </p>
            <button class="border rounded p-2 btn-green">Read More</button>
          </div>
          <div class="col-md-6 bg-dark">
            <img
              class="w-100 d-block carousel-img"
              src={CarouselImg}
              alt="First slide"
            />
          </div>
        </div>
      </div>

      <div class="container my-5 py-5 bg-dark rounded">
        <div class="row mx-auto">
          <div class="col-md-3 mx-auto text-center my-3">
            <input type="text" class="form-control" placeholder="Name" />
          </div>
          <div class="col-md-3 text-center mx-auto my-3">
            <input type="email" class="form-control" placeholder="Email" />
          </div>
          <div class="col-md-3 mx-auto text-center my-3">
            <select
              name="type"
              id="type"
              className="border border-secondary bg-white text-secondary rounded p-2 mb-3 contactinputs"
              required
            >
              <option value="wrt Bet turn Key">wrt Bet turn Key</option>
              <option value="Managed Services">Managed Services</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Software Development">Software Development</option>
              <option value="Consultancy">Consultancy</option>
            </select>
          </div>
          <div class="col-md-3 mx-auto text-center my-3">
            <button class="border rounded p-2 px-5 btn-green">
              Send your Request
            </button>
          </div>
        </div>
        <div className="mt-3">
          <AiFillInfoCircle className="text-green ms-2" size="2rem" />
          <span className="text-white ms-3 mt-2">
            We will contact you as soon as possible
          </span>
        </div>
      </div>

      <div className="container my-5">
        <h1 className="text-center my-5">Our Services</h1>
        <Carousel responsive={responsive}>
          <div class="card text-center mx-5">
            <AiOutlineOrderedList
              className="mx-auto py-5 mt-5 mb-3"
              color="white"
              size="10rem"
              style={{
                backgroundColor: "#8dc63f",
                borderRadius: "50%",
              }}
            />
            <div class="card-body">
              <h4 class="card-title">Managed Services</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button class="border rounded p-2 btn-green">Explore More</button>
            </div>
          </div>
          <div class="card text-center mx-5">
            <CgFileDocument
              className="mx-auto py-5 mt-5 mb-3"
              color="white"
              size="10rem"
              style={{
                backgroundColor: "#8dc63f",
                borderRadius: "50%",
              }}
            />
            <div class="card-body">
              <h4 class="card-title">Consultancy</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button class="border rounded p-2 btn-green">Explore More</button>
            </div>
          </div>
          <div class="card text-center mx-5">
            <TbChartCircles
              className="mx-auto py-5 mt-5 mb-3"
              color="white"
              size="10rem"
              style={{
                backgroundColor: "#8dc63f",
                borderRadius: "50%",
              }}
            />
            <div class="card-body">
              <h4 class="card-title">WRT Bet Turn Key</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button class="border rounded p-2 btn-green">Explore More</button>
            </div>
          </div>
          <div class="card text-center mx-5">
            <MdOutlineNoteAlt
              className="mx-auto py-5 mt-5 mb-3"
              color="white"
              size="10rem"
              style={{
                backgroundColor: "#8dc63f",
                borderRadius: "50%",
              }}
            />
            <div class="card-body">
              <h4 class="card-title">Content Creation</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button class="border rounded p-2 btn-green">Explore More</button>
            </div>
          </div>
          <div class="card text-center mx-5">
            <IoPhonePortrait
              className="mx-auto py-5 mt-5 mb-3"
              color="white"
              size="10rem"
              style={{
                backgroundColor: "#8dc63f",
                borderRadius: "50%",
              }}
            />
            <div class="card-body">
              <h4 class="card-title">Digital Marketing</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button class="border rounded p-2 btn-green">Explore More</button>
            </div>
          </div>
        </Carousel>
      </div>

      <hr />
      <div class="container mb-5 pb-5 pt-5 bg-white rounded custom-container">
        <div class="row mx-auto">
          <div class="col-md-4 mx-auto text-center my-3 mt-5">
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
          <div class="col-md-4 mx-auto text-center my-3">
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
}
