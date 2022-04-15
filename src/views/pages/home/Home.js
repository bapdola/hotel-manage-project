import React from "react";
import Hero from "src/components/userPage/Hero";
import Services from "src/components/userPage/Services";
import FeaturedRooms from "src/components/userPage/FeaturedRooms";
import Banner from "src/components/userPage/Banner";
import { Link } from "react-router-dom";
import Navbar from "src/components/userPage/Navbar";



const Home = () => {
  return (
    <>
    <Navbar/>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
