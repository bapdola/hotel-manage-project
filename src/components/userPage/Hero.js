import React from "react";
import Banner from "./Banner";

const Hero = () => {
  return (
    <header className="defaultHero">
      <Banner />
    </header>
  );
};

export default Hero;

Hero.defaultProps = {
  hero: "defaultHero",
};
