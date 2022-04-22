import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import defaultImg from "../../images/room-1.jpeg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FetchDataRoom,
  FetchDataTypeRoom,
} from "src/Utils/store/action/roomAction";
import { FetchDataService } from "src/Utils/store/action/serviceAction";

import {
  CButton,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModal,
  CRow,
  CCol,
  CTable,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CModalFooter,
  CForm,
  CFormSelect,
} from "@coreui/react";

import { PropTypes } from "prop-types";

const BtnBookings = (props) => {
  const [visibleXL, setVisibleXL] = useState(false);
  const [visibleXLD, setVisibleXLD] = useState(false);

  const navigate = useNavigate();

  const { name, typeRoom, id, status } = props;

  const dispatch = useDispatch();
  const dataType = useSelector((state) => state.room.typeRoom);

  useEffect(() => {
    dispatch(FetchDataTypeRoom());
  }, []);
  //lấy data type room
  const datatypeRoom = dataType.find((item) => item.id === typeRoom) || {};
  // lấy service
  useEffect(() => {
    dispatch(FetchDataService());
  }, [dispatch]);
  const dataService = useSelector((state) => state.service.services);

  return (
    <>
      {status === 1 ? (
        <>
          <CButton
            className="room-link"
            shape="rounded-pill"
            size="lg"
            color="info"
            variant="outline"
            onClick={() => {
              setVisibleXLD(!visibleXLD);
            }}
          >
            Details
          </CButton>
          <CModal
            size="lg"
            visible={visibleXLD}
            onClose={() => setVisibleXLD(false)}
          >
            <CModalHeader>
              <CModalTitle>Update Book</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CForm>
                <CRow className="g-3 mb-3">
                  <CCol xs>
                    <img
                      src={defaultImg}
                      width="500"
                      height="300"
                      alt="double economy"
                    />
                  </CCol>
                  <CCol xs>
                    <h2>Room {name}</h2>
                    <CTable>
                      <CTableBody>
                        <CTableRow>
                          <CTableDataCell
                            style={{ backgroundColor: "#e6f2ff" }}
                          >
                            Room Type
                          </CTableDataCell>
                          <CTableDataCell>1</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                          <CTableDataCell
                            style={{ backgroundColor: "#e6f2ff" }}
                          >
                            Price
                          </CTableDataCell>
                          <CTableDataCell>{datatypeRoom.price}</CTableDataCell>
                        </CTableRow>

                        <CTableRow>
                          <CTableDataCell
                            style={{ backgroundColor: "#e6f2ff" }}
                          >
                            Status
                          </CTableDataCell>
                          <CTableDataCell>{status}</CTableDataCell>
                        </CTableRow>
                      </CTableBody>
                    </CTable>
                  </CCol>
                </CRow>
                <CRow className="g-3 m-3">
                  <CCol xs>
                    <label htmlFor="from-date" className=" mb-2">
                      From Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="from-date"
                    />
                  </CCol>
                  <CCol xs>
                    <label htmlFor="to-date" className=" mb-2">
                      To Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="from-date"
                    />
                  </CCol>
                </CRow>
                <CRow className="g-3 m-3">
                  <CCol xs>
                    <label htmlFor="formGroupExampleInput" className=" mb-2">
                      No.of Person
                    </label>
                    <input
                      type="text"
                      id="formGroupExampleInput"
                      className="form-control"
                      placeholder="No.of Person"
                    />
                  </CCol>
                  <CCol xs>
                    <label htmlFor="formGroupExampleInput1" className=" mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="formGroupExampleInput1"
                      className="form-control"
                      placeholder="Full name"
                    />
                  </CCol>
                </CRow>

                <CRow className="g-3 m-3">
                  <CCol xs>
                    <label htmlFor="formGroupExampleInput2" className=" mb-2">
                      Number
                    </label>
                    <input
                      type="number"
                      id="formGroupExampleInput2"
                      className="form-control"
                      placeholder="Enter phone number"
                    />
                  </CCol>
                  <CCol xs>
                    <label htmlFor="formGroupExampleInput3" className=" mb-2">
                      ID CARD
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput3"
                      placeholder="0"
                    />
                  </CCol>
                </CRow>
                <CRow className="g-3 m-3">
                  <CCol xs>
                    <label htmlFor="formGroupExampleInput3" className=" mb-2">
                      Service orders
                    </label>
                    <CFormSelect
                      color="success"
                      size="mg"
                      className="mb-3"
                      md={6}
                      aria-label="Large select example"
                      // {...register("roomTypeId", { required: true })}
                      // ontChange={(e) => setTypeRoom(e.target.value)}
                    >
                      <option>Please choose service</option>
                      {dataService.map((item) => {
                        return (
                          <>
                            {" "}
                            <option key={item.id}>{item.name}</option>
                          </>
                        );
                      })}
                    </CFormSelect>
                  </CCol>
                  <CCol xs>
                    <label htmlFor="formGroupExampleInput3" className=" mb-2">
                      Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="formGroupExampleInput3"
                      placeholder="0"
                    />
                  </CCol>
                </CRow>

                <CRow className="g-3 m-3">
                  <CCol xs>
                    <p>Number of day: 0</p>
                  </CCol>
                  <CCol xs>
                    <p>Price per day: {`${datatypeRoom.price} VNĐ `}</p>
                    <p>Total Price to be said: Rs0</p>
                  </CCol>
                </CRow>

                <CModalFooter>
                  <button type="submit" className="btn btn-success mb-2">
                    Confirm Booking
                  </button>
                </CModalFooter>
              </CForm>
            </CModalBody>
          </CModal>
        </>
      ) : (
        <CButton
          shape="rounded-pill"
          size="lg"
          color="danger"
          variant="outline"
          className="room-link"
          onClick={() => {
            setVisibleXL(!visibleXL);
          }}
        >
          Booking
        </CButton>
      )}

      <CModal size="lg" visible={visibleXL} onClose={() => setVisibleXL(false)}>
        <CModalHeader>
          <CModalTitle>Booking</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CRow className="g-3 mb-3">
              <CCol xs>
                <img
                  src={defaultImg}
                  width="500"
                  height="300"
                  alt="double economy"
                />
              </CCol>
              <CCol xs>
                <h2>Room {name}</h2>
                <CTable>
                  <CTableBody>
                    <CTableRow>
                      <CTableDataCell style={{ backgroundColor: "#e6f2ff" }}>
                        Room Type
                      </CTableDataCell>
                      <CTableDataCell>{datatypeRoom.type}</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell style={{ backgroundColor: "#e6f2ff" }}>
                        Price
                      </CTableDataCell>
                      <CTableDataCell>{datatypeRoom.price}</CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableDataCell style={{ backgroundColor: "#e6f2ff" }}>
                        Status
                      </CTableDataCell>
                      <CTableDataCell>{status}</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CCol>
            </CRow>
            <CRow className="g-3 m-3">
              <CCol xs>
                <label htmlFor="from-date" className=" mb-2">
                  From Date
                </label>
                <input type="date" className="form-control" id="from-date" />
              </CCol>
              <CCol xs>
                <label htmlFor="to-date" className=" mb-2">
                  To Date
                </label>
                <input type="date" className="form-control" id="from-date" />
              </CCol>
            </CRow>
            <CRow className="g-3 m-3">
              <CCol xs>
                <label htmlFor="formGroupExampleInput" className=" mb-2">
                  No.of Person
                </label>
                <input
                  type="text"
                  id="formGroupExampleInput"
                  className="form-control"
                  placeholder="No.of Person"
                />
              </CCol>
              <CCol xs>
                <label htmlFor="formGroupExampleInput1" className=" mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="formGroupExampleInput1"
                  className="form-control"
                  placeholder="Full name"
                />
              </CCol>
            </CRow>

            <CRow className="g-3 m-3">
              <CCol xs>
                <label htmlFor="formGroupExampleInput2" className=" mb-2">
                  Number
                </label>
                <input
                  type="number"
                  id="formGroupExampleInput2"
                  className="form-control"
                  placeholder="Enter phone number"
                />
              </CCol>
              <CCol xs>
                <label htmlFor="formGroupExampleInput3" className=" mb-2">
                  ID CARD
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput3"
                  placeholder="0"
                />
              </CCol>
            </CRow>

            <CRow className="g-3 m-3">
              <CCol xs>
                <p>Number of day: 0</p>
              </CCol>
              <CCol xs>
                <p>Price per day: {`${datatypeRoom.price} VNĐ `}</p>
                <p>Total Price to be said: Rs0</p>
              </CCol>
            </CRow>

            <CModalFooter>
              <button type="submit" className="btn btn-success mb-2">
                Confirm Booking
              </button>
            </CModalFooter>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  );
};
BtnBookings.propTypes = {
  id: PropTypes.node,
  name: PropTypes.node,
  typeRoom: PropTypes.node,
  status: PropTypes.node,
};
// connect(
//   ({ name, roomTypeId }) => ({
//     name,
//     roomTypeId,
//   }),
//   AddDataRoom
// )(PopupAdd);

export default BtnBookings;
