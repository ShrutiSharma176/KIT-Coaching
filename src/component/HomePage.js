import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ActionSection from "./ActionSection";
import Testimonial from "./Testimonial";
import EnquiryFrom from "./EnquiryFrom";
import Slider from "./Slider";
import CardsSection from "./CardsSection";
import AboutUsSection from "./AboutUsSection";

function HomePage() {
    return (
        <>
            <Slider/>
            <CardsSection/>
            <AboutUsSection/>
            <ActionSection/>
            <Testimonial/>
            <EnquiryFrom/>
        </>
    );
}

export default HomePage;
