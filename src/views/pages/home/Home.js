import React from "react";
import Hero from "src/components/userPage/Hero";
import Services from "src/components/userPage/Services";
import FeaturedRooms from "src/components/userPage/FeaturedRooms";
import Navbar from "src/components/userPage/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
