import React from "react";
import { useState } from "react";

export default function Carrossel() {

  const [activeSlide, setActiveSlide] = useState(0);

  const handleButtonClick = (index) => {
    setActiveSlide(index);
  };

  return (
    
    <section>
      <div
        id="myCarousel"
        class="carousel slide mb-6"
        data-bs-ride="carousel"
        data-bs-theme="light"
      >
        <div class="carousel-indicators">
        <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className={`active ${activeSlide === 0 ? "active" : ""}`}
            aria-label="Slide 1"
            aria-current={activeSlide === 0 ? "true" : "false"}
            onClick={() => handleButtonClick(0)}
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            className={activeSlide === 1 ? "active" : ""}
            aria-label="Slide 2"
            aria-current={activeSlide === 1 ? "true" : "false"}
            onClick={() => handleButtonClick(1)}
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            className={activeSlide === 2 ? "active" : ""}
            aria-label="Slide 3"
            aria-current={activeSlide === 2 ? "true" : "false"}
            onClick={() => handleButtonClick(2)}
          ></button>
        </div>
        <div class="carousel-inner">
          <div class={activeSlide === 0 ? "carousel-item active": "carousel-item" }>
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <div class="container">
              <div class="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p class="opacity-75">
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
           <div class={activeSlide === 1 ? "carousel-item active": "carousel-item" }>
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <div class="container">
              <div class="carousel-caption">
                <h1>Another example headline.</h1>
                <p>
                  Some representative placeholder content for the second slide
                  of the carousel.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class={activeSlide === 2 ? "carousel-item active": "carousel-item" }>
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <div class="container">
              <div class="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>
                  Some representative placeholder content for the third slide of
                  this carousel.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Browse gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
          onClick={() => activeSlide === 0 ? handleButtonClick(2) : handleButtonClick(activeSlide - 1)}
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
          onChange={""}
          onClick={() => activeSlide === 2 ? handleButtonClick(0) : handleButtonClick(activeSlide + 1)}
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </section>
  );
}
