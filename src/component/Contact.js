import React from "react";
import QuickEnquiry from "./EnquiryFrom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone, faEnvelope, faMapMarkerAlt, faClock
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
    return (
        <>
            {/* Contact Information Features */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4 text-center justify-content-center">
                        {[
                            { icon: faPhone, title: "Phone", text: "+91 9167796186", color: "success" },
                            { icon: faEnvelope, title: "Email", text: "admission@kitclasses.com", color: "primary" },
                            { icon: faMapMarkerAlt, title: "Location", text: "509 NMS ICON SECTOR 19, ULWE NAVI MUMBAI 410206", color: "warning" },
                            { icon: faClock, title: "Office Hours", text: "Mon - Sat : 9 AM - 7 PM", color: "info" },
                        ].map((feature, index) => (
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center" key={index}>
                                <div 
                                    className="d-flex align-items-center rounded-3 p-4 w-100 transition-effect"
                                    style={{
                                        background: "#fff",
                                        borderRadius: "12px",
                                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)", 
                                        minHeight: "120px",
                                        transition: "all 0.3s ease-in-out"
                                    }}
                                >
                                    {/* Icon on the Left */}
                                    <div className="me-3 d-flex align-items-center justify-content-center" 
                                        style={{ width: "50px", height: "50px" }}>
                                        <FontAwesomeIcon icon={feature.icon} size="2x" className={`text-${feature.color}`} />
                                    </div>

                                    {/* Text Content on the Right */}
                                    <div className="text-start">
                                        <h6 className="mb-1" style={{ fontWeight: "600" }}>{feature.title}</h6>
                                        <p className="mb-0 text-muted" style={{ fontSize: "16px", lineHeight: "1.4" }}>{feature.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="container my-5">
                <h3 className="text-center mb-4 text-danger">Find Us on the Map</h3>
                <div className="map-container" 
                    style={{ 
                        borderRadius: "12px", 
                        overflow: "hidden", 
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)", 
                        maxWidth: "100%", 
                        height: "400px" 
                    }}
                >
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.410215808883!2d73.02222727510722!3d18.97432098227542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfdb166c78f5%3A0x59532cf6d54b61fa!2sNo.%20194%2C%20Office%20509%2C%20NMS%20ICON%205th%20Floor%20Plot%2C%20Sector%2019%2C%20Ulwe%2C%20Navi%20Mumbai%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1708469506653!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            {/* Quick Enquiry Form */}
            <QuickEnquiry />
        </>
    );
}

export default Contact;


// import React from "react";
// import QuickEnquiry from "./EnquiryFrom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faPhone, faEnvelope, faMapMarkerAlt, faClock
// } from "@fortawesome/free-solid-svg-icons";

// function Contact() {
//     return (
//         <>
//             {/* Contact Information Features */}
//             <div className="container-xxl py-5">
//                 <div className="container">
//                     <div className="row g-4 text-center">
//                         {[
//                             { icon: faPhone, title: "Phone", text: "+91 9167796186", color: "success" },
//                             { icon: faEnvelope, title: "Email", text: "admission@kitclasses.com", color: "primary" },
//                             { icon: faMapMarkerAlt, title: "Location", text: "509 NMS ICON SECTOR 19, ULWE NAVI MUMBAI 410206", color: "warning" },
//                             { icon: faClock, title: "Office Hours", text: "Mon - Sat : 9 AM - 7 PM", color: "info" },
//                         ].map((feature, index) => (
//                             <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center" key={index}>
//                                 <div 
//                                     className="d-flex align-items-center rounded-3 p-4 w-100 transition-effect"
//                                     style={{
//                                         background: "#fff",
//                                         borderRadius: "12px",
//                                         boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)", 
//                                         minHeight: "120px",
//                                         transition: "all 0.3s ease-in-out"
//                                     }}
//                                 >
//                                     {/* Icon on the Left */}
//                                     <div className="me-3 d-flex align-items-center justify-content-center" 
//                                         style={{ width: "50px", height: "50px" }}>
//                                         <FontAwesomeIcon icon={feature.icon} size="2x" className={`text-${feature.color}`} />
//                                     </div>

//                                     {/* Text Content on the Right */}
//                                     <div className="text-start">
//                                         <h6 className="mb-1" style={{ fontWeight: "600" }}>{feature.title}</h6>
//                                         <p className="mb-0 text-muted" style={{ fontSize: "14px", lineHeight: "1.4" }}>{feature.text}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Map Section */}
//             <div className="container my-5">
//                 <h3 className="text-center mb-4 text-danger">Find Us on the Map</h3>
//                 <div className="map-container" 
//                     style={{ 
//                         borderRadius: "12px", 
//                         overflow: "hidden", 
//                         boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)", 
//                         maxWidth: "100%", 
//                         height: "400px" 
//                     }}
//                 >
//                     <iframe
//                         title="Google Map"
//                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.410215808883!2d73.02222727510722!3d18.97432098227542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfdb166c78f5%3A0x59532cf6d54b61fa!2sNo.%20194%2C%20Office%20509%2C%20NMS%20ICON%205th%20Floor%20Plot%2C%20Sector%2019%2C%20Ulwe%2C%20Navi%20Mumbai%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1708469506653!5m2!1sen!2sin"
//                         width="100%"
//                         height="100%"
//                         style={{ border: "0" }}
//                         allowFullScreen=""
//                         loading="lazy"
//                         referrerPolicy="no-referrer-when-downgrade"
//                     ></iframe>
//                 </div>
//             </div>

//             {/* Quick Enquiry Form */}
//             <QuickEnquiry />
//         </>
//     );
// }

// export default Contact;
