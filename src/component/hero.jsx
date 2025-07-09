import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong, faTimes, faUser, faEnvelope, faPhone, faMessage } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
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
import contactImg from '../assets/img/mine-head.png';
import contactImgbottom from '../assets/img/bottom-para-baner.png';
import banerlefthand from '../assets/img/baner-left-hand.png';
import banerrighttop from '../assets/img/baner-right-top.png';
import banerlefttoppara from '../assets/img/baner-left-top-para.png';
import Rectangleempty from '../assets/img/Rectangle-empty.png';
import img1 from '../assets/img/clogo1.png';
import img2 from '../assets/img/clogo2.png';
import img3 from '../assets/img/clogo3.png';
import img4 from '../assets/img/clogo4.png';
import img5 from '../assets/img/clogo5.png';

const HeroSection = () => {
  const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
    setIsFormOpen(false);
  };

  const slideData = [
    { text: 'Our team is here to provide you with tailored solutions.' },
    { text: 'Transform your ideas into reality with our custom mobile app.' },
    { text: 'Boost your digital presence with high-performance apps built.' },
  ];

  // Tab data for the banner section
  const tabData = [
    {
      id: 0,
      title: 'Mobile Apps',
      content: 'Leading mobile app development with 500+ successful projects',
      images: {
        main: contactImg,
        bottom: contactImgbottom,
        leftHand: banerlefthand,
        rightTop: banerrighttop,
        leftTopPara: banerlefttoppara,
      }
    },
    {
      id: 1,
      title: 'Web Development',
      content: 'Custom web solutions tailored to your business needs',
      images: {
        main: contactImg,
        bottom: contactImgbottom,
        leftHand: banerlefthand,
        rightTop: banerrighttop,
        leftTopPara: banerlefttoppara,
      }
    },
    {
      id: 2,
      title: 'UI/UX Design',
      content: 'Beautiful and intuitive designs that engage users',
      images: {
        main: contactImg,
        bottom: contactImgbottom,
        leftHand: banerlefthand,
        rightTop: banerrighttop,
        leftTopPara: banerlefttoppara,
      }
    }
  ];

  return (
    <div className="position-relative hero-mine">
      {/* Background Images */}
      <div className="position-absolute w-100">
        <img src={bg} alt="background" className="w-100 vh-100 object-fit-cover" />
        <img src={bgbox} alt="bg-box" className="position-absolute d-none d-sm-block" />
      </div>

      {/* Contact Form Overlay */}
      <AnimatePresence>
        {isFormOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
              style={{ zIndex: 1000 }}
              onClick={() => setIsFormOpen(false)}
            />

            {/* Contact Form */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="position-fixed top-0 end-0 h-100 bg-white shadow-lg"
              style={{ 
                zIndex: 1001, 
                width: '400px',
                maxWidth: '90vw',
                overflow: 'hidden'
              }}
            >
              <div className="h-100 d-flex flex-column">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 position-relative"
                     style={{
                       background: 'linear-gradient(135deg, #007bff 0%, #6c5ce7 100%)'
                     }}>
                  <button
                    onClick={() => setIsFormOpen(false)}
                    className="btn btn-link text-white position-absolute top-3 end-3 p-2"
                    style={{ textDecoration: 'none' }}
                  >
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                  </button>
                  <h3 className="mb-2 fw-bold">Get In Touch</h3>
                  <p className="mb-0 opacity-75">Let's discuss your project</p>
                </div>

                {/* Form Content */}
                <div className="flex-grow-1 p-4 overflow-auto">
                  <form onSubmit={handleSubmit} className="h-100">
                    <div className="mb-4">
                      <label className="form-label fw-semibold text-dark">
                        <FontAwesomeIcon icon={faUser} className="me-2 text-primary" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleFormChange}
                        className="form-control form-control-lg border-2 rounded-3"
                        placeholder="Enter your full name"
                        required
                        style={{
                          borderColor: '#e0e6ed',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#007bff'}
                        onBlur={(e) => e.target.style.borderColor = '#e0e6ed'}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold text-dark">
                        <FontAwesomeIcon icon={faEnvelope} className="me-2 text-primary" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="form-control form-control-lg border-2 rounded-3"
                        placeholder="Enter your email"
                        required
                        style={{
                          borderColor: '#e0e6ed',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#007bff'}
                        onBlur={(e) => e.target.style.borderColor = '#e0e6ed'}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold text-dark">
                        <FontAwesomeIcon icon={faPhone} className="me-2 text-primary" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="form-control form-control-lg border-2 rounded-3"
                        placeholder="Enter your phone number"
                        required
                        style={{
                          borderColor: '#e0e6ed',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#007bff'}
                        onBlur={(e) => e.target.style.borderColor = '#e0e6ed'}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold text-dark">
                        <FontAwesomeIcon icon={faMessage} className="me-2 text-primary" />
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        className="form-control border-2 rounded-3"
                        rows="4"
                        placeholder="Tell us about your project..."
                        required
                        style={{
                          borderColor: '#e0e6ed',
                          transition: 'all 0.3s ease',
                          resize: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#007bff'}
                        onBlur={(e) => e.target.style.borderColor = '#e0e6ed'}
                      />
                    </div>

                    <div className="d-grid gap-2 mt-auto">
                      <button
                        type="submit"
                        className="btn btn-lg rounded-3 text-white fw-bold position-relative overflow-hidden"
                        style={{
                          background: 'linear-gradient(135deg, #007bff 0%, #6c5ce7 100%)',
                          border: 'none',
                          transition: 'all 0.3s ease',
                          transform: 'translateY(0)'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 8px 25px rgba(0,123,255,0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        Send Message
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsFormOpen(false)}
                        className="btn btn-outline-secondary btn-lg rounded-3"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light px-2 px-sm-4 px-lg-5 py-1 py-sm-3">
        <div className="container-fluid">
          <div className="d-none d-lg-block">
            <div className="line1">
              <div className="small-line1"></div>
            </div>
          </div>

          <div className="navbar-brand text-center text-lg-start mx-2 mx-lg-5 m-0 p-0">
            <img src={logo} alt="Logo" className="img-fluid" />
            <div className="mt-1 mt-sm-2">
              <p className="d-block text-center hero-text mb-0">Build Bold. Scale Smart. Win Digital.</p>
            </div>
            <div className="d-none d-lg-block position-absolute">
              <div className="bg-dark position-absolute end-0"></div>
            </div>
          </div>

          <div className="ms-auto text-start col-lg-4 mb-lg-5">
            <div className="d-flex flex-wrap gap-1 gap-sm-2 mb-1 mb-sm-2 align-items-start justify-content-end">
              <span className="text-dark fs-6 fs-sm-5">Connect with</span>
              <span className="text-dark mt-1 mt-sm-2 fs-6 fs-sm-5">
                <img src={inFlag} alt="IN" className="me-1" /> +91
              </span>
              <span className="text-dark mt-1 mt-sm-2 fs-6 fs-sm-5">
                <img src={usFlag} alt="US" className="me-1" /> +1
              </span>
              <span className="text-dark mt-1 mt-sm-2 fs-6 fs-sm-5">
                <img src={ukFlag} alt="UK" className="me-1" /> +44
              </span>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-end gap-1 gap-sm-2 mb-1 mb-sm-2">
              <div className="d-flex align-items-center">
                <img src={email} alt="email" className="me-1" />
                <span className='fs-6 fs-sm-5'>info@pavalsoftware.com</span>
              </div>
              <button className="btn btn-dark btn-sm">Get A Quote</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div>
      <div className="hero-content-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Content */}
            <div className="col-12 col-lg-6 hero-text-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="hero-text">
                    {tabData[activeTab].content}. MindInventory is a leading Mobile app development service provider in USA and India who have delivered 500+ apps for various Industries. Be it a native mobile app for Android or iOS or cross-platform apps using Flutter and React Native, we have done it all.
                  </p>
                </motion.div>
              </AnimatePresence>
              <button className="btn btn-dark">Explore Now</button>
            </div>

            {/* Banner Images Section */}
            <div className="banner-section text-center mt-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <motion.img
                    src={tabData[activeTab].images.main}
                    alt="Contact Visual"
                    className="img-fluid contact-img mb-5 mb-lg-0 mt-4 mt-lg-0 contactImg"
                    initial={{ x: '-100%', y: '100%' }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />

                  <motion.img
                    src={Rectangleempty}
                    alt="Rectangle Left"
                    className="img-fluid Rectangleemptyleft"
                    initial={{ x: '-100%', y: '-30%' }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                  />

                  <motion.img
                    src={Rectangleempty}
                    alt="Rectangle Right"
                    className="img-fluid Rectangleemptyright"
                    initial={{ x: '-150%', y: '40%' }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
                  />

                  <motion.img
                    src={tabData[activeTab].images.bottom}
                    alt="Bottom Para"
                    className="contact-img-bottom-para"
                    initial={{ x: '-100%', y: '100%' }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
                  />

                  <motion.img
                    src={tabData[activeTab].images.leftHand}
                    alt="Left Hand"
                    className="banerlefthand"
                    initial={{ x: '-100%', y: '-70%' }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                  />

                  <motion.img
                    src={tabData[activeTab].images.rightTop}
                    alt="Right Top"
                    className="img-fluid banerrighttop"
                    initial={{ x: '-100%', y: '-70%' }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.6 }}
                  />

                  <motion.img
                    src={tabData[activeTab].images.leftTopPara}
                    alt="Left Top Para"
                    className="img-fluid banerlefttoppara"
                    initial={{ x: '-100%', y: '-70%' }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.7 }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* talk-to-us-section */}
      <div className='talk-to-us-section position-absolute' style={{ 
        left:'93%',
        top: '35%', 
        // transform: 'translateY(-100%)',
        zIndex: 999
      }}>
        <motion.button 
          className='talk-to-us shadow-lg px-4 py-3'
          onClick={() => setIsFormOpen(true)}
          whileHover={{ 
            boxShadow: '0 10px 20px rgba(48, 48, 48, 0.61)'
          }}
          whileTap={{ scale: 0.95 }}
        
        >
          Talk to us
        </motion.button>
      </div>

</div>



      {/* Pavalsoft App Revolution */}
      <div className="pavalsoft-app-revolutions">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Pavalsoft App<br />Revolution
          </motion.h1>
        </div>
      </div>

      {/* Recognized Section */}
      <div className="container py-3 py-md-4">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mb-3 mb-lg-0">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faArrowDownLong}
                onClick={handleNext}
                className="swiper-nav-icon me-3"
                style={{
                  width: '30px',
                  height: '45px',
                  background: 'transparent',
                  border: '1px solid #000',
                  padding: '5px',
                  cursor: 'pointer',
                }}
              />
              <Swiper
                direction="vertical"
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 3000, disableOnInteraction: true }}
                loop={true}
                allowTouchMove={true}
                slidesPerView={1}
                className="trackyour flex-grow-1"
                style={{ height: '100px', overflow: 'hidden' }}
                ref={swiperRef}
              >
                {slideData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="d-flex align-items-center h-100">
                      <p className="text-black hero-text mb-0">{item.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-3">
              <h5 className="fw-bold text-center text-sm-start">
                Recognized <br className="d-none d-sm-block" />By
              </h5>
              <div className="line3 d-none d-sm-block"></div>
              <div className="d-flex gap-2">
                <img src={r1} alt="R1" height="40" />
                <img src={r2} alt="R2" height="40" />
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