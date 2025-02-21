import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const QuickEnquiry = () => {
  return (
    <div className="bg-danger text-white py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className="enquiry-bx p-4 bg-white text-dark shadow"
              style={{
                border: "3px solid #dc3545",
                borderRadius: "15px",
              }}
            >
              <div className="head mb-4 text-center">
                <h2 className="title text-danger fw-bold display-4">Quick Enquiry</h2>
                <p className="text-muted">Please fill out the form below.</p>
              </div>
              <form method="post" className="dzForm" action="">
                <input type="hidden" value="Contact" name="dzToDo" />
                <div className="row">
                  {/* Name Field */}
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-text bg-danger text-white rounded-0">
                          <i className="fa fa-user"></i>
                        </span>
                        <input
                          name="dzName"
                          type="text"
                          required
                          className="form-control form-control-danger rounded-0"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Email Field */}
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-text bg-danger text-white rounded-0">
                          <i className="fa fa-envelope"></i>
                        </span>
                        <input
                          name="dzEmail"
                          type="email"
                          className="form-control form-control-danger rounded-0"
                          required
                          placeholder="Your Email Id"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Message Field */}
                  <div className="col-12 mb-3">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-text bg-danger text-white rounded-0">
                          <i className="fa fa-pencil"></i>
                        </span>
                        <textarea
                          name="dzMessage"
                          rows="4"
                          className="form-control form-control-danger rounded-0"
                          required
                          placeholder="Your Message..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  {/* Captcha Placeholder */}
                  <div className="col-12 mb-3">
                    <div className="form-group">
                      <div
                        className="g-recaptcha"
                        data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                      ></div>
                    </div>
                  </div>
                  {/* Submit Button */}
                  <div className="col-12">
                    <button
                      name="submit"
                      type="submit"
                      value="Submit"
                      className="btn btn-danger w-100 rounded-pill"
                    >
                      <i className="fa fa-paper-plane me-2"></i> Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .form-control-danger:focus {
            border-color: #dc3545 !important; /* Red border on focus */
            box-shadow: 0 0 5px rgba(220, 53, 69, 0.75); /* Red glow effect */
            outline: none; /* Remove default browser outline */
          }
        `}
      </style>
    </div>
  );
};

export default QuickEnquiry;


// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";

// const QuickEnquiry = () => {
//   return (
//     <div className="bg-danger text-white py-5">
      
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-12">
//             <div
//               className="enquiry-bx p-4 bg-white text-dark shadow"
//               style={{
//                 border: "3px solid #dc3545",
//                 borderRadius: "15px",
//               }}
//             >
//               <div className="head mb-4 text-center">
//                 <h2 className="title text-danger fw-bold display-4">Quick Enquiry</h2>
//                 <p className="text-muted">Please fill out the form below.</p>
//               </div>
//               <form method="post" className="dzForm" action="">
//                 <input type="hidden" value="Contact" name="dzToDo" />
//                 <div className="row">
//                   {/* Name Field */}
//                   <div className="col-md-6 mb-3">
//                     <div className="form-group">
//                       <div className="input-group">
//                         <span className="input-group-text bg-danger text-white rounded-0">
//                           <i className="fa fa-user"></i>
//                         </span>
//                         <input
//                           name="dzName"
//                           type="text"
//                           required
//                           className="form-control rounded-0"
//                           placeholder="Your Name"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   {/* Email Field */}
//                   <div className="col-md-6 mb-3">
//                     <div className="form-group">
//                       <div className="input-group">
//                         <span className="input-group-text bg-danger text-white rounded-0">
//                           <i className="fa fa-envelope"></i>
//                         </span>
//                         <input
//                           name="dzEmail"
//                           type="email"
//                           className="form-control rounded-0"
//                           required
//                           placeholder="Your Email Id"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   {/* Message Field */}
//                   <div className="col-12 mb-3">
//                     <div className="form-group">
//                       <div className="input-group">
//                         <span className="input-group-text bg-danger text-white rounded-0">
//                           <i className="fa fa-pencil"></i>
//                         </span>
//                         <textarea
//                           name="dzMessage"
//                           rows="4"
//                           className="form-control rounded-0"
//                           required
//                           placeholder="Your Message..."
//                         ></textarea>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Captcha Placeholder */}
//                   <div className="col-12 mb-3">
//                     <div className="form-group">
//                       <div
//                         className="g-recaptcha"
//                         data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
//                       ></div>
//                     </div>
//                   </div>
//                   {/* Submit Button */}
//                   <div className="col-12">
//                     <button
//                       name="submit"
//                       type="submit"
//                       value="Submit"
//                       className="btn btn-danger w-100 rounded-pill"
//                     >
//                       <i className="fa fa-paper-plane me-2"></i> Submit
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuickEnquiry;
