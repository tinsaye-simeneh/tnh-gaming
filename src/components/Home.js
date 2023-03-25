import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselImg from "../assets/images/dashboard.png";

export default function Home() {
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptate, quod, quia, voluptates quas voluptatem necessitatibus
              quibusdam quae voluptatum quidem exercitationem. Quisquam, quae.
              Quisquam, quae. Quisquam,
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
    </div>
  );
}
