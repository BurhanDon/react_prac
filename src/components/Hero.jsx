import React from "react";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh", position: "relative", overflow: "hidden" }}
    >
      <HeroImage />
      <HeroContent />
    </div>
  );
};

export default Hero;
