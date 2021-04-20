import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <div className="bg-color">
            <div className="container section-pad">
                <div className="row justify-content-center text-center">
                    <div className="col-md-6">
                        <h2 className="secondary-color">Why Choose Us</h2>
                    </div>
                </div>
                <div className="row justify-content-center pt-5">
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-widget">
                            <ul className="footer-list">
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Team</li>
                                <li>Testimonial</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-widget">
                            <ul className="footer-list">
                                <li>Terms</li>
                                <li>Condition</li>
                                <li>Privacy</li>
                                <li>Policy</li>
                                <li>Support</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-widget">
                            <ul className="footer-list">
                                <p>+(012) 123 456</p>
                                <p>info@yourmail.com</p>
                                <p>West anderson court 32</p>
                                <p>London , UK</p>
                            </ul>
                            <div className="social">
                                <div className="social-icon">
                                    <FontAwesomeIcon icon={faFacebook} id="fb" />
                                </div>
                                <div className="social-icon">
                                    <FontAwesomeIcon icon={faInstagram} id="insta" />
                                </div>
                                <div className="social-icon">
                                    <FontAwesomeIcon icon={faTwitter} id="twitter" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-text text-center mt-5 pt-5">
                    <p>© 2021 Insurance Agency, All rights reserved by Md. Nazrul Islam.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;