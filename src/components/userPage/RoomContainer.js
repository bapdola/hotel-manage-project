import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";

function RoomContainer() {
  return (
          <>
            <RoomsFilter />
            <RoomsList />
          </>
  );
}

export default RoomContainer;

