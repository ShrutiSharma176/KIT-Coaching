import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
    return (
        <footer className="site-footer bg-dark text-white pt-5">
            <div className="container">
                <div className="row justify-content-between">
                    {/* Coaching Info Section */}
                    <div className="col-md-6 col-lg-3 mb-4 text-center text-md-start">
                        <h4 className="footer-title text-uppercase">K.I.T COACHING CLASSES</h4>
                        <div className="border-bottom border-danger w-25 mb-3"></div>
                        <p className="small">
                            K.I.T COACHING CLASSES has commenced its journey of providing
                            result-oriented coaching for Primary, Upper Primary, Secondary,
                            and Higher Secondary students.
                        </p>
                    </div>

                    {/* Useful Links Section */}
                    <div className="col-md-6 col-lg-3 mb-4 text-center text-md-start">
                        <h4 className="footer-title text-uppercase">Useful Links</h4>
                        <div className="border-bottom border-danger w-25 mb-3"></div>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-link">HOME</a></li>
                            <li><a href="#" className="footer-link">ABOUT US</a></li>
                            <li><a href="#" className="footer-link">CLASSROOM</a></li>
                            <li><a href="#" className="footer-link">CONTACT</a></li>
                            <li><a href="#" className="footer-link">GALLERY</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="col-md-6 col-lg-3 mb-4 text-center text-md-start">
                        <h4 className="footer-title text-uppercase">Get In Touch</h4>
                        <div className="border-bottom border-danger w-25 mb-3"></div>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <i className="fa fa-map-marker me-2"></i>
                                <strong>Location:</strong>
                                <p className="mb-0 small">509 NMS ICON SECTOR 19, ULWE NAVI MUMBAI 410206</p>
                            </li>
                            <li className="mb-2">
                                <i className="fa fa-phone me-2"></i>
                                <strong>Phone:</strong>
                                <p className="mb-0 small">+91 9167796186</p>
                            </li>
                            <li>
                                <i className="fa fa-envelope-o me-2"></i>
                                <strong>Email:</strong>
                                <p className="mb-0 small">admission@kitclasses.com</p>
                            </li>
                        </ul>
                    </div>

                    {/* Visitors and App Download Section */}
                    <div className="col-md-6 col-lg-3 text-center">
                        <h4 className="footer-title text-uppercase">Visitors</h4>
                        <div className="border-bottom border-danger w-50 mb-3 mx-auto"></div>
                        <h2>2,035,422</h2>
                        <div>
                            <a href="#"><img src="images/logo/app-white1.png" alt="" width="120" className="m-1" /></a>
                            <a href="#"><img src="images/logo/app-white2.png" alt="" width="120" className="m-1" /></a>
                        </div>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="row mt-4 text-center">
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                        <a href="#" className="social-link facebook">
                            <i className="fa fa-facebook me-2"></i> Share On Facebook
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                        <a href="#" className="social-link tweet">
                            <i className="fa fa-twitter me-2"></i> Tweet About It
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                        <a href="#" className="social-link google">
                            <i className="fa fa-google-plus me-2"></i> Google Plus | 78+
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <a href="#" className="social-link linkedin">
                            <i className="fa fa-linkedin me-2"></i> Linkedin | 21k
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom text-center mt-4 py-3 bg-secondary">
                <p className="mb-0 small">
                    Copyright © 2025 K.I.T Coaching Classes. Designed by Microdynamic
                    Software Private Limited.
                </p>
            </div>

            {/* CSS Styling */}
            <style>
                {`
                .social-link, .social-link-facebook, .social-link-google {
                    color: white;
                    text-decoration: none;
                    font-size: 1.2rem;
                    transition: all 0.3s ease-in-out;
                }

                .tweet:hover, .linkedin:hover {
                    color: #1DA1F2;
                    transform: scale(1.1);
                }
                
                .facebook:hover{
                    color: #1877F2;
                    transform: scale(1.1);
                }

                .google:hover{
                    color: #DB4437;
                    transform: scale(1.1);
                }

                .social-link i {
                    font-size: 2rem; /* Increased size */
                    transition: transform 0.3s ease-in-out;
                }

                .social-link i:hover {
                    transform: scale(1.2);
                }

                .footer-link {
                    color: white;
                    text-decoration: none;
                    font-size: 1rem;
                    transition: color 0.3s ease-in-out, text-decoration 0.3s ease-in-out;
                }

                .footer-link:hover {
                    color: rgb(252, 74, 68);
                }

                @media (min-width: 992px) {
                    .row.gap-4 > div {
                        flex: 1;
                }
            }`
            }
            </style>
        </footer>
    );
};

export default Footer;