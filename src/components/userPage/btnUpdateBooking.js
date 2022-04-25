import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import defaultImg from "../../images/room-1.jpeg";
import { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { useForm } from "react-hook-form";
import { AddDataBookRoom ,UpdateDataBookRoom } from "src/Utils/store/action/bookroomAction";
import { FetchDataTypeRoom } from "src/Utils/store/action/roomAction";
import { FetchDataService } from "src/Utils/store/action/serviceAction";

import {
  CButton,
  CFormInput,
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

const BtnUpdate = (props) => {
  const [visibleXL, setVisibleXL] = useState(false);
  const [visibleXLD, setVisibleXLD] = useState(false);

  const { name, typeRoom, id, status } = props;
  
  const [customerName, setcustomerName] = useState("");
  const [customerIdCard, setcustomerIdCard] = useState("");
  const [roomId, setroomId] = useState(id);
  const [toDate, settoDate] = useState("");
  const [fromDate, setfromDate] = useState("");

  const navigate = useNavigate();



  const dispatch = useDispatch();
  const dataType = useSelector((state) => state.room.typeRoom) || [];
  const dataService = useSelector((state) => state.service.services) || [];

  // useEffect(() => {
  //   dispatch(FetchDataTypeRoom());
  // }, []);
  //lấy data type room
  const datatypeRoom = dataType.find((item) => item.id === typeRoom) || {};
  // lấy service
  useEffect(() => {
    dispatch(FetchDataService());
  }, []);

  // add
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    mode: "onChange",
  });

  const handleOnSubmit = (data, e) => {
    e.preventDefault();
    if (data) {
      dispatch(AddDataBookRoom(data));
    }
    console.log(data,"data");
    setVisibleXL(false);
  };


  return (
   
   
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
          <CModal visible={visibleXLD} onClose={() => setVisibleXLD(false)}>
            <CModalHeader>
              <CModalTitle>Update Book</CModalTitle>
            </CModalHeader>
            <CModalBody>
          <CForm  >
            <CRow className="g-3 mb-3">
              <CCol xs>
                <img
                  src={defaultImg}
                  width="470"
                  height="300"
                  alt="double economy"
                />
              </CCol>
              <CCol xs>
                <h2
                // value={roomId}
                onChange={(e) => setroomId(e.target.value)}
                >{name}</h2>
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
                      {status === 1 ? (
                        <CTableDataCell color="secondary">
                          {" "}
                          Active
                        </CTableDataCell>
                      ) : (
                        <CTableDataCell> Empty </CTableDataCell>
                      )}
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CCol>
            </CRow>
            <CRow className="g-3 m-3">
              
              <CCol xs>
                <label htmlFor="from-date" className=" mb-2">
                  Check in
                </label>
                <CFormInput
                  type="date"
                  id="validationTooltip04"
                  placeholder="fromDate"
                  // value={fromDate}
                  {...register("fromDate", { required: true })}
                  onChange={(e) => setfromDate(e.target.value)}
                />
                {errors.customerIdCard?.type === "required" && (
                  <p className="text-danger mt-2">Check in is required</p>
                )}
              </CCol>
              <CCol xs>
                <label htmlFor="to-date" className=" mb-2">
                  Check out
                </label>
                <CFormInput
                  type="date"
                  id="validationTooltip04"
                  placeholder="toDate"
                  // value={toDate}
                  {...register("toDate", { required: true })}
                  onChange={(e) => settoDate(e.target.value)}
                />
                {errors.customerIdCard?.type === "required" && (
                  <p className="text-danger mt-2">Check out is required</p>
                )}
              </CCol>
            </CRow>
            <CRow className="g-3 m-3">
              <CCol xs>
                <label htmlFor="formGroupExampleInput1" className=" mb-2">
                  Full name
                </label>
                <CFormInput
                  type="text"
                  id="validationTooltip01"
                  placeholder="Full name "
                  value={customerName}
                  {...register("customerName", {
                    required: true,
                    pattern: /^[A-Za-z0-9 ]+$/i,
                  })}
                  onChange={(e) => setcustomerName(e.target.value)}
                  required
                />
                {errors.customerName?.type === "required" && (
                  <p className="text-danger mt-2">customerName is required</p>
                )}
                {errors.customerName?.type === "maxLength" && (
                  <p className="text-danger mt-2">
                    FullName not than 24 number
                  </p>
                )}
                {errors.customerName?.type === "pattern" && (
                  <p className="text-danger mt-2">
                    FullName does not contain special characters
                  </p>
                )}
              </CCol>
              <CCol xs>
                <label htmlFor="formGroupExampleInput3" className=" mb-2">
                  ID CARD
                </label>
                <CFormInput
                  type="number"
                  id="validationTooltip06"
                  placeholder="ID Card"
                  // value={customerIdCard}
                  {...register("customerIdCard", {
                    required: true,
                    minLength: 9,
                    maxLength: 12,
                  })}
                  onChange={(e) => setcustomerIdCard(e.target.value)}
                />
                {errors.customerIdCard?.type === "required" && (
                  <p className="text-danger mt-2">customerIdCard is required</p>
                )}
                {errors.customerIdCard?.type === "minLength" && (
                  <p className="text-danger mt-2">
                    {" "}
                    Number customerIdCard must be 10 number
                  </p>
                )}
                {errors.customerIdCard?.type === "maxLength" && (
                  <p className="text-danger mt-2">
                    {" "}
                    Number customerIdCard not than 10 number
                  </p>
                )}
              </CCol>
              <CCol md={12}>
                <CModalTitle
                  type="text"
                  value={roomId}
                  {...register("roomId", {
                    required: true,
                  })}
                 
                >Customer confirms booking: {name}</CModalTitle>
              </CCol>
            </CRow>
                <CRow className="g-3 m-3">
                  <CCol xs>
                    <label htmlFor="formGroupExampleInput3" className=" mb-2">
                      Service orders
                    </label>
                    <CFormSelect
                      color="success"
                      size="md"
                      className="mb-3"
                      aria-label="Large select example"
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
                    <label htmlFor="formGroupExampleInput1" className=" mb-2">
                      Number of service
                    </label>
                    <input
                      type="number"
                      id="formGroupExampleInput1"
                      className="form-control"
                      placeholder="Number of service"
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
                    Update Booking
                  </button>
                </CModalFooter>
              </CForm>
            </CModalBody>
          </CModal>
        </>
      
  
  );
};
BtnUpdate.propTypes = {
  id: PropTypes.node,
  name: PropTypes.node,
  typeRoom: PropTypes.node,
  status: PropTypes.node,
};
connect(
  ({ customerName, customerIdCard, roomId, fromDate, toDate }) => ({
    customerName,
    customerIdCard,
    roomId,
    fromDate,
    toDate,
  }),
  AddDataBookRoom
)(BtnUpdate);

export default BtnUpdate;
