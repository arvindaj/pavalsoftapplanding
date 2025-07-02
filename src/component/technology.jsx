import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from '../assets/img/techblackbg.png';
import img4 from '../assets/img/oneslide 2.png';
import img5 from '../assets/img/Mask group.png';
import icon1 from '../assets/img/ALML.png'; // Fixed icon mapping
import icon2 from '../assets/img/compute-vission.png'; // Corrected typo in filename
import icon3 from '../assets/img/CLOUD.png';
import icon4 from '../assets/img/ARVR.png';
import '../assets/css/technology.css'


function TechnologiesPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-vh-100 py-4 py-md-5 text-center position-relative" style={{ overflow: 'hidden' }}>
      {/* Background Image */}
      <div
        className="position-absolute w-100 h-100"
        style={{ zIndex: -1 }}
      >
        <img
          src={bg}
          alt="Background technology pattern"
          className="w-100 object-fit-cover"
          style={{ transform: 'translateY(-20%)' }} // Adjusted for better alignment
        />
      </div>

      {/* Header Section */}
      <div className="container mb-4 mb-md-5">
        <h1 className="fw-bold text-dark fs-2 fs-md-1 mb-3">
          Technologies We Use For Mobile App Development
        </h1>
        <p className="text-dark fs-5 fs-md-4 mx-auto mb-0" style={{ maxWidth: '900px' }}>
          From robust app performance to a seamless user experience, our development team employs cutting-edge technologies and methodologies to ensure that the final product gains a leading edge in the market.
        </p>
      </div>

      {/* Main Section */}
      <div className="container">
        <div className="row flex-column flex-xl-row align-items-center g-4 g-xl-5">
          {/* Left Section */}
          <div className="col-12 col-xl-6 d-flex flex-column align-items-center position-relative">
            <img
              src={img4}
              alt="User-friendly mobile app interface"
              className="img-fluid"
              style={{ maxHeight: '70vh', maxWidth: '100%' }}
              data-aos="fade-right"
            />
            <p className="mt-2 d-none d-sm-block text-center fs-5 text-dark">
              User-Friendly App
            </p>
          </div>

          {/* Right Section */}
          <div className="col-12 col-xl-6 pt-4 pt-xl-0 position-relative">
            <div className="d-flex flex-column gap-4 p-3 p-md-4 mt-3 mt-xl-0">
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
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="d-flex flex-row align-items-start gap-3"
                  data-aos="fade-right"
                  data-aos-delay={idx * 100}
                >
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`}
                    className="img-fluid"
                    style={{ width: '48px', height: '48px' }}
                  />
                  <div className="d-flex flex-column align-items-start">
                    <h2 className="fw-bold text-dark mb-2 fs-4 fs-md-3">{item.title}</h2>
                    <p className="text-dark fs-6 fs-md-5 mb-0 text-start">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="btn btn-dark mt-4 px-5 py-2 fs-5"
              aria-label="Enquire about our services"
            >
              Enquire Now
            </button>
            {/* Centered Image in Right Section */}
          
          </div>
             <div className="d-flex justify-content-center mt-5">
              <img
                src={img5}
                alt="Technology visual representation"
                className="img-fluid"
                style={{ maxWidth: '80%', height: 'auto' }}
                data-aos="fade-up"
              />
            </div>
        </div>
      </div>

      {/* Inline CSS for Button Hover and General Styling */}
      <style>{`
     
      `}</style>
    </div>
  );
}

export default TechnologiesPage;