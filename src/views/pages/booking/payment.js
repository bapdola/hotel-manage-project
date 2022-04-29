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
  const dataBill = useSelector((state) => state.bill.bills) || {}; // fetch data room

  console.log("databill", dataBill);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    mode: "onChange",
  });

  var result = differenceInDays(new Date(toDate), new Date(fromDate));

  const handleClickShowInfor = () => {
    if (idBookRoom) {
      dispatch(FetchDataBill(idBookRoom));
    }
    setVisibleLg(!visibleLg);
  };

  return (
    <>
      <CButton
        size="sm"
        color="success"
        variant="outline"
        shape="rounded-pill"
        onClick={handleClickShowInfor}
      >
        Payment <VscCreditCard size={15} />
      </CButton>
      <CModal size="lg" visible={visibleLg} onClose={() => setVisibleLg(false)}>
        <CModalHeader>
          <CModalTitle>
            Payment :{" "}
            {dataBill &&
              dataBill.inforBookroom &&
              dataBill.inforBookroom.customerName}
          </CModalTitle>
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

            {dataBill && dataBill.inforBookroom && (
              <CRow className="g-3 m-3">
                <CCol xs={6}>
                  <h3>Id Card: {dataBill.inforBookroom.customerIdCard} </h3>
                </CCol>
                <CCol xs={6}>
                  <h3>Name Room: {dataBill.inforBookroom.name} </h3>
                </CCol>
                <CCol xs={6}>
                  <h5>
                    From Date: {formatDate(dataBill.inforBookroom.fromDate)}{" "}
                  </h5>
                </CCol>
                <CCol xs={6}>
                  <h5>To Date: {formatDate(dataBill.inforBookroom.toDate)} </h5>
                </CCol>
                <CCol xs={6}>
                  <h4>Type: {dataBill.inforBookroom.type} </h4>
                </CCol>
                <CCol xs={6}>
                  <p>Price per day: {dataBill.inforBookroom.price} </p>
                </CCol>
                <CCol xs={5}>
                  <h3>User book: {dataBill.inforUser} </h3>
                </CCol>
                <CCol xs={7}>
                  <h3>Total: {dataBill.totalBill} </h3>
                </CCol>
              </CRow>
            )}

            <CModalFooter>
              <CButton
                size="sm"
                shape="rounded-pill"
                variant="ghost"
                color="secondary"
                onClick={() => setVisibleLg(false)}
              >
                Cancel
              </CButton>
              <CButton
                size="lg"
                color="success"
                type="submit"
                shape="rounded-pill"
                variant="outline"
              >
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
