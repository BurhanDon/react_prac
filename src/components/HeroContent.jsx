import React from "react";
import { Button } from "react-bootstrap";

const HeroContent = () => {
  return (
    <div className="text-center text-white">
      <h1 className="display-4">Welcome to Our Rover Pakistan!</h1>
      <p className="lead">
        Your Next journey start with us... Waiting for what?
        <a
          className="linkkk"
          aria-current=""
          href="https://www.roveradventureclub.com/"
          target="_"
        > 
          See our Services.
        </a>
      </p>
      <Button
        variant="primary"
        size="lg"
        target="_"
        href="https://www.roveradventureclub.com/"
      >
        Get Started
      </Button>
    </div>
  );
};

export default HeroContent;
