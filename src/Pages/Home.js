import React from "react";
import { Link } from "react-router-dom";
import Navv from "../Components/Navv";
import "../assets/css/main.css";
import Hero from "../Components/Hero";

function Home() {
  return (
    <>
      <Navv />
      <Hero />
      <main className="main">
        {/* 
    <!-- Hero Section --> */}

        {/* <!-- /Hero Section --> */}

        {/* <!-- Featured Services Section --> */}
        <section id="featured-services" className="featured-services section">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service-item item-cyan position-relative">
                  <div className="icon">
                    <i className="bi bi-activity"></i>
                  </div>
                  <Link href="service-details.html" className="stretched-link">
                    <h3>Nesciunt Mete</h3>
                  </Link>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis tempore et
                    consequatur.
                  </p>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="service-item item-orange position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast"></i>
                  </div>
                  <Link href="service-details.html" className="stretched-link">
                    <h3>Eosle Commodi</h3>
                  </Link>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto
                    sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                  </p>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="service-item item-teal position-relative">
                  <div className="icon">
                    <i className="bi bi-easel"></i>
                  </div>
                  <Link href="service-details.html" className="stretched-link">
                    <h3>Ledo Markt</h3>
                  </Link>
                  <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                    Minus ea aut. Vel qui id voluptas adipisci eos earum
                    corrupti.
                  </p>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="service-item item-red position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles"></i>
                  </div>
                  <Link href="service-details.html" className="stretched-link">
                    <h3>Asperiores Commodit</h3>
                  </Link>
                  <p>
                    Non et temporibus minus omnis sed dolor esse consequatur.
                    Cupiditate sed error ea fuga sit provident adipisci neque.
                  </p>
                  <Link
                    href="service-details.html"
                    className="stretched-link"
                  ></Link>
                </div>
              </div>
              {/* <!-- End Service Item --> */}
            </div>
          </div>
        </section>
        {/* <!-- /Featured Services Section --> */}

        {/* <!-- About Section --> */}
        <section id="about" className="about section light-background">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-6 position-relative align-self-start"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                <Link
                  href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                  className="glightbox pulsating-play-btn"
                ></Link>
              </div>
              <div
                className="col-lg-6 content"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check2-all"></i>{" "}
                    <span>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>{" "}
                    <span>
                      Duis aute irure dolor in reprehenderit in voluptate velit.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>{" "}
                    <span>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate
                      trideta storacalaperda mastiro dolore eu fugiat nulla
                      pariatur.
                    </span>
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /About Section --> */}

        {/* <!-- Features Section --> */}
        <section id="features" className="features section">
          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Features</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          {/* <!-- End Section Title --> */}

          <div className="container">
            <div className="row gy-4 align-items-center features-item">
              <div
                className="col-md-5 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay="100"
              >
                <img
                  src="assets/img/features-1.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-7" data-aos="fade-up" data-aos-delay="100">
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check"></i>
                    <span>
                      {" "}
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>
                      Duis aute irure dolor in reprehenderit in voluptate velit.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Ullam est qui quos consequatur eos accusamus.</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Features Item --> */}

            <div className="row gy-4 align-items-center features-item">
              <div
                className="col-md-5 order-1 order-md-2 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <img
                  src="assets/img/features-2.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-md-7 order-2 order-md-1"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Corporis temporibus maiores provident</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
            {/* <!-- Features Item --> */}

            <div className="row gy-4 align-items-center features-item">
              <div
                className="col-md-5 d-flex align-items-center"
                data-aos="zoom-out"
              >
                <img
                  src="assets/img/features-3.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-7" data-aos="fade-up">
                <h3>
                  Sunt consequatur ad ut est nulla consectetur reiciendis animi
                  voluptas
                </h3>
                <p>
                  Cupiditate placeat cupiditate placeat est ipsam culpa.
                  Delectus quia minima quod. Sunt saepe odit aut quia voluptatem
                  hic voluptas dolor doloremque.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>
                    <span>
                      {" "}
                      Duis aute irure dolor in reprehenderit in voluptate velit.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>
                      Facilis ut et voluptatem aperiam. Autem soluta ad fugiat
                    </span>
                    .
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Features Item --> */}

            <div className="row gy-4 align-items-center features-item">
              <div
                className="col-md-5 order-1 order-md-2 d-flex align-items-center"
                data-aos="zoom-out"
              >
                <img
                  src="assets/img/features-4.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-7 order-2 order-md-1" data-aos="fade-up">
                <h3>
                  Quas et necessitatibus eaque impedit ipsum animi consequatur
                  incidunt in
                </h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
            {/* <!-- Features Item --> */}
          </div>
        </section>
        {/* <!-- /Features Section --> */}
      </main>

      <footer id="footer" className="footer dark-background">
        {/* <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <h4>Join Our Newsletter</h4>
            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <form action="forms/newsletter.php" method="post" className="php-email-form">
              <div className="newsletter-form"><input type="email" name="email"><input type="submit" value="Subscribe"></div>
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your subscription request has been sent. Thank you!</div>
            </form>
          </div>
        </div>
      </div>
    </div> */}

        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <Link href="index.html" className="d-flex align-items-center">
                <span className="sitename">Moderna</span>
              </Link>
              <div className="footer-contact pt-3">
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>info@example.com</span>
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <Link href="#">About us</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <Link href="#">Services</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <Link href="#">Terms of service</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <Link href="#">Web Design</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <Link href="#">Web Development</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <Link href="#">Product Management</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <Link href="#">Marketing</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12">
              <h4>Follow Us</h4>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="social-links d-flex">
                <Link href="">
                  <i className="bi bi-twitter-x"></i>
                </Link>
                <Link href="">
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link href="">
                  <i className="bi bi-instagram"></i>
                </Link>
                <Link href="">
                  <i className="bi bi-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">Moderna</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you've purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] --> */}
            Designed by{" "}
            <Link href="https://bootstrapmade.com/">BootstrapMade</Link>
          </div>
        </div>
      </footer>

      {/* <!-- Scroll Top --> */}
      <Link
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </Link>

      {/* <!-- Preloader --> */}
      <div id="preloader"></div>

      {/* <!-- Vendor JS Files --> */}
      {/* <script src="./assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>
      <script src="assets/vendor/aos/aos.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
      <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script> */}

      {/* <!-- Main JS File --> */}
      {/* <script src="./assets/js/main.js"></script> */}
    </>
  );
}

export default Home;
