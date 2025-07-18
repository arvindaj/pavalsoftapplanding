import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';
import bg from '../assets/img/bg.png';
import img4 from '../assets/img/appscreen2 1.png';
import icon2 from '../assets/img/skin-cell 1.png';
import icon3 from '../assets/img/cashback.png';
import icon4 from '../assets/img/magnifying-glass 1.png';
import icon5 from '../assets/img/cashback.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/features.css';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-100 position-relative features-mine" ref={ref}>
      {/* Background Image */}
      <motion.div 
        className="position-absolute w-100 h-100" 
        style={{ zIndex: -1, opacity: 0.2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      >
        <img
          src={bg}
          alt="background"
          className="w-100 h-100 object-fit-cover"
          style={{ transform: 'translateY(-30%)' }}
        />
      </motion.div>

      {/* Section Wrapper */}
      <motion.div 
        className="container py-3 py-lg-0"
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
      >
        <div className="row flex-column flex-lg-row align-items-center g-3 g-lg-0">
          {/* Left Section */}
          <motion.div 
            className="col-12 col-lg-6 d-flex flex-column align-items-center position-relative"
            variants={slideInLeft}
          >
            <motion.img
              src={img4}
              alt="app screen"
              className="img-fluid"
              style={{ maxWidth: '90%', transform: 'scale(0.9)' }}
              whileHover={{ 
                scale: 0.95,
                rotate: 2,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.85 }}
            />
            <motion.p 
              className="bottom-0 mb-2 d-none d-sm-block text-center fs-6 text-dark"
              variants={fadeInUp}
            >
              User Friendly APP
            </motion.p>
          </motion.div>

          {/* Right Section */}
          <motion.div 
            className="col-12 col-lg-6 pt-5 pt-lg-0 position-relative p-4"
            variants={slideInRight}
          >
            <motion.h1 
              className="text-dark mb-0 fs-5 fs-md-2 mb-2"
              variants={itemVariants}
            >
              Find the best developers for
            </motion.h1>

            <motion.h1 
              className="fw-bold text-dark fs-1 fs-md-3"
              variants={itemVariants}
            >
              Mobile app <br />Development services
            </motion.h1>
            
            <motion.p 
              className="text-dark fs-5 fs-md-5 my-3"
              variants={itemVariants}
            >
              Schedule a consultation with our skilled mobile app developers to convey your idea and explore possible solutions that can drive creativity and efficiency in your business.
            </motion.p>

            {/* Icon Mobile Section */}
            <motion.div 
              className="d-flex flex-column gap-4"
              variants={containerVariants}
            >
              {[
                { icon: icon2, text: '$10+ Billion Market' },
                { icon: icon3, text: '3x Player Retention' },
                { icon: icon4, text: 'New Revenue Streams' },
                { icon: icon5, text: '100% refund policy' },
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="d-flex align-items-center gap-2 icon-wrapper" 
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="">
                    <motion.img
                      src={item.icon}
                      alt="icon"
                      className="img-fluid"
                      style={{ width: '40px', height: '40px' }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  <h2 className="fw-bold text-dark mb-0 fs-5 fs-md-4">{item.text}</h2>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.button 
              className="btn btn-dark mt-3 px-4 py-2 fs-6"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Enquire Now
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Container */}
      <motion.div
        className="container my-4 p-4 rounded-3 position-relative"
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
        variants={scaleUp}
        initial="hidden"
        animate={mainControls}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
          transition: { duration: 0.3 }
        }}
      >
        <div className="row align-items-center g-4">
          {/* Stats Left */}
          <motion.div 
            className="col-12 col-lg-3 text-center text-lg-start"
            variants={slideInLeft}
          >
            <motion.h4 
              className="fw-bold text-dark fs-1 fs-lg-3 mb-0"
              variants={itemVariants}
            >
              Ready to  <br />Transform <br /> Your Online  <br /> Presence?
            </motion.h4>
          </motion.div>

          {/* Stats Separator */}
          <motion.div 
            className="d-none d-lg-block col-lg-1"
            variants={fadeInUp}
          >
            <motion.div 
              className="bg-secondary h-100" 
              style={{ width: '2px', margin: 'auto' }}
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
            <div className="line4"></div>
          </motion.div>

          {/* Stats Right */}
          <motion.div 
            className="col-12 col-lg-6 position-relative p-3 p-lg-4"
            variants={slideInRight}
          >
            <motion.div
              className="position-absolute rounded-circle d-none d-lg-block"
              style={{
                width: '280px',
                height: '280px',
                backgroundColor: '#97c15a66',
                left: '-90%',
                top: '-40px',
                zIndex: -1,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>

            <motion.p 
              className="text-dark fs-6 fs-md-5 mb-4 col-lg-12"
              variants={itemVariants}
            >
              Our team is here to provide you with tailored solutions that will elevate your brand and engage your audience.
            </motion.p>
            
            <motion.div 
              className="row g-3"
              variants={containerVariants}
            >
              {[
                { end: 51, label: 'Developers' },
                { end: 452, label: 'Designers' },
                { end: 785, label: 'Projects' },
                { end: 100, label: 'Clients', suffix: '+' },
              ].map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  className="col-6 col-md-3 text-center"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="fs-3 fw-bold text-dark"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      delay: idx * 0.1 + 0.5
                    }}
                  >
                    <CountUp end={stat.end} duration={15} />
                    {stat.suffix || '+'}
                  </motion.div>
                  <motion.p 
                    className="fs-6 text-secondary mb-0"
                    variants={fadeInUp}
                  >
                    {stat.label}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced CSS for Button and Icon Hover */}
      <style jsx>{`
        .btn-dark:hover {
          transform: scale(1.05);
          transition: all 0.2s ease;
        }
        .icon-wrapper {
          
          background-color: #D5E6BD;
          border-radius: 8px;
          padding: 10px;
          transition: all 0.3s ease;
        }
        .icon-wrapper:hover {
          background-color: rgb(138, 205, 44);
          border-radius: 8px;
          transform: translateX(10px);
        }
        .features-mine {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Features;