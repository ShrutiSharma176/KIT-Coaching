import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const testimonials = [
  {
    imgSrc: "/images/testimonial-1.jpg",
    text: "My younger son returns very happy with all activities happening at your school every day. I am glad that my son is being taught in your school. You have the most qualified teachers.",
    name: "Mr. Jone Deo",
    title: "KVS - PRT 2024",
  },
  {
    imgSrc: "/images/testimonial-3.jpg",
    text: "The teaching methods are exceptional, and the care taken by the teachers has given my daughter great confidence.",
    name: "Ms. Jane Smith",
    title: "Parent of Class 10 Student",
  },
];

const teachers = [
  {
    imgSrc: "/images/tst-image1.jpg",
    name: "Penelope",
    qualification: "MBA",
    role: "Teacher",
    details: "Penelope is an experienced teacher with 10+ years in the education field.",
  },
  {
    imgSrc: "/images/tst-image3.jpg",
    name: "Alexa",
    qualification: "M.Com",
    role: "Teacher",
    details: "Alexa specializes in finance and economics with a focus on student engagement.",
  },
  {
    imgSrc: "/images/tst-image4.jpg",
    name: "Harry",
    qualification: "BBA BCA",
    role: "Teacher",
    details: "Harry is a tech-savvy educator with expertise in modern teaching methods.",
  },
];

