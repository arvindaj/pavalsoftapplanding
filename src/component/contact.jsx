import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/contact.css';
import bg from '../assets/img/bg.png';
import img3 from '../assets/img/appscreen3 1.png';
import Endtoendmoblie from './endtoendmoblie';


const ContactSection = () => {

    return (
        <div className="contact-wrapper">

            <div className="bg-wrapper">
                <img src={bg} alt="Background" className="bg-img" />
            </div>
            <Endtoendmoblie />

            <img
                src={img3}
                alt="Mobile app mockup"
                className="girl-img position-absolute"
                data-aos="fade-left"
            />
            <div className="row contact-top">
                <div className="col-12 col-md-6 contact-top-left">
                    <h2 className="contact-heading">Our Successful Mobile App Development Projects</h2>
                    <p className="contact-para">
                        Ready to transform your ideas into powerful mobile apps? Contact us
                        today for a free consultation! Our expert team specializes in creating
                        innovative mobile applications tailored to your business needs.
                    </p>

                    <button
                        className="btn bg-black text-white contact-button"
                        onClick={() => setShowPopup(true)}
                        aria-label="Contact us for a free consultation"
                    >
                        Explore Now
                    </button>

                </div>

                <div className="contact-top-right d-flex  justify-content-end">

                    <div className="d-flex flex-column gap-4 p-3">

                        <div className="justify-content-start d-flex">
                            <button
                                className="btn contact-button btn-outline-black"
                                onClick={() => setShowPopup(true)}
                                aria-label="Explore UI/UX services"
                            >
                                UI/UX
                            </button>
                        </div>

                        <div className='justify-content-start d-flex'>
                            <button
                                className="btn contact-button ms-2"
                                style={{ backgroundColor: 'black', color: 'white', borderColor: 'black' }}
                                onClick={() => setShowPopup(true)}
                                aria-label="Explore Mobile App services"
                            >
                                Mobile App
                            </button>
                        </div>

                        <div>
                            <button
                                className="btn contact-button btn-outline-black mb-2 mb-lg-0 ms-3"
                                onClick={() => setShowPopup(true)}
                                aria-label="Explore Data & AI/ML services"
                            >
                                Data & AI/ML
                            </button>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-wrap  flex-column position-relative mt-lg-5">
                    <div className='passio-text-box '>
                        <p className="passio-text p-3">
                            Passio.AI is an edge-AI platform that empowers businesses to add vertical-specific computer vision into their apps and deliver AI-driven lifestyle experiences.
                        </p>
                    </div>

                    <div className="social-icons  d-flex gap-3 mt-3 p-3">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                            <i className="bi bi-instagram" style={{ color: 'black', fontSize: '1.5rem' }}></i>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                            <i className="bi bi-facebook" style={{ color: 'black', fontSize: '1.5rem' }}></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
                            <i className="bi bi-twitter-x" style={{ color: 'black', fontSize: '1.5rem' }}></i>
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube channel">
                            <i className="bi bi-youtube" style={{ color: 'black', fontSize: '1.5rem' }}></i>
                        </a>
                    </div>
                </div>

            </div>

            <div className="contact-bottom pt-0 pb-0 p-3 p-lg-0 p-md-0">
                <h3 className="bottom-heading">
                    We specialize in delivering digital marketing solutions <br /> that drive
                    growth and success.
                </h3>
                <p className="bottom-para">
                    With expertise in SEO, PPC, Social Media, and Web Design, <br /> we
                    help businesses enhance their online presence and achieve measurable
                    results.
                </p>
                <p className="bottom-para p-2">
                    Boost your online presence with our expert solutions!
                </p>
                <button
                    className="btn bg-black text-white contact-button mb-2"
                    onClick={() => setShowPopup(true)}
                    aria-label="Explore our digital marketing solutions"
                >
                    Explore Now
                </button>

            </div>


            
        </div>
    );
};

export default ContactSection;