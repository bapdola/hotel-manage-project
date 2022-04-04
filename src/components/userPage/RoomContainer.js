import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomList from "./RoomList";
import RoomsList from "./RoomList";
import Title from "./Title";

function RoomContainer() {
  return (
          <>
            <RoomsFilter />
            <section className="filter-container">
           <Title title="search rooms" />
      
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label >room type</label>
          <select
            name="type"
            id="type"
            
            className="form-control"
          >
          </select>
        </div>
     
        <div className="form-group">
          <label >Guests</label>
          <select
            name="capacity"
            id="capacity"
            className="form-control"
          >
            
          </select>
        </div>
        {/* end of guests */}
        {/* room price */}
        <div className="form-group">
          <label >room price </label>
          <input
            type="range"
            name="price"
            id="price"
            className="form-control"
          />
        </div>
        {/* end of room price*/}
        {/* size */}
        <div className="form-group">
          <label >room size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              className="size-input"
            />
          </div>
        </div>
        {/* end of select type */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
            />
            <label >breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
            />
            <label >pets</label>
          </div>
        </div>
        {/* end of extras type */}
      </form>
      <>
      
      </>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12-">
          <div className="Filter-left">
        <form action="#" >
          <div className="mb-left">
            <label  className="form-label">Dates</label>
            <div className="form-group">
              <input className="form-control hasDatepicker" type="text" id="datepicker"  placeholder="Choose your dates"/>
            </div>
          </div>
          <div className="mb-left">
            <label  className="form-label">Guests</label>
            <select className="custom-select select-big ">
              <option selected="">Guests</option>
              <option value="guests_0">01 </option>
              <option value="guests_1">02 </option>
            </select>
          </div>
          <div className="mb-left">
            <label  className="form-label">Home type</label>
            <select className="custom-select select-big ">
              <option value="type_0">Entire place </option>
              <option value="type_1">Private room </option>
              <option value="type_2">Shared room </option>
            </select>
          </div>
          <div className="mb-left">
            <label className="form-label">Price range</label>
            <div className="range-slider">
              <input type="range" value="150" min="0" max="500" range="true"/>
              <span className="range-value">150</span> </div>
          </div>
          <div className="mb-left">
            <label className="form-label">Host and booking</label>
            <ul className="list-inline mb-0 mt-1">
              <li className="list-inline-item">
                <div className="custom-control custom-switch">
                  <input id="instantBook" type="checkbox" className="custom-control-input"/>
                  <label  className="custom-control-label"> <span className="text-sm">Instant book</span></label>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="custom-control custom-switch">
                  <input id="superhost" type="checkbox" className="custom-control-input"/>
                  <label  className="custom-control-label"> <span className="text-sm">Superhost</span></label>
                </div>
              </li>
            </ul>
          </div>
          <div className="pb-left">
            <div id="moreFilters" className="collapse show">
              <div className="filter-block">
                <h6 className="mb-3">Location</h6>
                <div className="form-group">
                  <label  className="form-label">Neighbourhood</label>
                  <select className="custom-select select-big mb-3">
                    <option value="neighbourhood_0">Battery Park City </option>
                    <option value="neighbourhood_1">Bowery </option>
                  </select>
                </div>
                <div className="form-group mb-0">
                  <label className="form-label">Neighbourhood Tag</label>
                  <ul className="list-inline mt-xl-1 mb-0">
                    <li className="list-inline-item">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" id="type_0" name="type[]" className="custom-control-input"/>
                        <label className="custom-control-label">Hipster </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="filter-block">
                <h6 className="mb-3">Rooms and beds</h6>
                <div className="form-group ">
                  <label className="form-label">Beds</label>
                  <div className="d-flex align-items-center"> <span className="input-number-decrement">–</span>
                    <input className="input-number" type="text" value="1" min="0" max="10"/>
                    <span className="input-number-increment">+</span> </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Bedrooms</label>
                  <div className="d-flex align-items-center"> <span className="input-number-decrement"></span>
                    <input className="input-number" type="text" value="1" min="0" max="10"/>
                    <span className="input-number-increment">+</span> </div>
                </div>
                <div className="form-group mb-0">
                  <label className="form-label">Bathrooms</label>
                  <div className="d-flex align-items-center"> <span className="input-number-decrement">–</span>
                    <input className="input-number" type="text" value="1" min="0" max="10"/>
                    <span className="input-number-increment">+</span> </div>
                </div>
              </div>
              <div className="filter-block">
                <h6 className="mb-3">Trip type</h6>
                <div className="form-group mb-0">
                  <div className="custom-control custom-switch">
                    <input id="forfamilies" type="checkbox" name="forfamilies" aria-describedby="forfamiliesHelp" className="custom-control-input"/>
                    <label className="custom-control-label"> <span className="text-sm">For Families</span></label>
                  </div>
                </div>
                <div className="form-group mb-0">
                  <div className="custom-control custom-switch">
                    <input id="forwork" type="checkbox" name="forwork" aria-describedby="forworkHelp" className="custom-control-input"/>
                    <label  className="custom-control-label"> <span className="text-sm">For work</span></label>
                  </div>
                </div>
              </div>
              <div className="filter-block">
                <h6 className="mb-3">Amenities</h6>
                <ul className="list-unstyled mb-0">
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" id="amenities_0" name="amenities[]" className="custom-control-input"/>
                      <label  className="custom-control-label">Kitchen </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" id="amenities_1" name="amenities[]" className="custom-control-input"/>
                      <label className="custom-control-label">Shampoo </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="filter-block">
                <h6 className="mb-3">Facilities</h6>
                <ul className="list-unstyled mb-0">
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" id="facilities_0" name="facilities[]" className="custom-control-input"/>
                      <label className="custom-control-label">Free parking on premises </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" id="facilities_1" name="facilities[]" className="custom-control-input"/>
                      <label className="custom-control-label">Gym </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" id="facilities_2" name="facilities[]" className="custom-control-input"/>
                      <label className="custom-control-label">Hot tub </label>
                    </div>
                  </li>
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" id="facilities_3" name="facilities[]" className="custom-control-input"/>
                      <label  className="custom-control-label">Pool </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-left">
              <button type="submit" className="btn btn-primary btn-grad FilterBtn"> <i className="fas fa-filter mr-1"></i>Filter </button>
            </div>
          </div>
        </form>
        </div> 
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="row">
              <RoomList/>
            </div>
          </div>
        </div>
       
      </div>
    </section>
          </>
  );
}

export default RoomContainer;

