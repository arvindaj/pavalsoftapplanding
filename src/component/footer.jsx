import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logo.png';
import x from '../assets/img/x.png';
import y from '../assets/img/y.png';
import fb from '../assets/img/fb.png';
import i from '../assets/img/i.png';

const Footer = () => {
  return (
    <div className="py-4 py-md-5 bg-light">
      <div className="container">
        <div className="row flex-column flex-md-row g-4 position-relative">
          {/* Left Section */}
          <div className="col-12 col-md-5 col-lg-4 position-relative">
           
            <div className="p-3 p-md-4 p-lg-4">
              <img
                src={logo}
                alt="logo"
                className="img-fluid mb-3"
                style={{ maxWidth: '150px' }}
              />
              <p className="text-dark fs-6 fs-sm-5 mb-3">
                Our team is here to provide you with tailored solutions that will elevate your brand and engage your audience.
              </p>
              <div className="d-flex gap-3 gap-md-4">
                <a href="#">
                  <img
                    src={x}
                    alt="twitter"
                    className="img-fluid social-icon"
                    style={{ width: '20px', height: '20px' }}
                  />
                </a>
                <a href="#">
                  <img
                    src={y}
                    alt="youtube"
                    className="img-fluid social-icon"
                    style={{ width: '20px', height: '20px' }}
                  />
                </a>
                <a href="#">
                  <img
                    src={fb}
                    alt="facebook"
                    className="img-fluid social-icon"
                    style={{ width: '20px', height: '20px' }}
                  />
                </a>
                <a href="#">
                  <img
                    src={i}
                    alt="instagram"
                    className="img-fluid social-icon"
                    style={{ width: '20px', height: '20px' }}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-12 col-md-7 col-lg-8 pt-3 pt-md-4 pt-lg-4">
            <h1 className="fw-bold text-dark fs-5 fs-md-4 ">
              Services
            </h1>
             <div
              className="bg-dark d-none d-md-block mb-3 mb-md-4"
              style={{ width: '15%', height: '2px', right: '-50%', top: '0%' }}
            ></div>
            <div className="d-flex flex-column flex-sm-row gap-3 gap-sm-4">
              <div className="d-flex flex-column gap-2 flex-fill">
                <a href="#" className="footer-link">
                  Website Development
                </a>
                <a href="#" className="footer-link">
                  iOS Development
                </a>
                <a href="#" className="footer-link">
                  PHP Development
                </a>
                <a href="#" className="footer-link">
                  Game Development
                </a>
                <a href="#" className="footer-link">
                  DevOps
                </a>
                <a href="#" className="footer-link">
                  Content Writing
                </a>
                <a href="#" className="footer-link">
                  E-Commerce
                </a>
              </div>
              <div className="d-flex flex-column gap-2 flex-fill">
                <a href="#" className="footer-link">
                  WordPress
                </a>
                <a href="#" className="footer-link">
                  UI & UX
                </a>
                <a href="#" className="footer-link">
                  SEO
                </a>
                <a href="#" className="footer-link">
                  Mobile Application
                </a>
                <a href="#" className="footer-link">
                  Internet of Things
                </a>
                <a href="#" className="footer-link">
                  Generative AI
                </a>
                <a href="#" className="footer-link">
                  AWS Cloud
                </a>
              </div>
              <div className="d-flex flex-column gap-2 flex-fill">
                <a href="#" className="footer-link">
                  Android
                </a>
                <a href="#" className="footer-link">
                  Artificial Intelligence
                </a>
                <a href="#" className="footer-link">
                  Digital Marketing
                </a>
                <a href="#" className="footer-link">
                  Machine Learning
                </a>
                <a href="#" className="footer-link">
                  BlockChain
                </a>
                <a href="#" className="footer-link">
                  CRM
                </a>
              </div>
            </div>
            <div className="d-flex gap-3 gap-md-4 justify-content-end mt-4 mt-md-5">
              <a href="#" className="footer-link">
                All rights reserved
              </a>
              <a href="#" className="footer-link">
                Privacy
              </a>
              <a href="#" className="footer-link">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for Custom Styles */}
      <style jsx>{`
        .social-icon:hover {
          transform: translateY(-20%) scale(1.2);
          transition: all 0.3s ease;
        }
        .footer-link {
          text-decoration: none;
          color: #333;
          font-size: 0.75rem; /* 12px */
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: #76ac29;
        }
        @media (max-width: 540px) {
          .social-icon {
            width: 16px !important;
            height: 16px !important;
          }
          .footer-link {
            font-size: 0.625rem; /* 10px */
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;