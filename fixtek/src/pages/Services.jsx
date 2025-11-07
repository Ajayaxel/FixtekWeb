import React from "react";
import HeroSection from "../Components/Services/HeroSection";
import ServiceList from "../Components/Services/ServiceList";
import Footersection from "../Components/common/Footersection";

function Services() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <HeroSection />
      <ServiceList />
      <Footersection />
    </div>
  );
}

export default Services;
