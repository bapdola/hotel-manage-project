import React from "react";

import {
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CCol,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CRow,
} from "@coreui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { CreateBill, FetchDataBill } from "src/Utils/store/action/billAction";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { VscCreditCard } from "react-icons/vsc";
import { formatDate } from "../../../Utils/DateTme/dateTime";
import {
  FetchDataTypeRoom,
  FetchDataRoom,
} from "../../../Utils/store/action/roomAction";
import { differenceInDays, format } from "date-fns";

const PopupPayment = (props) => {
  const {
    roomId,
    idBookRoom,
    customerName,
    customerIdCard,
    roomName,
    fromDate,
    toDate,
  } = props;
  const [visibleLg, setVisibleLg] = useState(false);
  // const data = useSelector((state) => state.id);
  const [bookRoomId, setbookRoomId] = useState("");

  const handleOnSubmit = (data, e) => {
    e.preventDefault();
    if (data) {
      dispatch(CreateBill(data));
    }
    setVisibleLg(false);
  };

  const dispatch = useDispatch();
  const dataType = useSelector((state) => state.room.typeRoom) || []; //fetch data type room
  const dataRoom = useSelector((state) => state.room.rooms) || []; // fetch data room

  const dataRoomcurrent = dataRoom.find((item) => item.id === roomId) || {}; //đúng

<<<<<<< HEAD
  const roomType =
    dataType.find((item) => item.id === dataRoomcurrent.roomTypeId) || {};

  // console.log("data type",roomType.price);
  console.log("data room", roomType.price);
=======
  const roomType = dataType.find((item) => item.id === dataRoomcurrent.roomTypeId) || {};

  const dataInfobill = useSelector((state) => state.bill.infobill)||[];
  
  console.log("data room",dataInfobill);
>>>>>>> b19128d2bc6c337e10aa4560ce53e1bc0a4c4bdb

  useEffect(() => {
    dispatch(FetchDataTypeRoom());
  }, []);

  useEffect(() => {
    dispatch(FetchDataRoom());
  }, []);

  useEffect(() => {
    dispatch(FetchDataBill());
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    mode: "onChange",
  });

  var result = differenceInDays(new Date(toDate), new Date(fromDate));

  return (
    <>
      <CButton
        size="sm"
        color="success"
        variant="outline"
        shape="rounded-pill"
        onClick={() => setVisibleLg(!visibleLg)}
      >
        Payment <VscCreditCard size={15} />
      </CButton>
      <CModal visible={visibleLg} onClose={() => setVisibleLg(false)}>
        <CModalHeader>
          <CModalTitle>Payment : {customerName}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            className="row g-3 needs-validation"
            noValidate
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <CCol md={12} color="success" className="position-relative">
              <CFormInput
                type="hidden"
                value={idBookRoom}
                id="validationTooltip01"
                onChange={(e) => setbookRoomId(e.target.value)}
                {...register("bookRoomId", {
                  required: true,
                })}
                placeholder="Name"
                required
              />
            </CCol>

            <CCol md={6} className="position-relative">
              <CFormLabel htmlFor="validationTooltip02">Name</CFormLabel>
              <CModalTitle
                value=""
                type="number"
                id="validationTooltip02"
                placeholder="Price"
              >
               {roomName}
              </CModalTitle>
            </CCol>
            <CCol md={6} className="position-relative">
              <CFormLabel htmlFor="validationTooltip02">ID Card</CFormLabel>
              <CModalTitle
                value=""
                type="number"
                id="validationTooltip02"
                placeholder="Price"
              >
                {customerIdCard}
              </CModalTitle>
            </CCol>
            <CCol md={6} className="position-relative">
              <CFormLabel htmlFor="validationTooltip02">Checkin</CFormLabel>
              <CModalTitle
                value=""
                type="date"
                id="validationTooltip02"
                placeholder="Price"
              >
                {formatDate(fromDate)}
              </CModalTitle>
            </CCol>
            <CCol md={6} className="position-relative">
              <CFormLabel htmlFor="validationTooltip02">Checkout</CFormLabel>
              <CModalTitle
                value=""
                type="date"
                id="validationTooltip02"
                placeholder="Price"
              >
                {formatDate(toDate)}
              </CModalTitle>
            </CCol>
            <CRow className="g-3 m-3">
              <CCol xs={6}>
                <p>Number of day: {result} </p>
              </CCol>
              <CCol xs={6}>
                <p>Price per day: {roomType.price} </p>
              </CCol>
              <CCol xs={6}>
                <h3>Total:{result * roomType.price} </h3>
              </CCol>
            </CRow>
            <CModalFooter>
              <CButton size="sm" shape="rounded-pill" variant="ghost" color="secondary" onClick={() => setVisibleLg(false)}>
                Cancel
              </CButton>
              <CButton size="lg" color="success" type="submit" shape="rounded-pill" variant="outline">
                Payment
              </CButton>
            </CModalFooter>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  );
};

connect(
  ({ bookRoomId }) => ({
    bookRoomId,
  }),
  CreateBill
)(PopupPayment);
PopupPayment.propTypes = {
  idBookRoom: PropTypes.node,
  customerName: PropTypes.node,
  customerIdCard: PropTypes.node,
  fromDate: PropTypes.node,
  toDate: PropTypes.node,
  roomName: PropTypes.node,
  roomId: PropTypes.node,
};
export default PopupPayment;
