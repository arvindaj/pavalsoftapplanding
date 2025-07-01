import React from 'react';
import { Carousel } from 'react-bootstrap';
import bg from '../assets/img/minebg.png';
import bgbox from '../assets/img/Rectangle 9.png';
import logo from '../assets/img/logo.png';
import inFlag from '../assets/img/in-flag.png';
import usFlag from '../assets/img/us-flag.png';
import ukFlag from '../assets/img/uk-flag.png';
import email from '../assets/img/email.png';
import r1 from '../assets/img/r1.png';
import r2 from '../assets/img/r2.png';
import r3 from '../assets/img/r3.png';
import contactImg from '../assets/img/hero1 1.png';
import img1 from '../assets/img/clogo1.png';
import img2 from '../assets/img/clogo2.png';
import img3 from '../assets/img/clogo3.png';
import img4 from '../assets/img/clogo4.png';
import img5 from '../assets/img/clogo5.png';
import '../assets/css/hero.css';

const HeroSection = () => {
  return (
    <div className="position-relative">
      {/* Background Images */}
      <div className="position-absolute w-100">
        <img src={bg} alt="background" className="w-100 vh-100 object-fit-cover" />
        <img src={bgbox} alt="bg-box" className="position-absolute d-none d-sm-block" />
        <img src={bgbox} alt="bg-box" className="position-absolute d-none d-md-block" />
        <img src={bgbox} alt="bg-box" className="position-absolute d-none d-lg-block" />
        <img src={bgbox} alt="bg-box" className="position-absolute d-none d-xl-block" />
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light px-3 px-sm-4 px-lg-5 py-2 py-sm-3">
        <div className="container-fluid">
          <div className="d-none d-lg-block">
            <div className="line1">
              <div className="small-line1"></div>
            </div>
          </div>

          <div className="navbar-brand text-center">
            <img src={logo} alt="Logo" className="img-fluid" />
            <div className="mt-1 mt-sm-2">
              <small className="d-block ms-5 text-center">Build Bold. Scale Smart. Win Digital.</small>
            </div>
            <div className="d-none d-lg-block position-absolute">
              <div className="bg-dark position-absolute end-0"></div>
            </div>
          </div>

          <div className="ms-auto text-end">
            <div className="d-flex flex-wrap gap-1 gap-sm-2 mb-1 mb-sm-2 align-items-center justify-content-end">
              <span className="text-dark">Connect with</span>
              <span className="text-dark">
                <img src={inFlag} alt="IN" className="me-1" /> +91
              </span>
              <span className="text-dark">
                <img src={usFlag} alt="US" className="me-1" /> +1
              </span>
              <span className="text-dark">
                <img src={ukFlag} alt="UK" className="me-1" /> +44
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-end gap-1 gap-sm-2 mb-1 mb-sm-2">
              <div className="d-flex align-items-center">
                <img src={email} alt="email" className="me-1" />
                <span>info@pavalsoftware.com</span>
              </div>
              <button className="btn btn-dark btn-sm">Get A Quote</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container py-3 py-sm-4 py-lg-5">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 py-3 py-lg-5">
            <p className="mb-3 mb-sm-4 hero-text">
              MindInventory is a leading Mobile app development service provider in USA and India who have delivered 500+ apps for various Industries. Be it a native mobile app for Android or iOS or cross-platform apps using Flutter and React Native, we have done it all. From MVP to custom application development, we offer end-to-end mobile app development services catering to your varying needs.
            </p>
            <button className="btn btn-dark">Explore Now</button>
          </div>
          <div className="col-12 col-lg-6 text-center mt-3 mt-lg-0">
            <img src={contactImg} alt="Contact Visual" className="img-fluid contact-img" data-aos="fade-right" />
          </div>
        </div>
      </div>

      {/* Recognized Section */}
      <div className="container my-3 my-sm-4">
        <div className="d-flex flex-column flex-lg-row align-items-center">
          <Carousel controls={true} indicators={false} interval={3000} className="w-lg-50 carousel-box">
            <Carousel.Item>
              <div className="d-flex align-items-center justify-content-start p-2 p-sm-3">
                <p className="mb-0 text-dark">
                  Our expert team crafts innovative mobile apps tailored to your business needs, ensuring seamless performance across platforms.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex align-items-center justify-content-start p-2 p-sm-3">
                <p className="mb-0 text-dark">
                  We deliver scalable solutions, from MVP to enterprise-grade apps, driving growth and user engagement.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex align-items-center justify-content-start p-2 p-sm-3">
                <p className="mb-0 text-dark">
                  Partner with us for end-to-end development, leveraging cutting-edge technologies to elevate your brand.
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
          <div className="text-center text-lg-start mt-3 mt-lg-0 ms-lg-4">
            <div className="d-flex flex-wrap gap-3 mt-3">
              <h5 className="fw-bold">Recognized <br />By</h5>
              <div className="rline1"></div>
              <div>
                <img src={r1} alt="R1" height="40" className="me-2" />
                <img src={r2} alt="R2" height="40" className="me-2" />
                <img src={r3} alt="R3" height="40" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="marquee-container overflow-hidden mb-3 mb-sm-5">
        <div className="marquee d-flex">
          {[img1, img2, img3, img4, img5, img1, img2, img3, img4, img5].map((img, idx) => (
            <img key={idx} src={img} alt={`img${(idx % 5) + 1}`} className="marquee-img mx-2 mx-sm-4" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;