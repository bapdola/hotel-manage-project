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
import { useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { CreateBill } from "src/Utils/store/action/billAction";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { VscCreditCard } from "react-icons/vsc";

const PopupPayment = (props) => {
  const { idBookRoom } = props;
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

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    mode: "onChange",
  });

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
      <CModal size="lg" visible={visibleLg} onClose={() => setVisibleLg(false)}>
        <CModalHeader>
          <CModalTitle>Payment</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            className="row g-3 needs-validation"
            noValidate
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <CCol md={12} color="success" className="position-relative">
              <CModalTitle>Do you want to complete the payment ?</CModalTitle>

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

            <CModalFooter>
              <CButton color="secondary" onClick={() => setVisibleLg(false)}>
                Cancel
              </CButton>
              <CButton size="lg" color="success" type="submit">
                Pay
              </CButton>
            </CModalFooter>
          </CForm>
          {/* <CCol md={6} className="position-relative">
            <CFormLabel htmlFor="validationTooltip02">Name</CFormLabel>
            <CModalTitle
              value=""
              type="number"
              id="validationTooltip02"
              placeholder="Price"
            >
              {" "}
              Teen khach hang{" "}
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
              {" "}
              CMND{" "}
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
              {" "}
              Ngay den{" "}
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
              {" "}
              Ngay di{" "}
            </CModalTitle>
          </CCol>
          <CRow className="g-3 m-3">
            <CCol xs={3}>
              <p>Number of day: </p>
            </CCol>
            <CCol xs={4}>
              <p>Price per day: </p>
            </CCol>
            <CCol xs={5}>
              <p>Total: </p>
            </CCol>
          </CRow> */}
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
};
export default PopupPayment;
