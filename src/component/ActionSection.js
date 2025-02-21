import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const MarqueeStyles = () => (
    <style>
      {`
        @keyframes scroll-up {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
  
        .marquee-container {
          height: 150px; /* You can adjust the height as needed */
          overflow: hidden;
          position: relative;
        }
  
        .marquee-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
          animation: scroll-up 10s linear infinite;
          position: absolute;
        }
  
        .list-item {
          margin-bottom: 10px;
          font-size: 16px;
        }
  
        .link-style {
          text-decoration: none;
          color: #343a40;
          display: flex;
          align-items: center;
        }
  
        .icon-style {
          color: rgb(25 135 84);
          margin-right: 10px;
        }
      `}
    </style>
  );
  
  const NotificationSection = () => {
    const notifications = [
      "RESULT OF SSC CGL 2017 (TIER-3)",
      "SSC CGL 2018 PRE Application Status",
      "SSC CHSL 2017 Result Declared",
      "RESULT OF SSC CGL 2017 (TIER-3)",
      "SSC CGL 2018 PRE Application Status",
      "SSC CHSL 2017 Result Declared",
      "SSC CHSL 2017 Result Declared",
      "RESULT OF SSC CGL 2017 (TIER-3)",
      "SSC CGL 2018 PRE Application Status",
      "SSC CHSL 2017 Result Declared",
    ];
  
    return (
      <>
        <MarqueeStyles />
        <div className="col-lg-4 col-md-12">
          <div
            style={actionBoxStyle}>
            <h4
              style={sectionTitleStyle}>
              Notification
            </h4>
            <div className="marquee-container">
              <ul className="marquee-list">
                {notifications.map((item, index) => (
                  <li key={index} className="list-item">
                    <a href="#" className="link-style">
                      <FontAwesomeIcon icon={faBell} className="icon-style" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };

  const EventsSection = () => {
    const events = [
      'New SSC-CGL/10+2 batch starts from "24th of June at 7:00 AM".',
      'New SSC-CGL MAINS batch starts from "26th of June at 10:00 AM".',
      'New SSC-CGL/10+2 and Bank-PO/Clerk batch starts from "3rd of July".',
    ];
  
    return (
      <div className="col-lg-4 col-md-12 d-flex">
        <div style={actionBoxStyle} className="w-100 d-flex flex-column">
          <h4 style={sectionTitleStyle}>Events</h4>
          <ul style={listStyle} className="flex-grow-1">
            {events.map((event, index) => (
              <li key={index} style={listItemStyle}>
                <a href="#" style={linkStyle}>
                  <FontAwesomeIcon icon={faCalendarAlt} style={iconStyle} />
                  {event}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  const BlogSection = () => {
    const blogs = [
      { date: "10", month: "Jan", title: "Preparation Strategy for SSC-CGL" },
      { date: "21", month: "Aug", title: "New Pattern of SSC-CGL brings transparency" },
      { date: "26", month: "Mar", title: "How to manage time for SSC examination" }
    ];
  
    return (
      <div className="col-lg-4 col-md-12 d-flex">
        <div style={actionBoxStyle} className="w-100 d-flex flex-column">
          <h4 style={sectionTitleStyle}>Blog / Article</h4>
          <ul style={listStyle} className="flex-grow-1">
            {blogs.map((blog, index) => (
              <li key={index} style={listItemStyle}>
                <div style={dateBoxStyle}>
                  <span style={dateStyle}>{blog.date}</span>
                  <span style={monthStyle}>{blog.month}</span>
                </div>
                <a href="#" style={linkStyle}>{blog.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  const ActionSection = () => {
    return (
      <div style={actionSectionStyle}>
        <div className="container">
          <div className="row">
            <NotificationSection />
            <EventsSection />
            <BlogSection />
          </div>
        </div>
      </div>
    );
  };
  
// Styles
const actionBoxStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    marginBottom: "20px",
    height: "100%", // Ensure equal height
  };
  
  const sectionTitleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#ffffff", // White text color
    marginBottom: "20px",
    padding: "10px 15px", // Adds padding to the heading
    backgroundColor: "#dc3545", // Danger red background
    borderRadius: "5px",
  };
  
  const listItemStyle = {
    marginBottom: "10px",
  };
  
  const linkStyle = {
    textDecoration: "none",
    color: "#343a40",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
  };
  
  const iconStyle = {
    color: "rgb(25 135 84)",
    marginRight: "10px",
  };

const actionSectionStyle = {
  backgroundColor: "#f8f9fa",
  padding: "40px 0",
  marginTop: "50px",
};

const listStyle = {
  listStyleType: "none",
  padding: 0,
  margin: 0,
};

const dateBoxStyle = {
  backgroundColor: "#f1f1f1",
  padding: "5px 10px",
  borderRadius: "5px",
  marginRight: "10px",
  display: "inline-block",
  textAlign: "center",
};

const dateStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "rgb(25 135 84)",
};

const monthStyle = {
  fontSize: "12px",
  color: "#6c757d",
};

export default ActionSection;
