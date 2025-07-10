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
import { FaArrowRightLong } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import Select from 'react-select';
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
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact_number: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [selectedCountryCode, setSelectedCountryCode] = useState('+91');

  const flagOptions = [
    { value: '+91', label: '🇮🇳 +91', flag: '🇮🇳' },
    { value: '+1', label: '🇺🇸 +1', flag: '🇺🇸' },
    { value: '+44', label: '🇬🇧 +44', flag: '🇬🇧' },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: '1px solid #ccc',
      borderRadius: '0.375rem',
      minHeight: '38px',
      fontSize: '14px',
    }),
    option: (provided) => ({
      ...provided,
      fontSize: '14px',
    }),
  };

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.contact_number.trim()) {
      newErrors.contact_number = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        contact_number: '',
        message: ''
      });
      setShowForm(false);
    }
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

      {/* Hero Content - Three Slim Wrapper */}
      <div className="hero-content-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="three-slim-wrapper d-flex">
              {/* Text Content */}
              <div className={`slim-content ${showForm ? 'hide' : ''}`}>
                <div className="hero-text-content">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="hero-text">
                        Leading mobile app development with 500+ successful projects MindInventory is a leading Mobile app development service provider in USA and India who have delivered 500+ apps for various Industries. Be it a native mobile app for Android or iOS or cross-platform apps using Flutter and React Native, we have done it all.
                      </p>
                    </motion.div>
                  </AnimatePresence>
                  <button className="btn btn-dark">Explore Now</button>
                </div>
              </div>

              {/* Banner Images Section */}
              <div className={`slim-banner ${showForm ? 'move-to-text' : ''}`}>
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
              </div>

              {/* Talk to Us Section */}
              <div className={`slim-talk-to-us ${showForm ? 'move-to-banner' : ''}`}>
                <div className='talk-to-us-section'>
                  <button
                    className="talk-to-us"
                    onClick={() => setShowForm(true)}
                    style={{ display: showForm ? 'none' : 'block' }}
                  >
                    Talk to us
                  </button>
                </div>
              </div>

              {/* Form Section */}
              <div className={`slim-form ${showForm ? "slide-in" : ""}`}>
                <div className="form-box p-4">
                  <div
                    className={`close-x ${showForm ? "visible" : "hidden"}`}
                    onClick={() => setShowForm(false)}
                    style={{ cursor: 'pointer', textAlign: 'right', marginBottom: '1rem' }}
                  >
                    Close it <FaArrowRightLong className="ms-2" />
                  </div>

                  <h1 className="form-title mb-4">Talk to Us</h1>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <small className="text-danger">{errors.name}</small>}
                    </div>

                    <div className="mb-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <small className="text-danger">{errors.email}</small>
                      )}
                    </div>

                    <div className="phone-field mb-3">
                      <div className="d-flex">
                        <Select
                          value={flagOptions.find(
                            (opt) => opt.value === selectedCountryCode
                          )}
                          onChange={(selected) => setSelectedCountryCode(selected.value)}
                          options={flagOptions}
                          styles={customStyles}
                          isSearchable={false}
                          className="flag-select me-2"
                          style={{ width: '120px' }}
                        />
                        <input
                          type="tel"
                          name="contact_number"
                          placeholder="Phone Number"
                          className="form-control phone-input"
                          value={formData.contact_number}
                          onChange={handleChange}
                        />
                      </div>
                      {errors.contact_number && (
                        <small className="text-danger">{errors.contact_number}</small>
                      )}
                    </div>

                    <div className="mb-3">
                      <textarea
                        name="message"
                        placeholder="How do we help you?"
                        rows="3"
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && (
                        <small className="text-danger">{errors.message}</small>
                      )}
                    </div>

                    <button type="submit" className="submit-button btn w-100">
                      Hit Me Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
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