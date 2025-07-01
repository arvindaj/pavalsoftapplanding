import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from '../assets/img/techblackbg.png';
import img4 from '../assets/img/oneslide 2.png';
import img5 from '../assets/img/Mask group.png';
import icon1 from '../assets/img/ARVR.png';
import icon2 from '../assets/img/CLOUD.png';
import icon3 from '../assets/img/compute-vission.png';
import icon4 from '../assets/img/ALML.png';


function Technologiespage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-vh py-4 py-md-5 text-center position-relative" style={{ overflow: 'hidden' }}>
      {/* Background Image */}
      <div
        className="position-absolute w-100"
        style={{ zIndex: -1, height: '100vh', overflow: 'hidden' }}
      >
        <img
          src={bg}
          alt="background"
          className="w-100 h-100 object-fit-cover"
          style={{ transform: 'translateY(-30%)', marginTop: '30%' }}
        />
      </div>

      {/* Header Section */}
      <div className="container mb-4 mb-md-5">
        <h1 className="fw-bold text-dark fs-4 fs-md-3 mb-3">
          Technologies We Use For Mobile App Development
        </h1>
        <p className="text-dark fs-6 fs-md-5 mx-auto mb-0" style={{ maxWidth: '800px' }}>
          From robust app performance to a seamless user experience, our development team employs cutting-edge technologies and methodologies to ensure that the final product gains a leading edge in the market.
        </p>
      </div>

      {/* Main Section */}
      <div className="container">
        <div className="row flex-column flex-lg-row align-items-center g-3 g-lg-0">
          {/* Left Section */}
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center position-relative">
            <img
              src={img4}
              alt="app screen"
              className="img-fluid"
              style={{ maxHeight: '600px', transform: 'scale(1)' }}
              data-aos="fade-right"
            />
            <p className="bottom-0 mb-0 d-none d-sm-block text-center fs-6 text-dark user">
              User Friendly APP
            </p>
          </div>

          {/* Right Section */}
          <div className="col-12 col-lg-6 pt-4 pt-lg-0 position-relative">
            <div className="d-flex flex-column gap-3 p-3 p-md-4 mt-3 mt-lg-4">
              {[
                {
                  icon: icon1,
                  title: 'AI/ML',
                  text: 'We can implement smart features like AI-powered chatbots, personalized recommendations, predictive analytics, fraud detection, and many others in your mobile app to improve customer experience.',
                },
                {
                  icon: icon3,
                  title: 'Computer Vision',
                  text: 'Leverage advanced image recognition, object detection, and facial recognition to enhance your app’s functionality and user engagement.',
                },
                {
                  icon: icon4,
                  title: 'Cloud Computing',
                  text: 'Utilize scalable cloud solutions like AWS, Azure, or Google Cloud to ensure your app is fast, secure, and reliable with seamless data management.',
                },
                {
                  icon: icon2,
                  title: 'AR/VR',
                  text: 'Create immersive augmented and virtual reality experiences to captivate users and provide innovative app interactions.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="d-flex flex-row align-items-start gap-2"
                  data-aos="fade-right"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="img-fluid"
                    style={{ width: '40px', height: '40px' }}
                  />
                  <div className="d-flex flex-column align-items-start">
                    <h2 className="fw-bold text-dark mb-0 fs-5 fs-md-4">{item.title}</h2>
                    <p className="text-dark fs-6 fs-md-5 mb-0 text-start">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-dark mt-3 px-4 py-2 fs-6">Enquire Now</button>
            {/* Centered Image in Right Section */}
            <div className="d-flex justify-content-center mt-4">
              <img
                src={img5}
                alt="centered technology visual"
                className="img-fluids"
                style={{ maxWidth: '600px', height: 'auto' }}
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for Button Hover and Scrollbar Fix */}
      <style jsx>{`
        .btn-dark:hover {
          transform: scale(1.05);
          transition: all 0.2s ease;
        }
      `}</style>
    </div>
  );
}

export default Technologiespage;