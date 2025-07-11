import '../assets/css/endtoendmoblie.css'
import icon1 from "../assets/img/icon12.png";
import icon2 from "../assets/img/MVP.png";
import icon3 from "../assets/img/APP-MODERNIZE.png";
import icon4 from "../assets/img/ENTERPISE.png";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect, useState, useRef } from "react";

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Popup from "./popup";

const Endtoendmoblie = () => {
  const [showPopup, setShowPopup] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Case study data
  const caseStudies = [
    {
      icon: icon1,
      alt: "Massive Scale",
      title: "Massive Scale, <br /> Real Users",
      description:
        "How we helped bring a live Web2 game with 20M+ users on-chain, with zero disruption to gameplay.",
    },
    {
      icon: icon2,
      alt: "Complex Infra",
      title: "Complex Infra, <br /> Zero Downtime",
      description:
        "Built scalable, secure middleware that sits between live game servers and Web3 infra with zero disruption to gameplay.",
    },
    {
      icon: icon3,
      alt: "Full-Stack Advisory",
      title: "Full-Stack Advisory <br /> to Execution",
      description:
        "Built scalable, secure middleware that sits between live game servers and Web3 infra with zero disruption to gameplay.",
    },
    {
      icon: icon4,
      alt: "Ecosystem Expansion",
      title: "Ecosystem <br /> Expansion",
      description:
        "Initiated token lifecycle planning, marketplace architecture, and long term utility—setting the stage for the 100M+ user Web3 journey.",
    },
     {
      icon: icon1,
      alt: "Massive Scale",
      title: "Massive Scale, <br /> Real Users",
      description:
        "How we helped bring a live Web2 game with 20M+ users on-chain, with zero disruption to gameplay.",
    },
    {
      icon: icon2,
      alt: "Complex Infra",
      title: "Complex Infra, <br /> Zero Downtime",
      description:
        "Built scalable, secure middleware that sits between live game servers and Web3 infra with zero disruption to gameplay.",
    },
    {
      icon: icon3,
      alt: "Full-Stack Advisory",
      title: "Full-Stack Advisory <br /> to Execution",
      description:
        "Built scalable, secure middleware that sits between live game servers and Web3 infra with zero disruption to gameplay.",
    },
    {
      icon: icon4,
      alt: "Ecosystem Expansion",
      title: "Ecosystem <br /> Expansion",
      description:
        "Initiated token lifecycle planning, marketplace architecture, and long term utility—setting the stage for the 100M+ user Web3 journey.",
    },
  ];

  // Navigation handlers
  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="case-study-section text-center p-0">
      <div className="case-study-top-section p-0 ">
        {/* Swiper Slider */}
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 5 },
          }}
          className="case-study-slider"
        >
          {caseStudies.map((study, index) => (
            <SwiperSlide key={index}>
              <div
                className="case-study-card position-relative p-0 "
                data-aos="fade-up"
                data-aos-duration={1000 + index * 500}
               // Optional: Trigger popup on card click
              >
                <div className="card-bg">
                  <div className="card-badge">
                    <img src={study.icon} alt={study.alt} className="badge-img mb-1" />
                  </div>
                </div>
                <div className="card-text">
                  <h1 className='mb-3'
                  dangerouslySetInnerHTML={{ __html: study.title }} />
                  <p>{study.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
         {/* Custom Navigation Buttons */}
                    <div className="d-flex justify-content-end mt-1 gap-3 mb-3 pt-0 p-4" style={{
                       position: 'absolute',
                       top:'16%',
                       right:'4%',
                       zIndex:'2'
                    }}>
                        <button 
                            className="btn btn-outline-secondary swiper-button-prev-custom"
                            onClick={handlePrevSlide}
                            style={{
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                               
                            }}
                        >
                          <i className="fa fa-arrow-left"></i>
                        </button>
                        <button 
                            className="btn btn-outline-secondary swiper-button-next-custom"
                            onClick={handleNextSlide}
                            style={{
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <i className="fa fa-arrow-right"></i>
                        </button>
                    </div>
      </div>

      <Popup isOpen={showPopup} onRequestClose={() => setShowPopup(false)} />
    </div>
  );
};

export default Endtoendmoblie;