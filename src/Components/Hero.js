import React from "react";

function Hero() {
  return (
    <>
      <section id="hero" class="hero section dark-background">
        {/* 
      <!-- <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in"> --> */}

        <div
          id="hero-carousel"
          class="carousel carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div class="container position-relative">
            <div class="carousel-item active">
              <div class="carousel-container">
                <h2>Welcome to Moderna</h2>
                <p>
                  Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut
                  et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                  mollitia ut. Similique ea voluptatem. Esse doloremque
                  accusamus repellendus deleniti vel. Minus et tempore modi
                  architecto.
                </p>
                <a href="#about" class="btn-get-started">
                  Read More
                </a>
              </div>
            </div>

            <div class="carousel-item">
              <div class="carousel-container">
                <h2>Lorem Ipsum Dolor</h2>
                <p>
                  Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut
                  et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                  mollitia ut. Similique ea voluptatem. Esse doloremque
                  accusamus repellendus deleniti vel. Minus et tempore modi
                  architecto.
                </p>
                <a href="#about" class="btn-get-started">
                  Read More
                </a>
              </div>
            </div>

            <div class="carousel-item">
              <div class="carousel-container">
                <h2>Sequi ea ut et est quaerat</h2>
                <p>
                  Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut
                  et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                  mollitia ut. Similique ea voluptatem. Esse doloremque
                  accusamus repellendus deleniti vel. Minus et tempore modi
                  architecto.
                </p>
                <a href="#about" class="btn-get-started">
                  Read More
                </a>
              </div>
            </div>

            <a
              class="carousel-control-prev"
              href="#hero-carousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon bi bi-chevron-left"
                aria-hidden="true"
              ></span>
            </a>

            <a
              class="carousel-control-next"
              href="#hero-carousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon bi bi-chevron-right"
                aria-hidden="true"
              ></span>
            </a>

            <ol class="carousel-indicators"></ol>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
