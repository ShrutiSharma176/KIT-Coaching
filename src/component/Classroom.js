import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFingerprint, faVideo, faBookOpen, faGraduationCap, faUsers, faChalkboardTeacher, faLightbulb, faUserCheck
} from "@fortawesome/free-solid-svg-icons";

function Classroom() {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <h2 className="text-center text-danger fw-bold mb-4">Amazing Features</h2>
                    <div className="row g-4 justify-content-center">
                        {/* Feature Cards */}
                        {[
                            { icon: faFingerprint, title: "BIOMETRIC ATTENDANCE WITH SMS", color: "success" },
                            { icon: faVideo, title: "CCTV SURVEILLANCE", color: "primary" },
                            { icon: faBookOpen, title: "DAIRY", color: "warning" },
                            { icon: faGraduationCap, title: "100% RESULT", color: "info" },
                            { icon: faUsers, title: "SINGLE BATCH OF 30 STUDENTS ONLY", color: "secondary" },
                            { icon: faChalkboardTeacher, title: "EXPERT & EXPERIENCED TEACHERS", color: "danger" },
                            { icon: faLightbulb, title: "GUIDANCE AS PER BOARD EXAMINATION", color: "danger" },
                            { icon: faUserCheck, title: "PERSONAL GUIDANCE & PRACTICE BASED TEACHING METHODOLOGY", color: "danger" },
                        ].map((feature, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                <div className="service-item text-center pt-3 shadow-lg rounded-3 p-4 transition-effect bg-white h-100 d-flex flex-column justify-content-center">
                                    <FontAwesomeIcon icon={feature.icon} size="3x" className={`text-${feature.color} icon-effect mb-4`} />
                                    <h5 className="mb-3 text-dark fw-bold">{feature.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
            
                    {/* Coaching Sections */}
                    <div className="row mt-5 g-4">
                        <div className="col-12">
                            <div className="p-4 bg-light rounded-3 shadow-lg border border-danger">
                                <h2 className="text-center text-danger fw-bold mb-3">CLASS 8TH COACHING CLASSES</h2>
                                <p>Class 8 is the preliminary step for students to decide on their career and especially for the EXAM as it becomes easier for aspirants to build their base strong and clear it in the first attempt. This is the step where most parents and students struggle in making decisions.</p>
                                <p>"Well begun is half done" is a simple quote that applies to education, sports, arts, or music. The same principle holds true everywhere, and it is proven.</p>
                                <p>Academics alone are not enough for engineering and other competitive exam aspirants. Schools primarily focus on academics, and while they shouldn't be blamed, competition extends beyond basic learning. The CBSE curriculum from Class 8 to Class 12 forms the foundation for competitive exams.</p>
                                <p>However, prescribed books alone are not sufficient. To excel, students must explore additional relevant books and study materials.</p>
                                <p>At Octahedral Classes, we provide standardized tests with flexible formats, varying difficulty levels, and significant scope. Since school tests are mainly academic-focused, they often lack the rigor required for competitive exams. Our institute bridges this gap by offering comprehensive subject knowledge and strategic guidance to help students achieve their dreams.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="p-4 bg-light rounded-3 shadow-lg border border-danger h-100">
                                <h2 className="text-center text-danger fw-bold mb-3">CLASS 9 COACHING CLASSES</h2>
                                <p>Class 9 is also a preliminary step for students who could not decide in class 8. As per the CBSE syllabus, class 9 is the base of class 11 and class 10 is the base of class 12. A strong base helps students significantly in higher classes and makes it easier for them to crack the EXAM.</p>
                                <p>Students in Classes 8th and 9th are at the perfect stage to take structured action toward their career. This is the phase where attitudes and beliefs get shaped, helping students explore their abilities and interests. A strong foundation allows them to make informed career choices and avoid limiting their options.</p>
                                <p>Science governs almost everything around us, and pursuing a career in Science opens up numerous opportunities. Understanding mathematical principles, models, and real-world applications is essential for success. Students with a strong foundation in Science and Mathematics can shape a promising career.</p>
                                <p>At Octahedral Classes, we ensure students receive conceptual clarity and problem-solving techniques necessary for competitive exams.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="p-4 bg-light rounded-3 shadow-lg border border-danger h-100">
                                <h2 className="text-center text-danger fw-bold mb-3">CLASS 10 COACHING CLASSES</h2>
                                <p>Class 10 is another crucial step for students who couldn't decide in class 8 or 9. A strong base in class 9 helps in class 11, and class 10 strengthens the foundation for class 12, ensuring students perform well in higher education and competitive exams.</p>
                                <p>Scoring above 90% in board exams is achievable with the right strategy and dedication. The key lies in proper communication between students and teachers, ensuring conceptual clarity and effective learning.</p>
                                <p>Understanding concepts accounts for 80% of learning, while systematic writing makes up the remaining 20%. To maximize performance, students should focus on proper planning, scheduling, and structured study habits.</p>
                                <p>Octahedral Classes provides the perfect environment for mastering concepts, maintaining consistency, and excelling in board exams through a structured learning approach.</p>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="p-4 bg-light rounded-3 shadow-lg border border-danger">
                                <h2 className="text-center text-danger fw-bold mb-3">CLASS 11 COACHING CLASSES </h2>
                                <p>
                                    Class 11 is the final step for the students who could not decide on class 8 to class 10. Now it becomes challenging for the students whose basic foundation of science and math is not clear in previous classes. They have to be very much honest, arduous and attentive to their study. Quick decisions and time management will play a big role. Of course, if the basic foundation is clear then they can very well grasp and can achieve their goal. </p>
                                <p>Class 11 is when most students start thinking of appearing for EXAM. Although it's challenging to start preparing for EXAM from here, still one can clear entrance easily if he is regular in their preparation and dedicating their entire time towards studies. They have to be attentive, hardworking and arduous in their study.</p>
                                <p> We at Octahedral believe that students can crack EXAM not only through hard work but also need proper guidance at each level which we are facilitating certainly.
                                    It's important to clear school exams with merit to gain confidence in EXAM preparation. Also, School level NCERT books have been approved by experts as the best books for EXAM preparation.</p>
                                <p> We go through each concept of NCERT books minutely. Monthly tests, Boards level as well as EXAM level have proven to be fruitful for our students. We are very strict in our approach as we know students only have 2 years to study so they can't afford to lose time.</p>

                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="p-4 bg-light rounded-3 shadow-lg border border-danger h-100">
                                <h2 className="text-center text-danger fw-bold mb-3">CLASS 12 COACHING CLASSES</h2>
                                <p>Entry level at Class 12 for Exam aspirants is like late comers and they have to be fast movers then only then can chase the goal of EXAM otherwise it will be challenging. Students, whose basic foundation of science and math is not clear in previous classes. They have to be very much honest, laborious and attentive to their study. Quick decisions and time management will play a big role. Of course, if the basic foundation is clear then they can very well grasp and can achieve their goal. </p>

                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="p-4 bg-light rounded-3 shadow-lg border border-danger h-100">
                                <h2 className="text-center text-danger fw-bold mb-3">JEE (Main + Advanced) IIT-JEE COACHING CLASSES </h2>
                                <p>These IIT JEE study materials have been prepared with the aim to cover all syllabus and give the students a good conceptual understanding with the help of this JEE study material With the help of our JEE study material, the students can understand all the formulas, theorems, and definitions with their practical applications and give the solved examples and methods to solve problems in the simplest manner Here, we have provided the complete IIT JEE study material which covers all the basic concepts which are very helpful for cracking the various UG-level engineering entrance tests.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Classroom;