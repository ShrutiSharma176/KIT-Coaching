import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
    return (
        <footer className="site-footer bg-dark text-white pt-5">
            <div className="footer-top container">
                <div className="row">
                    {/* Contact Us Section */}
                    <div className="col-md-6 col-sm-6 col-lg-3">
                        <h4 className="footer-title">Contact Us</h4>
                        <div className="border-bottom border-primary w-25 mb-3"></div>
                        <ul className="list-unstyled">
                            <li><i className="fa fa-map-marker"></i> Spring Store London Oxford Street, UK</li>
                            <li><i className="fa fa-phone"></i> Mobile: +00 1234 456789</li>
                            <li><i className="fa fa-envelope-o"></i> Mail: info@example.com</li>
                            <li><i className="fa fa-fax"></i> Fax: 000 123 2294 089</li>
                        </ul>
                    </div>

                    {/* Useful Links Section */}
                    <div className="col-md-6 col-sm-6 col-lg-3">
                        <h4 className="footer-title">Useful Links</h4>
                        <div className="border-bottom border-primary w-25 mb-3"></div>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">B.Com</a></li>
                            <li><a href="#" className="text-white">M.Com</a></li>
                            <li><a href="#" className="text-white">BBA</a></li>
                            <li><a href="#" className="text-white">Accounts</a></li>
                            <li><a href="#" className="text-white">Business Studies</a></li>
                        </ul>
                    </div>

                    {/* Recent Posts Section */}
                    <div className="col-md-6 col-sm-6 col-lg-3">
                        <h4 className="footer-title">Recent Posts</h4>
                        <div className="border-bottom border-primary w-25 mb-3"></div>
                        <div>
                            <div className="mb-3 d-flex">
                                <img src="images/blog/recent-blog/pic1.jpg" alt="" width="60" />
                                <a href="#" className="text-white ms-2">Preparation Strategy for SSC</a>
                            </div>
                            <div className="mb-3 d-flex">
                                <img src="images/blog/recent-blog/pic2.jpg" alt="" width="60" />
                                <a href="#" className="text-white ms-2">New Pattern of SSC-CGL</a>
                            </div>
                            <div className="d-flex">
                                <img src="images/blog/recent-blog/pic3.jpg" alt="" width="60" />
                                <a href="#" className="text-white ms-2">How to manage time for SSC</a>
                            </div>
                        </div>
                    </div>

                    {/* Visitors and App Download Section */}
                    <div className="col-md-6 col-sm-6 col-lg-3">
                        <h4 className="footer-title">Visitors</h4>
                        <div className="border-bottom border-primary w-25 mb-3"></div>
                        <h2>2035422</h2>
                        <h5 className="text-uppercase">Download Our App</h5>
                        <div>
                            <a href="#"><img src="images/logo/app-white1.png" alt="" width="120" className="m-1" /></a>
                            <a href="#"><img src="images/logo/app-white2.png" alt="" width="120" className="m-1" /></a>
                        </div>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="row mt-4">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <a href="#" className="text-white"><i className="fa fa-facebook"></i> Share On Facebook</a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <a href="#" className="text-white"><i className="fa fa-twitter"></i> Tweet About it</a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <a href="#" className="text-white"><i className="fa fa-google-plus"></i> Google Plus | 78+</a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <a href="#" className="text-white"><i className="fa fa-linkedin"></i> Linkedin | 21k</a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom text-center mt-4 py-3 bg-secondary">
                <p>Copyright © 2024 Smart Class. All Rights Reserved.</p>
                <div>
                    <a href="#" className="text-white me-3">Home</a>
                    <a href="#" className="text-white">About Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
