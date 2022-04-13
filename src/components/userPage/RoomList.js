import React from 'react'
import Room from './Room'

export default function RoomList() {
  return (
    <>
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    <section className="roomslist">
      <div className="roomslist-center">
      <Room  />
      <Room  />
      <Room  />
      <Room  />
      <Room  />
      <Room  />

      </div>
    </section>
  
    </>

);
}
