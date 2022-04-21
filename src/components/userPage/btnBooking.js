import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import defaultImg from "../../images/room-1.jpeg";
import {
  CButton,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModal,
  CRow,
  CCol,
  CFormInput,
  CTable,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CModalFooter,
  CForm,
} from "@coreui/react";

import { PropTypes } from "prop-types";

const BtnBookings = () => {
  const [visibleXL, setVisibleXL] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <CButton
        onClick={() => {
          setVisibleXL(!visibleXL);
        }}
      >
        Booking now
      </CButton>
      <CModal size="xl" visible={visibleXL} onClose={() => setVisibleXL(false)}>
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
                <h2>Room Detail</h2>
                <CTable>
                  <CTableBody>
                    <CTableRow>
                      <CTableDataCell style={{ backgroundColor: "#e6f2ff" }}>
                        Room Type
                      </CTableDataCell>
                      <CTableDataCell>Banana</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell style={{ backgroundColor: "#e6f2ff" }}>
                        Capacity
                      </CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell style={{ backgroundColor: "#e6f2ff" }}>
                        Size
                      </CTableDataCell>
                      <CTableDataCell>5sqptr</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell style={{ backgroundColor: "#e6f2ff" }}>
                        Breackfact
                      </CTableDataCell>
                      <CTableDataCell>Included</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell style={{ backgroundColor: "#e6f2ff" }}>
                        Pets
                      </CTableDataCell>
                      <CTableDataCell>Allowed</CTableDataCell>
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
                <p>Number of day: 0</p>
              </CCol>
              <CCol xs>
                <p>Price per day: Rs999</p>
                <p>Total Price to be said: Rs0</p>
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
            </CRow>
            <CRow className="g-3 m-3">
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
            </CRow>
            <CRow className="g-3 m-3">
              <CCol xs>
                <label htmlFor="formGroupExampleInput3" className=" mb-2">
                  CNIC Number
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
                <label htmlFor="formGroupExampleInput4" className=" mb-2">
                  Adress
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput4"
                  placeholder="Your adress"
                />
              </CCol>
            </CRow>
            <CRow className="g-3 m-3">
              <CCol xs>
                <label htmlFor="formGroupExampleInput6" className="mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="formGroupExampleInput6"
                  placeholder="Enter email"
                />
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
  isAuth: PropTypes.bool,
};
export default BtnBookings;