const Testimonial = () => {
  return (
    <div className="container py-5">
      <style>
        {`
          /* Carousel Next/Prev button visibility */
          .carousel-control-prev,
          .carousel-control-next {
            visibility: hidden;
            opacity: 0;
            transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
          }
          #testimonialCarousel:hover .carousel-control-prev,
          #testimonialCarousel:hover .carousel-control-next {
            visibility: visible;
            opacity: 1;
          }
          /* Carousel item transition */
          .carousel-item {
            transition: all 0.6s ease-in-out;
          }
          /* Testimonial image styling */
          .testimonial-img {
            border: 4px solid #dc3545;
            border-radius: 50%;
          }
          /* Text styling */
          .title {
            color: #dc3545;
            font-weight: 600;
            font-size: 1.2rem;
          }
          .text-muted {
            font-size: 0.85rem;
          }
          /* Teacher box styling */
          .teacher-box {
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            border: 1px solid #dc3545; /* Bootstrap danger color */
            border-radius: 15px;
          }
          .teacher-box:hover {
            transform: translateY(-5px);
          }
          .teacher-details {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color:  rgba(220, 53, 69, 0.85);
            color: white;
            padding: 1rem;
            display: none;
            justify-content: center;
            align-items: center;
            text-align: center;
            border-radius: 5px;
            font-size: 0.9rem;
          }
          .teacher-box:hover .teacher-details {
            display: flex;
          }
        `}
      </style>
      <div className="row">
        {/* Left Column: Testimonial Carousel */}
        <div className="col-lg-6 mb-4">
          <h2 className="mb-4 text-danger" style={{ fontWeight: "bold" }}>What Parents Say</h2>
          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <div className="carousel-inner">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="d-flex bg-white p-4 shadow-sm rounded align-items-center">
                    <div className="me-4">
                      <img
                        src={testimonial.imgSrc}
                        alt="testimonial"
                        className="testimonial-img"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div>
                      <p className="text-secondary mb-2">{testimonial.text}</p>
                      <h5 className="text-danger mb-1">{testimonial.name}</h5>
                      <p className="text-muted">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Right Column: Meet our Teachers */}
        <div className="col-lg-6 d-flex flex-wrap align-items-stretch">
          <h2 className="w-100 mb-4 text-danger" style={{ fontWeight: "bold" }}>Meet our Teachers</h2>
          <div className="row w-100">
            {teachers.map((teacher, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="team-box border rounded p-3 text-center bg-white shadow-sm h-100 teacher-box">
                  <div className="media">
                    <img
                      src={teacher.imgSrc}
                      alt={teacher.name}
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="mt-3">
                    <h5 className="title mb-1">{teacher.name}</h5>
                    <span className="d-block text-muted">
                      {teacher.qualification}
                    </span>
                    <p className="text-secondary small">{teacher.role}</p>
                  </div>
                  <div className="teacher-details">
                    <p>{teacher.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;



// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const testimonials = [
//   {
//     imgSrc: "/images/testimonial-1.jpg",
//     text: "My younger son returns very happy with all activities happening at your school every day. I am glad that my son is being taught in your school. You have the most qualified teachers.",
//     name: "Mr. Jone Deo",
//     title: "KVS - PRT 2024",
//   },
//   {
//     imgSrc: "/images/testimonial-3.jpg",
//     text: "The teaching methods are exceptional, and the care taken by the teachers has given my daughter great confidence.",
//     name: "Ms. Jane Smith",
//     title: "Parent of Class 10 Student",
//   },
// ];

// const teachers = [
//   {
//     imgSrc: "/images/tst-image1.jpg",
//     name: "Penelope",
//     qualification: "MBA",
//     role: "Teacher",
//     details: "Penelope is an experienced teacher with 10+ years in the education field.",
//   },
//   {
//     imgSrc: "/images/tst-image3.jpg",
//     name: "Alexa",
//     qualification: "M.Com",
//     role: "Teacher",
//     details: "Alexa specializes in finance and economics with a focus on student engagement.",
//   },
//   {
//     imgSrc: "/images/tst-image4.jpg",
//     name: "Harry",
//     qualification: "BBA BCA",
//     role: "Teacher",
//     details: "Harry is a tech-savvy educator with expertise in modern teaching methods.",
//   },
// ];

// const Testimonial = () => {
//   return (
//     <div className="container py-5">
//       <style>
//         {`
//           .teacher-box {
//             position: relative;
//             overflow: hidden;
//             transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
//             border: 1px solid #dc3545; /* Bootstrap danger color */
//             border-radius: 15px;
//           }
//           .teacher-box:hover {
//             transform: translateY(-8px);
//             box-shadow: 0 4px 20px rgba(220, 53, 69, 0.1); /* Soft danger shadow */
//           }
//           .teacher-details {
//             position: absolute;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             background-color: rgba(220, 53, 69, 0.85); /* Slight transparency */
//             color: white;
//             padding: 1rem;
//             display: none;
//             justify-content: center;
//             align-items: center;
//             text-align: center;
//             border-radius: 15px;
//             font-size: 0.9rem;
//           }
//           .teacher-box:hover .teacher-details {
//             display: flex;
//           }
//           .carousel-item {
//             transition: all 0.6s ease-in-out;
//           }
//           .testimonial-img {
//             border: 4px solid #dc3545;
//             border-radius: 50%;
//           }
//           .title {
//             color: #dc3545;
//             font-weight: 600;
//             font-size: 1.2rem;
//           }
//           .text-muted {
//             font-size: 0.85rem;
//           }
//         `}
//       </style>
//       <div className="row">
//         <div className="col-lg-6 mb-4">
//           <h2 className="mb-4 text-danger">What Parents Say</h2>
//           <div
//             id="testimonialCarousel"
//             className="carousel slide"
//             data-bs-ride="carousel"
//             data-bs-interval="5000"
//           >
//             <div className="carousel-inner">
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className={`carousel-item ${index === 0 ? "active" : ""}`}
//                 >
//                   <div className="d-flex bg-white p-4 shadow-sm rounded align-items-center">
//                     <div className="me-4">
//                       <img
//                         src={testimonial.imgSrc}
//                         alt="testimonial"
//                         className="testimonial-img"
//                         style={{
//                           width: "100px",
//                           height: "100px",
//                           objectFit: "cover",
//                         }}
//                       />
//                     </div>
//                     <div>
//                       <p className="text-secondary mb-2">{testimonial.text}</p>
//                       <h5 className="text-danger mb-1">{testimonial.name}</h5>
//                       <p className="text-muted">{testimonial.title}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button
//               className="carousel-control-prev"
//               type="button"
//               data-bs-target="#testimonialCarousel"
//               data-bs-slide="prev"
//             >
//               <span
//                 className="carousel-control-prev-icon"
//                 aria-hidden="true"
//               ></span>
//               <span className="visually-hidden">Previous</span>
//             </button>
//             <button
//               className="carousel-control-next"
//               type="button"
//               data-bs-target="#testimonialCarousel"
//               data-bs-slide="next"
//             >
//               <span
//                 className="carousel-control-next-icon"
//                 aria-hidden="true"
//               ></span>
//               <span className="visually-hidden">Next</span>
//             </button>
//           </div>
//         </div>

//         <div className="col-lg-6 d-flex flex-wrap align-items-stretch">
//           <h2 className="w-100 mb-4 text-danger">Meet our Teachers</h2>
//           <div className="row w-100">
//             {teachers.map((teacher, index) => (
//               <div key={index} className="col-md-4 mb-3">
//                 <div className="team-box teacher-box bg-light text-center shadow-sm p-3 h-100">
//                   <div className="media">
//                     <img
//                       src={teacher.imgSrc}
//                       alt={teacher.name}
//                       className="img-fluid"
//                       style={{
//                         width: "100%",
//                         height: "150px",
//                         objectFit: "cover",
//                         borderRadius: "15px",
//                       }}
//                     />
//                   </div>
//                   <div className="mt-3">
//                     <h5 className="title mb-1">{teacher.name}</h5>
//                     <span className="d-block text-muted">{teacher.qualification}</span>
//                     <p className="text-secondary small">{teacher.role}</p>
//                   </div>
//                   <div className="teacher-details">
//                     <p>{teacher.details}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;


// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const testimonials = [
//   {
//     imgSrc: "/images/testimonial-1.jpg",
//     text: "My younger son returns very happy with all activities happening at your school every day. I am glad that my son is being taught in your school. You have the most qualified teachers.",
//     name: "Mr. Jone Deo",
//     title: "KVS - PRT 2024",
//   },
//   {
//     imgSrc: "/images/testimonial-3.jpg",
//     text: "My younger son returns very happy with all activities happening at your school every day. I am glad that my son is being taught in your school. You have the most qualified teachers.",
//     name: "Mr. Jone Deo",
//     title: "KVS - PRT 2024",
//   },
// ];

// const teachers = [
//   {
//     imgSrc: "/images/tst-image1.jpg",
//     name: "Penelope",
//     qualification: "MBA",
//     role: "Teacher",
//     details: "Penelope is an experienced teacher with 10+ years in the education field.",
//   },
//   {
//     imgSrc: "/images/tst-image3.jpg",
//     name: "Alexa",
//     qualification: "M.Com",
//     role: "Teacher",
//     details: "Alexa specializes in finance and economics with a focus on student engagement.",
//   },
//   {
//     imgSrc: "/images/tst-image4.jpg",
//     name: "Harry",
//     qualification: "BBA BCA",
//     role: "Teacher",
//     details: "Harry is a tech-savvy educator with expertise in modern teaching methods.",
//   },
// ];

// const Testimonial = () => {
//   return (
//     <div className="container py-5">
//       <style>
//         {`
//           .teacher-box {
//             position: relative;
//             overflow: hidden;
//             transition: transform 0.3s ease-in-out;
//           }
//           .teacher-box:hover {
//             transform: translateY(-5px);
//           }
//           .teacher-details {
//             position: absolute;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             background-color: rgba(0, 0, 0, 0.7);
//             color: white;
//             padding: 1rem;
//             display: none;
//             justify-content: center;
//             align-items: center;
//             text-align: center;
//             border-radius: 10px;
//           }
//           .teacher-box:hover .teacher-details {
//             display: flex;
//           }
//         `}
//       </style>
//       <div className="row">

//         <div className="col-lg-6">
//           <h2 className="mb-4">What Parents Say</h2>
//           <div
//             id="testimonialCarousel"
//             className="carousel slide"
//             data-bs-ride="carousel"
//             data-bs-interval="5000"
//           >
//             <div className="carousel-inner">
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className={`carousel-item ${index === 0 ? "active" : ""}`}
//                 >
//                   <div className="d-flex bg-white p-4 shadow rounded align-items-center">
//                     <div className="me-4">
//                       <img
//                         src={testimonial.imgSrc}
//                         alt="testimonial"
//                         style={{
//                           width: "100px",
//                           height: "100px",
//                           objectFit: "cover",
//                           borderRadius: "10px",
//                         }}
//                       />
//                     </div>
//                     <div>
//                       <p className="text-secondary mb-2">{testimonial.text}</p>
//                       <h5 className="text-danger mb-1">{testimonial.name}</h5>
//                       <p className="text-muted">{testimonial.title}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button
//               className="carousel-control-prev"
//               type="button"
//               data-bs-target="#testimonialCarousel"
//               data-bs-slide="prev"
//             >
//               <span
//                 className="carousel-control-prev-icon"
//                 aria-hidden="true"
//               ></span>
//               <span className="visually-hidden">Previous</span>
//             </button>
//             <button
//               className="carousel-control-next"
//               type="button"
//               data-bs-target="#testimonialCarousel"
//               data-bs-slide="next"
//             >
//               <span
//                 className="carousel-control-next-icon"
//                 aria-hidden="true"
//               ></span>
//               <span className="visually-hidden">Next</span>
//             </button>
//           </div>
//         </div>

        
//         <div className="col-lg-6 d-flex flex-wrap align-items-stretch">
//           <h2 className="w-100 mb-4">Meet our Teachers</h2>
//           <div className="row w-100">
//             {teachers.map((teacher, index) => (
//               <div key={index} className="col-md-4 mb-3">
//                 <div className="team-box border rounded p-3 text-center bg-white shadow-sm h-100 teacher-box">
//                   <div className="media">
//                     <img
//                       src={teacher.imgSrc}
//                       alt={teacher.name}
//                       className="img-fluid"
//                       style={{
//                         width: "100%",
//                         height: "150px",
//                         objectFit: "cover",
//                         borderRadius: "10px",
//                       }}
//                     />
//                   </div>
//                   <div className="mt-3">
//                     <h5 className="title mb-1">{teacher.name}</h5>
//                     <span className="d-block text-muted">{teacher.qualification}</span>
//                     <p className="text-secondary small">{teacher.role}</p>
//                   </div>
//                   <div className="teacher-details">
//                     <p>{teacher.details}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;
