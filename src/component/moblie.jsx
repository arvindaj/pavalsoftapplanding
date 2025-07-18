import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon1 from '../assets/img/cross-platform 1.png';
import icon2 from '../assets/img/ios.png';
import icon3 from '../assets/img/reacticon 1.png';
import icon4 from '../assets/img/webicon.png';
import icon5 from '../assets/img/icon10.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/css/moblie.css';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const MobileappSection = () => {
  const contentSets = [
    {
      heading: 'iOS App Development',
      para: 'Whether you need to develop a custom app from scratch or upgrade an existing app to align with current technology trends, we offer end-to-end mobile application development services.',
      icon: icon2,
      iconAlt: 'iOS App Development Icon',
    },
    {
      heading: 'Flutter App Development',
      para: 'Our expertise in cross-platform development ensures your app runs seamlessly on both iOS and Android, saving time and resources while maintaining high performance and user experience.',
      icon: icon1,
      iconAlt: 'Flutter App Development Icon',
    },
    {
      heading: 'UI/UX Design for Mobile Apps',
      para: 'We create intuitive and visually appealing user interfaces that enhance user engagement and satisfaction, tailored to your brand and target audience.',
      icon: icon3,
      iconAlt: 'UI/UX Design Icon',
    },
    {
      heading: 'Cross-Platform App Development',
      para: 'We create intuitive and visually appealing user interfaces that enhance user engagement and satisfaction, tailored to your brand and target audience.',
      icon: icon4,
      iconAlt: 'Cross-Platform App Development Icon',
    },
    {
      heading: 'Progressive Web App Development',
      para: 'We create intuitive and visually appealing user interfaces that enhance user engagement and satisfaction, tailored to your brand and target audience.',
      icon: icon5,
      iconAlt: 'Progressive Web App Development',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);


  return (
    <div className="text-center py-4 py-md-5 p-5 p-lg-0">
      {/* Top Section */}
      <div className="container mb-4 mb-md-5">
        <motion.h1
          className="fw-bold text-dark fs-1 mb-3"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          Mobile App Development Services Across All Platforms
        </motion.h1>
        <motion.p
          className="text-dark fs-6 mx-auto"
          style={{ maxWidth: '600px' }}
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          Whether you need to develop a custom app or upgrade an existing one, we offer end-to-end services to assist you at every stage of the mobile app lifecycle.
        </motion.p>
      </div>

      {/* Case Study Section */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="container-fluid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Case Study Top */}
            <div className="mb-3">
              <div className="d-flex flex-row justify-content-center">
                <motion.div
                  className="d-flex align-items-center gap-3 px-3 py-2 rounded shadow-sm case-study-top-box"
                  style={{
                    backgroundColor: '#f4fef0',
                    maxWidth: '800px',
                    width: '100%',
                  }}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                >
                  <motion.img
                    src={contentSets[activeIndex].icon}
                    alt={contentSets[activeIndex].iconAlt}
                    className="img-fluid"
                    style={{ width: '40px', height: '40px' }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                  <motion.h4
                    className="fw-bold m-0 text-start"
                    style={{ color: '#49a825' }}
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.3 }}
                  >
                    {contentSets[activeIndex].heading}
                  </motion.h4>
                </motion.div>
              </div>
            </div>

            {/* Case Study Bottom */}
            <div className="container mb-5">
              <div
                className="d-flex flex-row align-items-start justify-content-between gap-3 Case-Study-Bottom"
                style={{ maxWidth: '800px', margin: '0 auto' }}
              >
                <motion.p
                  className="text-dark fs-6 text-start mb-0 mx-2"
                  style={{ lineHeight: '1.8', flex: 1 }}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.4 }}
                >
                  {contentSets[activeIndex].para}
                </motion.p>
                <motion.button
                  className="btn btn-outline-dark d-flex align-items-center justify-content-center"
                  onClick={() => setActiveIndex((prev) => (prev + 1) % contentSets.length)}
                  aria-label="Next content"
                  title="View next service"
                  style={{
                    width: '44px',
                    height: '54px',
                    minWidth: '44px',
                    backgroundColor: '#76AC29',
                    borderRadius: '15px',
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fa-solid fa-arrow-down-long text-white"></i>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icons List with Click Support */}
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {[
          { icon: icon2, text: 'iOS App Development', index: 0 },
          { icon: icon1, text: 'Flutter App Development', index: 1 },
          { icon: icon3, text: 'UI/UX Design for Mobile Apps', index: 2 },
          { icon: icon4, text: 'Cross-Platform App Development', index: 3 },
          { icon: icon5, text: 'Progressive Web App Development', index: 4 },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`case-icon-row d-flex align-items-center gap-3 rounded px-3 py-2 shadow-sm mb-3 ${
              activeIndex === item.index ? 'text-black' : 'bg-light'
            }`}
            onClick={() => item.index !== null && setActiveIndex(item.index)}
            style={{ cursor: item.index !== null ? 'pointer' : 'not-allowed' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 3, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.img
              src={item.icon}
              alt={item.text}
              className="img-fluid"
              style={{ width: '36px', height: '36px' }}
            />
            <h5 className="fw-bold mb-0 text-black">{item.text}</h5>
          </motion.div>
        ))}
      </div>

      {/* Inline CSS */}
      <style>
        {`
          .btn-outline-dark:hover {
            transform: scale(1.05);
            transition: all 0.2s ease;
          }
          .case-icon-row:hover {
            background-color: rgba(138, 205, 44, 0.66) !important;
            color: #0000;
            transition: background-color 0.3s ease;
          }
        `}
      </style>
    </div>
  );
};

export default MobileappSection;
