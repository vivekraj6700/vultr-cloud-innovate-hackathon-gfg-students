import React from 'react';
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";


const Footer = () => {
    return (
        <>

            <footer className="py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img src={"/images/newsletter.png"} alt="newsletter" />
                                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Your Email Address"
                                    aria-label="Your Email Address"
                                    aria-describedby="basic-addon2"
                                />
                                <button className="input-group-text p-2" id="basic-addon2">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-2 ">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="text-white mb-4">Contact Us</h4>
                            <div>
                                <address className="text-white fs-6">
                                    Sirisiya Sasamusa <br />Gopalganj,Bihar <br />
                                    PinCode: 841505
                                </address>
                                <a
                                    href="tel:+91 7082561719"
                                    className=" d-block p2 mb-1  text-white"
                                >
                                    +91 7082561719
                                </a>
                                {/*<a
                                    href="mailto:rrishavsingh70@gmail.com"
                                    className=" d-block p2 mb-0 text-white "
                                >
                                    rrishavsingh70@gmail.com
    </a>*/}
                                <div className="social_icons d-flex align-items-center gap-30 mt-2">
                                    <a className="text-white" href="/">
                                        <BsLinkedin className="fs-4 " />
                                    </a>
                                    <a className="text-white" href="/">
                                        <BsInstagram className="fs-4" />
                                    </a>
                                    <a className="text-white" href="/">
                                        <BsGithub className="fs-4" />
                                    </a>
                                    <a className="text-white" href="/">
                                        <BsYoutube className="fs-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 leftm">
                            <h4 className="text-white mb-4">Information</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link to="/policy" className="text-white p2">
                                    Privacy Policy
                                </Link>
                                <Link to="/return" className="text-white p2">
                                    Refund Policy
                                </Link>
                                <Link to="/shiping" className="text-white p2">
                                    Shipping Policy
                                </Link>
                                <Link to="/term" className="text-white p2">
                                    Terms & Conditions
                                </Link>
                            </div>
                        </div>
                        <div className="col-3 leftm">
                            <h4 className="text-white mb-4">Account</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link to={"/about"} className="text-white p2">About Us</Link>
                                <Link to={"/fqa"} className="text-white p2">Faq</Link>
                                <Link to="/contact" className="text-white p2">Contact</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
            <footer className="py-1">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">
                                &copy; {new Date().getFullYear()} Sirisa.com.All Right Reserved.
                            </p>
                            <div className="text-center">
                                <small className="mt-0 mb-0 text-white">Made with <i className="'bi bi-suit-heart-fill" style={{ color: "red" }} /> by Gopalganj
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>

    );
}

export default Footer;
