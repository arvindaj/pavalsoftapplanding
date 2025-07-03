import React, { useEffect } from 'react';
import AOS from 'aos'; // JavaScript for animations
import 'aos/dist/aos.css'; // CSS for AOS animations
import CountUp from 'react-countup';
import bg from '../assets/img/bg.png';
import img4 from '../assets/img/appscreen2 1.png';
import icon2 from '../assets/img/skin-cell 1.png';
import icon3 from '../assets/img/cashback.png';
import icon4 from '../assets/img/magnifying-glass 1.png';
import icon5 from '../assets/img/cashback.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // 
//Bootstrap 5 CSS
import '../assets/css/features.css'

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with 1s duration, animate once
  }, []);

  return (
    <div className="w-100 position-relative">
      {/* Background Image */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: -1, opacity: 0.2 }}>
        <img
          src={bg}
          alt="background"
          className="w-100 h-100 object-fit-cover"
          style={{ transform: 'translateY(-30%)' }}
        />
      </div>

      {/* Section Wrapper */}
      <div className="container py-3 py-lg-0">
        <div className="row flex-column flex-lg-row align-items-center g-3 g-lg-0">
          {/* Left Section */}
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center position-relative">
            <img
              src={img4}
              alt="app screen"
              className="img-fluid"
              style={{ maxWidth: '90%', transform: 'scale(0.9)' }}
              data-aos="fade-right"
            />
            <p className="bottom-0 mb-2 d-none d-sm-block text-center fs-6 text-dark">
              User Friendly APP
            </p>
          </div>

          {/* Right Section */}
          <div className="col-12 col-lg-6 pt-5 pt-lg-0 position-relative">
            <h1 className="text-dark mb-0 fs-5 fs-md-3">Find the best developers for</h1>
            <h1 className="fw-bold text-dark fs-4 fs-md-3">Mobile app <br />Development services</h1>
            <p className="text-dark fs-6 fs-md-5 my-3">
              Schedule a consultation with our skilled mobile app developers to convey your idea and explore possible solutions that can drive creativity and efficiency in your business.
            </p>

            {/* Icon Mobile Section */}
            <div className="d-flex flex-column gap-4 ">
              {[
                { icon: icon2, text: '$10+ Billion Market' },
                { icon: icon3, text: '3x Player Retention' },
                { icon: icon4, text: 'New Revenue Streams' },
                { icon: icon5, text: '100% refund policy' },
              ].map((item, idx) => (
                <div key={idx} className="d-flex align-items-center gap-2 icon-wrapper" data-aos="fade-right">
                  <div className="" >
                    <img
                      src={item.icon}
                      alt="icon"
                      className="img-fluid"
                      style={{ width: '40px', height: '40px' }}
                    />
                  </div>
                  <h2 className="fw-bold text-dark mb-0 fs-5 fs-md-4">{item.text}</h2>
                </div>
              ))}
            </div>
            <button className="btn btn-dark mt-3 px-4 py-2 fs-6">Enquire Now</button>
          </div>
        </div>
      </div>

      {/* Stats Container */}
      <div
        className="container my-4 p-4 rounded-4 position-relative"
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
        data-aos="fade-left"
      >
        <div className="row align-items-center g-4">
          {/* Stats Left */}
          <div className="col-12 col-lg-3 text-center text-lg-start">
            <h4 className="fw-bold text-dark fs-4 fs-lg-3 mb-0">
              Ready to  <br />Transform <br /> Your Online  <br /> Presence?
            </h4>
          </div>

          {/* Stats Separator */}
          <div className="d-none d-lg-block col-lg-1">
            <div className="bg-secondary h-100" style={{ width: '2px', margin: 'auto' }}></div>
            <div className="line4"></div>
          </div>

 
          {/* Stats Right */}
          <div className="col-12 col-lg-6 position-relative p-3 p-lg-4">
            <div
              className="position-absolute rounded-circle d-none d-lg-block"
              style={{
                width: '300px',
                height: '300px',
                backgroundColor: '#97c15a66',
                left: '-90%',
                top: '-40px',
                zIndex: -1,
              }}
            ></div>

           

            <p className="text-dark fs-6 fs-md-5 mb-4 col-lg-12">
              Our team is here to provide you with tailored solutions that will elevate your brand and engage your audience.
            </p>
            <div className="row g-3">
              {[
                { end: 51, label: 'Developers' },
                { end: 452, label: 'Designers' },
                { end: 785, label: 'Projects' },
                { end: 100, label: 'Clients', suffix: '%' },
              ].map((stat, idx) => (
                <div key={idx} className="col-6 col-md-3 text-center">
                  <div className="fs-3 fw-bold text-dark">
                    <CountUp end={stat.end} duration={15} />
                    {stat.suffix || '+'}
                  </div>
                  <p className="fs-6 text-secondary mb-0">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for Button and Icon Hover */}
      <style jsx>{`
        .btn-dark:hover {
          transform: scale(1.05);
          transition: all 0.2s ease;
        }
        .icon-wrapper: {
        background-color:rgb(131, 197, 39);
        border-radius: 8px;
        }
        .icon-wrapper:hover {
          background-color: #D5E6BD;
          border-radius: 8px;
          
        }
      `}</style>
    </div>
  );
};

export default Features;