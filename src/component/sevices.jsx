import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon4 from "../assets/img/sevicesoftware.png";
import '../assets/css/sevices.css'

function Services() {
    return (
        <div className="py-5 text-center">
            <div className="container text-dark">
                <h1 className="servicesheading fw-bold fs-3 mb-3">
                    Looking for other Services?
                </h1>
                <p className="mb-0">Explore our other related services to enhance the performance of your digital product.</p>
            </div>

            <div className="py-4">
                <div className="container">
                    <div className="row g-0 shadow rounded overflow-hidden"
                     style={{ backgroundColor: '#EAEAEA99' }}>
                        {/* Left Side */}
                        <div className="col-12 col-md-6 p-4 text-start">
                            <h5 className="fw-bold mb-3">Software Product Development</h5>
                            <hr style={{ width: '60px', borderTop: '2px solid black' }} />
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                                As a top software development company, we help businesses drive growth and thrive in a competitive landscape with innovative software solutions. Whether you're a startup seeking dynamic software, a growing enterprise needing an integrated digital ecosystem, or a corporation looking to modernize legacy software, our custom software development services cater to all unique business needs.
                            </p>

                        </div>

                        {/* Right Side */}
                        <div className="col-12 col-md-6 position-relative d-flex flex-column justify-content-between p-3"
                         >
                            {/* Top Right Button */}
                            <div className="d-flex justify-content-center mb-3 gap-3">
                                <button className="btn custom-btn">
                                    Explore Now <i className="fa fa-arrow-right ms-2"></i>
                                </button>
                                <button className="btn custom-btn">
                                    Go Next <i className="fa fa-arrow-right ms-2"></i>
                                </button>
                            </div>

                            {/* App Image and Label */}
                            <div className="d-flex align-items-center justify-content-center rounded h-100" >
                                <div className="row w-100 ">
                                    <div className="col-6 text-center h-100">
                                        <img
                                            src={icon4}
                                            alt="App Mockup"
                                            className="img-fluid position-relative "
                                            style={{ maxHeight: '350px', scale: '1.06' }}
                                        />
                                    </div>
                                    <div className="col-6 d-flex flex-column justify-content-center align-items-center text-center ps-3 bg-light ">
                                        <h6 className="fw-bold mb-3">Running APP</h6>
                                        <span style={{ letterSpacing: '5px', color: '#888' }}>SUCCESS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
