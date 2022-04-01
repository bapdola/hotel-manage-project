import React from "react";
import Navbar from "src/components/userPage/Navbar";
import Hero from "src/components/userPage/Hero";
import RoomContainer from "src/components/userPage/RoomContainer";  


const Rooms = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <RoomContainer />
    </>
  );
};

export default Rooms;
