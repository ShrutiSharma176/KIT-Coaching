import React from "react";

function Slider() {
  return (<>
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/slide2.jpg" className="d-block w-100" alt="Slide 1" />
          <div className="carousel-caption d-md-block">
            <h2 className="slider-title">Ask, Learn & Lead It</h2>
            <p>With Better Score, Better Career & Ultimately by Building Better India with the Power of Knowledge</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/images/slide1.jpg" className="d-block w-100" alt="Slide 2" />
          <div className="carousel-caption d-md-block">
            <h2 className="slider-title">Start Investing in You</h2>
            <p>With over 1200 courses in 18 subjects, you're guaranteed to find something that's right for you.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  </>)
}

export default Slider;