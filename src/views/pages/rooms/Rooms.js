import React from "react";
import Navbar from "src/components/userPage/Navbar";
import Hero from "src/components/userPage/Hero";
import RoomContainer from "src/components/userPage/RoomContainer";
import Banner from "src/components/userPage/Banner";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};

export default Rooms;
