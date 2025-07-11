import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from '../assets/img/techblackbg.png';
import img4 from '../assets/img/oneslidegreen.png';
import img6 from '../assets/img/tabman.png';
import img5 from '../assets/img/Mask group.png';
import icon1 from '../assets/img/ALML.png';
import icon2 from '../assets/img/compute-vission.png';
import icon3 from '../assets/img/CLOUD.png';
import icon4 from '../assets/img/ARVR.png';
import '../assets/css/technology.css';

function TechnologiesPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className=" py-4 py-md-5 text-center position-relative" style={{ overflow: 'hidden' }}>
      {/* Background Image */}
      <div className="bg-tech-img position-absolute w-100 h-100" style={{ zIndex: -1 }}>
        <img
          src={bg}
          alt="Background pattern"
          className="w-100 h-100 object-fit-cover"
        />
      </div>


      {/* Header */}
      <div className="container mb-4 mb-md-5 text-center text-md-start">
        <h1 className="text-dark fw-bold fs-1 fs-md-2" style={{ maxWidth: '900px' }}>
          Technologies We Use For Mobile App Development
        </h1>
        <p className="text-dark fs-6 fs-md-5 mt-2" style={{ maxWidth: '900px' }}>
          From robust app performance to a seamless user experience, our development team employs cutting-edge technologies and methodologies to ensure that the final product gains a leading edge in the market.
        </p>
      </div>

      {/* Main Section */}
      <div className="container">
        <div className="row gy-5 align-items-center">

          {/* Left Image Section */}
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center position-relative tech-img-wrapper">
            <img src={img4} alt="Phone frame" className="img-fluid tech-img4 p-2" data-aos="fade-right" />
            <img src={img6} alt="Phone frame" className="img-fluid tech-img6 p-2" data-aos="fade-right" />
            <div className="circle-container d-flex justify-content-center align-items-center position-relative">
              <div className="circle circle1"></div>
              <div className="circle circle2 "></div>
            </div>
            {/* <p className="real-time-text text-dark fs-6 fw-medium text-start ">
              Real Time Experience
            </p> */}
          </div>


          {/* Right Content */}
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column gap-4">
              {[
                {
                  icon: icon1,
                  title: 'AI/ML',
                  text: 'We implement smart features like AI-powered chatbots, personalized recommendations, predictive analytics, fraud detection, and more to enhance your mobile app’s customer experience.',
                },
                {
                  icon: icon2,
                  title: 'Computer Vision',
                  text: 'Leverage advanced image recognition, object detection, and facial recognition to enhance your app’s functionality and user engagement.',
                },
                {
                  icon: icon3,
                  title: 'Cloud Computing',
                  text: 'Utilize scalable cloud solutions like AWS, Azure, or Google Cloud to ensure your app is fast, secure, and reliable with seamless data management.',
                },
                {
                  icon: icon4,
                  title: 'AR/VR',
                  text: 'Create immersive augmented and virtual reality experiences to captivate users and provide innovative app interactions.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="tech-hover-box d-flex align-items-start gap-3 p-3 rounded"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <img src={item.icon} alt={item.title} className="img-fluid mt-3" style={{ width: '48px', height: '48px' }} />
                  <div className="text-start">
                    <h5 className="fw-bold text-dark mb-2">{item.title}</h5>
                    <p className="text-dark mb-0">{item.text}</p>
                  </div>
                </div>
              ))}

            </div>
            <button className="btn btn-dark mt-4 px-4 py-2 fs-6">
              Enquire Now
            </button>
          </div>

          {/* Bottom Image */}
          <div className="col-12 text-center mt-5">

            <img
              src={img5}
              alt="Technology visual"
              className="img-fluid"
              style={{ maxWidth: '80%' }}
              data-aos="fade-up"
            />
          </div>

          <h1 className="end-to-end-heading fw-bold fs-1">
            Our <span className="highlight-yellow">End-to-End</span> Mobile App <br />
            Development Services
          </h1>

        </div>
      </div>
    </div>
  );
}

export default TechnologiesPage;
