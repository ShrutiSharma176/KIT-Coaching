import React from "react";

function AboutUsSection() {
    return (
        <>
            <div
                className="section-full bg-white content-inner-2 about-section"
                style={{ backgroundImage: 'url(images/pattern/pt1.png)' }}
            >
                <div className="container">
                    <div className="section-head text-center mb-5">
                        <h1 className="title text-danger" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>About Us</h1>
                        <p className="text-secondary">
                            K.I.T COACHING CLASSES has commenced its journey of providing result-oriented coaching for
                            Primary, Upper Primary, Secondary, and Higher Secondary students.
                        </p>
                    </div>
                    <div className="row align-items-center about-bx2 d-flex">
                        {/* Image Section */}
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-4 d-flex align-items-stretch">
                            <img
                                src="images/course-2.jpg"
                                className="img-fluid rounded shadow w-100 h-100"
                                style={{ objectFit: "cover" }}
                                alt="About Us"
                            />
                        </div>

                        {/* About Box Section */}
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-stretch" style={{ marginTop: "-25px" }}>
                            <div className="about-box bg-light p-4 rounded shadow h-100">
                                <p>
                                    <i className="fas fa-check-circle text-success me-2"></i>
                                    K.I.T COACHING CLASSES provides quality education in various fields and encourages
                                    students to face career challenges in their desired fields. We offer courses for All
                                    BOARDS (STATE BOARD, CBSE, ICSE) 5th to 10th and 11th & 12th (BOARD, CBSE, ISC)
                                    SCIENCE & COMMERCE, as well as IIT-JEE & NEET MHT-CET, SPOKEN ENGLISH & GRAMMAR, and
                                    more.
                                </p>
                                <p>
                                    <i className="fas fa-check-circle text-success me-2"></i>
                                    With teaching experience of several years, we have developed unique methodologies to
                                    generate confidence among students to excel in exams. Our teaching methods are
                                    flexible and simple, ensuring students understand the material easily as per exam
                                    requirements.
                                </p>
                                <p>
                                    <i className="fas fa-check-circle text-success me-2"></i>
                                    Our facilities include Biometric Machines, CCTV cameras, Printed notes, e-learning,
                                    test series, evaluation of test series, Guest lectures, and Seminars. We also monitor
                                    student attendance and inform parents about absences via SMS or call.
                                </p>
                                <p>
                                    <i className="fas fa-check-circle text-success me-2"></i>
                                    We aim to provide the best of the best.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUsSection;
