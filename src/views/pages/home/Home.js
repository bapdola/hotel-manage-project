import React from "react";
import Hero from "src/components/userPage/Hero";
import Services from "src/components/userPage/Services";
import FeaturedRooms from "src/components/userPage/FeaturedRooms";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
