import React from "react";
import Navbar from "src/components/userPage/Navbar";
import Hero from "src/components/userPage/Hero";
import Banner from "src/components/userPage/Banner";
import Services from "src/components/userPage/Services";
import FeaturedRooms from "src/components/userPage/FeaturedRooms";

import { HashRouter, Route, Routes } from "react-router-dom";

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
