import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight, faBook, faFlask, faChartLine,
    faUsers, faBasketballBall, faHeart, faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";
import "./AboutUsPage.css";
import Testimonial from "./Testimonial";

function AboutUsPage() {
    return (
        <>
            {/* About Us Features */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        
                        {[
                            { icon: faBook, title: "5th To 10th All Subjects", color: "success" },
                            { icon: faFlask, title: "11th & 12th Science", color: "primary" },
                            { icon: faChartLine, title: "11th & 12th Commerce", color: "warning" },
                            { icon: faUsers, title: "Personal Development Activities", color: "info" },
                            { icon: faBasketballBall, title: "Extra Activities", color: "secondary" },
                            { icon: faHeart, title: "Self-Care Activities", color: "danger" },
                        ].map((feature, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                <div className="service-item text-center pt-3 shadow-lg rounded-3 p-4 transition-effect bg-white h-100 d-flex flex-column justify-content-between">
                                    <FontAwesomeIcon icon={feature.icon} size="3x" className={`text-${feature.color} icon-effect mb-4`} />
                                    <h5 className="mb-3">{feature.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        {/* Image Section */}
                        <div className="col-lg-6" style={{ minHeight: "400px" }}>
                            <div className="position-relative h-100">
                                <img
                                    className="img-fluid position-absolute w-100 h-100"
                                    src="/images/cat-4.jpg"
                                    alt="About K.I.T Coaching"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="col-lg-6">
                            <h6 className="section-title bg-white text-start text-danger pe-3"
                                style={{
                                    padding: "8px 16px",
                                    borderLeft: "3px solid #dc3545",
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                    display: "inline-block"
                                }}>
                                About Us
                            </h6>
                            <h1 className="mb-4 text-danger">Welcome to K.I.T Coaching Classes</h1>
                            <p className="mb-4">
                                K.I.T Coaching Classes were launched with a vision of creating interest in students about learning.
                                We provide an ideal launch pad for serious exam aspirants and shape their thinking approach.
                            </p>
                            <p className="mb-4">
                                Our mission is to make kids interested in science and learning, ensuring they achieve heights beyond their imagination.
                                We emphasize clarity in concepts, effort, and application to build strong academic foundations.
                            </p>

                            {/* Key Features Section */}
                            <div className="row gy-2 gx-4 mb-4">
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <FontAwesomeIcon icon={faArrowRight} className="text-danger me-2" />
                                        Strict Administration & Discipline
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <FontAwesomeIcon icon={faArrowRight} className="text-danger me-2" />
                                        Highly Qualified Faculty
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <FontAwesomeIcon icon={faArrowRight} className="text-danger me-2" />
                                        Comprehensive Study Material
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <FontAwesomeIcon icon={faArrowRight} className="text-danger me-2" />
                                        Motivational Sessions
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <FontAwesomeIcon icon={faArrowRight} className="text-danger me-2" />
                                        Regular Testing & Evaluation
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <FontAwesomeIcon icon={faArrowRight} className="text-danger me-2" />
                                        Parent-Teacher Meetings
                                    </p>
                                </div>
                            </div>

                            <a className="btn btn-danger py-3 px-5 mt-2" href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Director's Message Section - New Design */}
            <div className="container-xxl py-5 bg-dark text-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="text-center mb-4">
                                <h6 className="section-title text-danger text-uppercase"
                                    style={{ fontWeight: "bold", letterSpacing: "1px" }}>
                                    Director's Message
                                </h6>
                                <h2 className="text-white">A Vision for Learning</h2>
                            </div>

                            <div className="bg-white text-dark p-4 rounded-3 shadow-lg text-center"
                                style={{ position: "relative", borderLeft: "5px solid red" }}>
                                <FontAwesomeIcon
                                    icon={faQuoteLeft}
                                    size="3x"
                                    className="text-danger position-absolute"
                                    style={{ top: "-25px", left: "20px" }}
                                />
                                <p className="lead mt-3" style={{ fontStyle: "italic" }}>
                                    "When we started K.I.T Coaching Classes, our only vision was to be unique and innovative in learning techniques so that students can perform.
                                    In today's world, where kids have access to so many distractions, our aim is to make learning enjoyable and interesting."
                                </p>
                                <hr className="w-50 mx-auto" />
                                <p className="mt-3">
                                    We believe that a child's success depends on three key factors: clarity in concepts, effort, and the ability to apply those concepts.
                                    Our team of dedicated faculty members works tirelessly to ensure that each student understands and excels in their studies.
                                </p>
                                <p className="fw-bold">- Director, K.I.T Coaching Classes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Testimonial />
        </>
    );
}

export default AboutUsPage;


// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faArrowRight, faBook,
//     faFlask,
//     faChartLine,
//     faUsers,
//     faBasketballBall,
//     faHeart
// } from "@fortawesome/free-solid-svg-icons";
// import "./AboutUsPage.css";
// import Testimonial from "./Testimonial";

// function AboutUsPage() {
//     return (
//         <>
// {/* About Us Features */}
// <div className="container-xxl py-5">
//     <div className="container">
//         <div className="row g-4 justify-content-center">
//             {/* Feature Cards */}
//             {[
//                 { icon: faBook, title: "5th To 10th All Subjects", color: "success" },
//                 { icon: faFlask, title: "11th & 12th Science", color: "primary" },
//                 { icon: faChartLine, title: "11th & 12th Commerce", color: "warning" },
//                 { icon: faUsers, title: "Personal Development Activities", color: "info" },
//                 { icon: faBasketballBall, title: "Extra Activities", color: "secondary" },
//                 { icon: faHeart, title: "Self-Care Activities", color: "danger" },
//             ].map((feature, index) => (
//                 <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
//                     <div className="service-item text-center pt-3 shadow-lg rounded-3 p-4 transition-effect">
//                         <FontAwesomeIcon icon={feature.icon} size="3x" className={`text-${feature.color} icon-effect mb-4`} />
//                         <h5 className="mb-3">{feature.title}</h5>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
// </div>

//             {/* About Us Section */}
//             <div className="container-xxl py-5">
//                 <div className="container">
//                     <div className="row g-5">
//                         {/* Image Section */}
//                         <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: "400px" }}>
//                             <div className="position-relative h-100">
//                                 <img
//                                     className="img-fluid position-absolute w-100 h-100"
//                                     src="/images/cat-4.jpg"
//                                     alt="About K.I.T Coaching"
//                                     style={{ objectFit: "cover" }}
//                                 />
//                             </div>
//                         </div>

//                         {/* Text Section */}
//                         <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
//                             <h6 className="section-title bg-white text-start text-danger pe-3" style={{
//                                 padding: "8px 16px",
//                                 borderLeft: "3px solid #dc3545",
//                                 fontWeight: "bold",
//                                 textTransform: "uppercase",
//                                 letterSpacing: "1px",
//                                 display: "inline-block"
//                             }}>About Us</h6>
//                             <h1 className="mb-4 text-danger">Welcome to K.I.T Coaching Classes</h1>
//                             <p className="mb-4">
//                                 K.I.T Coaching Classes were launched with a vision of creating interest in students about learning.
//                                 We provide an ideal launch pad for serious exam aspirants and shape their thinking approach.
//                             </p>
//                             <p className="mb-4">
//                                 Our mission is to make kids interested in science and learning, ensuring they achieve heights beyond their imagination.
//                                 We emphasize clarity in concepts, effort, and application to build strong academic foundations.
//                             </p>

//                             {/* Key Features Section */}
//                             <div className="row gy-2 gx-4 mb-4">
//                                 {[
//                                     "Strict Administration & Discipline",
//                                     "Highly Qualified Faculty",
//                                     "Comprehensive Study Material",
//                                     "Motivational Sessions",
//                                     "Regular Testing & Evaluation",
//                                     "Parent-Teacher Meetings",
//                                 ].map((feature, index) => (
//                                     <div className="col-sm-6" key={index}>
//                                         <p className="mb-0">
//                                             <FontAwesomeIcon icon={faArrowRight} className="text-danger me-2" />
//                                             {feature}
//                                         </p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <Testimonial />
//         </>
//     );
// }

// export default AboutUsPage;