import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import icon4 from "../assets/img/sevicesoftware.png";
import '../assets/css/sevices.css'

function Services() {
    const [swiperInstance, setSwiperInstance] = useState(null);

    // Sample data for multiple slides - you can replace this with your actual data
    const servicesData = [
        {
            id: 1,
            title: "Software Product Development",
            description: "As a top software development company, we help businesses drive growth and thrive in a competitive landscape with innovative software solutions. Whether you're a startup seeking dynamic software, a growing enterprise needing an integrated digital ecosystem, or a corporation looking to modernize legacy software, our custom software development services cater to all unique business needs.",
            image: icon4,
            appTitle: "Running APP",
            status: "SUCCESS"
        },
        {
            id: 2,
            title: "Mobile App Development",
            description: "We create innovative mobile applications that deliver exceptional user experiences across iOS and Android platforms. Our team specializes in native and cross-platform development, ensuring your app performs flawlessly on all devices while meeting your business objectives.",
            image: icon4,
            appTitle: "Mobile APP",
            status: "ACTIVE"
        },
        {
            id: 3,
            title: "Web Application Development",
            description: "Our web application development services focus on creating scalable, secure, and user-friendly web solutions. From simple websites to complex web applications, we leverage the latest technologies to build digital experiences that engage your audience.",
            image: icon4,
            appTitle: "Web APP",
            status: "LIVE"
        },
        {
            id: 4,
            title: "Cloud Solutions",
            description: "Transform your business with our comprehensive cloud solutions. We help organizations migrate to the cloud, optimize their infrastructure, and leverage cloud-native technologies to improve scalability, security, and cost-effectiveness.",
            image: icon4,
            appTitle: "Cloud APP",
            status: "DEPLOYED"
        }
    ];

    const handleExploreNow = (serviceId) => {
        // First slide to next
        if (swiperInstance) {
            swiperInstance.slideNext();
        }
        
        // Add your explore functionality here
        console.log(`Exploring service ${serviceId}`);
        
        // Optional: Add a small delay and then navigate or show details
        setTimeout(() => {
            // You can navigate to a detail page or open a modal
            // Example: window.location.href = `/services/${serviceId}`;
            // Example: setShowModal(true);
        }, 300);
    };

    const handleGoNext = () => {
        if (swiperInstance) {
            swiperInstance.slideNext();
        }
    };

    const handleGoPrev = () => {
        if (swiperInstance) {
            swiperInstance.slidePrev();
        }
    };

    return (
        <div className="py-5 text-center">
            <div className="container text-dark">
                <h1 className="servicesheading fw-bold fs-1 mb-3">
                    Looking for other Services?
                </h1>
                <p className="mb-0">Explore our other related services to enhance the performance of your digital product.</p>
            </div>
            
            {/* service swiper */}
            <div className="py-4">
                <div className="container position-relative">
                    <Swiper
                        onSwiper={setSwiperInstance}
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={false}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="services-swiper"
                        onSlideChange={(swiper) => {
                            console.log('Slide changed to:', swiper.activeIndex);
                        }}
                    >
                        {servicesData.map((service) => (
                            <SwiperSlide key={service.id}>
                                <div className="row g-0 shadow rounded overflow-hidden"
                                    style={{ backgroundColor: '#EAEAEA99' }}>
                                    {/* Left Side */}
                                    <div className="col-12 col-md-6 p-4 text-start">
                                        <h5 className="fw-bold mb-3">{service.title}</h5>
                                        <hr style={{ width: '60px', borderTop: '2px solid black' }} />
                                        <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Right Side */}
                                    <div className="col-12 col-md-6 position-relative d-flex flex-column justify-content-between p-3">
                                        {/* Top Right Buttons */}
                                        <div className="d-flex mx-5 mb-3 gap-3">
                                            <button 
                                                className="btn custom-btn btn-primary"
                                                onClick={() => handleExploreNow(service.id)}
                                                style={{
                                                    transition: 'all 0.3s ease',
                                                    transform: 'scale(1)',
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.transform = 'scale(1.05)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.transform = 'scale(1)';
                                                }}
                                            >
                                                Explore Now <i className="fa fa-arrow-right ms-2"></i>
                                            </button>
                                            <button 
                                                className="btn custom-btn btn-outline-primary"
                                                onClick={handleGoNext}
                                                style={{
                                                    transition: 'all 0.3s ease',
                                                    transform: 'scale(1)',
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.transform = 'scale(1.05)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.transform = 'scale(1)';
                                                }}
                                            >
                                                Go Next <i className="fa fa-arrow-right ms-2"></i>
                                            </button>
                                        </div>

                                        {/* App Image and Label */}
                                        <div className="d-flex align-items-center justify-content-center rounded h-100">
                                            <div className="row w-100">
                                                <div className="col-6 text-center h-100">
                                                    <img
                                                        src={service.image}
                                                        alt="App Mockup"
                                                        className="img-fluid position-relative"
                                                        style={{ maxHeight: '350px', scale: '1.06' }}
                                                    />
                                                </div>
                                                <div className="col-6 d-flex flex-column justify-content-center align-items-center text-center ps-3 bg-light rounded">
                                                    <h6 className="fw-bold mb-3">{service.appTitle}</h6>
                                                    <span 
                                                        className="badge bg-success"
                                                        style={{ 
                                                            letterSpacing: '2px', 
                                                            fontSize: '0.8rem',
                                                            padding: '8px 16px'
                                                        }}
                                                    >
                                                        {service.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                   

                </div>
            </div>
        </div>
    );
}

export default Services;