import React from "react";
import Navbar from "src/components/userPage/Navbar";
import Hero from "src/components/userPage/Hero";
import RoomContainer from "src/components/userPage/RoomContainer"; 
import '../../../scss/global.scss' 


const Rooms = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <RoomContainer className="pt80 pb80 cruise-grid-view" />
    </>
  );
};

export default Rooms;
