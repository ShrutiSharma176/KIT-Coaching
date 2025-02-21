import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faLightbulb, faBookOpen, faUserTie } from '@fortawesome/free-solid-svg-icons';

function CardsSection() {
  const courses = [
    {
      icon: faGraduationCap,
      color: "text-primary",
      title: "Intelligent Test System",
      description: "An Aptitude test is conducted to evaluate knowledge of the students at each level which is further helpful to focus the weak area.",
    },
    {
      icon: faLightbulb,
      color: "text-success",
      title: "Concept Building",
      description: "Small batches, focus on each student, syllabus design according to the IIT-JEE pattern.",
    },
    {
      icon: faBookOpen,
      color: "text-danger",
      title: "Study Material",
      description: "Relevant Notes and study material provided to students designed on the basis of the latest exam pattern.",
    },
    {
      icon: faUserTie,
      color: "text-info",
      title: "Ideal Administration",
      description: "Team of qualified and trained faculty with years of experience in teaching for JEE Mains and advance.",
    },
  ];

  return (<>
    <div className="content-block py-5">
      <div className="section-full bg-light content-inner-2 about-bx">
        <div className="container">
          <div className="section-head text-center mb-4">
            <h1 className="title text-danger" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Admission Open</h1>
          </div>
          <div className="row g-4">
            {courses.map((course, index) => (
              <div key={index} className="col-md-3">
                <div className="courses-bx-2 card-hover text-center p-3 border rounded bg-white h-100 d-flex flex-column">
                  <FontAwesomeIcon icon={course.icon} size="6x" className={`${course.color} mb-3`} />
                  <div className="info">
                    <h2 className="title h5">
                      <a href="course-details" className="text-decoration-none">{course.title}</a>
                    </h2>
                    <p className="mb-4">{course.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <style>
      {`
        .card-hover {
            transition: all 0.3s ease;
        }
  
        .card-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
      `}
    </style>
  </>);
}

export default CardsSection;