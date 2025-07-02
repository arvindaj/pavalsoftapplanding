import React from 'react';
// import '../assets/css/services.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon4 from "../assets/img/sevicesoftware.png";

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
                    <div className="row align-items-center">
                        {/* Left Column */}
                        <div className="col-12 col-md-6 text-center text-md-start  mb-md-0 mb-lg-4 " style={{backgroundColor:'#EAEAEA99'}}>
                            <h1 className="servicesheading mb-5 fs-4 ">
                                Software Product Development
                            </h1>
                            <p className="">
                                As a top software development company, we help businesses drive growth and thrive in a competitive landscape with innovative software solutions. Whether you're a startup seeking dynamic software, a growing enterprise needing an integrated digital ecosystem, or a corporation looking to modernize legacy software, our custom software development services cater to all unique business needs.
                            </p>
                        </div>
                        {/* Right Column */}
                        <div className="col-12 col-md-6 text-center text-md-center " style={
                            {backgroundColor:'#EAEAEA99'}
                        }>
                            <div className="d-flex justify-content-center justify-content-md-center flex-wrap gap-2 ">
                                <button className="btn btn-dark me-md-2">
                                    Explore Now <i className="fa-solid fa-arrow-right-long ms-2"></i>
                                </button>
                                <button className="btn btn-outline-dark">
                                    Go Next <i className="fa-solid fa-arrow-right-long ms-2"></i>
                                </button>
                            </div>
                            <div className="row align-items-center bg-light ">
                                <div className="col-12 col-sm-6 text-center">
                                    <img src={icon4} alt="Software Development" className="img-fluid" data-aos="fade-right" style={{
                                        scale:'0.9'
                                    }}
                                    />
                                </div>
                                <div className="col-12 col-sm-6 text-center">
                                    <h1 className="servicesheading fs-4">Running APP</h1>
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