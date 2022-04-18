import React from "react";
import {
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CCol,
  CFormFeedback,
} from "@coreui/react";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import { useState } from "react";
import { VscAdd } from "react-icons/vsc";
import { useDispatch, connect } from "react-redux";
import { AddDataService } from "src/Utils/store/action/serviceAction";
import { useForm } from "react-hook-form";
import { FetchDataService } from "src/Utils/store/action/serviceAction";
import { useEffect } from "react";

const PopupAdd = () => {
  const [validated, setValidated] = useState(false);
  const [visibleLg, setVisibleLg] = useState(false);

  const [name, setNameService] = useState("");
  const [price, setPriceService] = useState("");
  // const [hotelId, setHotelId] = useState("");

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    mode: "onBlur",
  });

  const handleOnSubmit = (data, e) => {
    e.preventDefault();
    setNameService("");
    setPriceService("");
    dispatch(AddDataService(data));
    reset({ ...data });
    setVisibleLg(false);
  };

  return (
    <>
      <CButton color="success" onClick={() => setVisibleLg(!visibleLg)}>
        <VscAdd size={15} /> Add
      </CButton>
      <CModal size="lg" visible={visibleLg} onClose={() => setVisibleLg(false)}>
        <CModalHeader>
          <CModalTitle>Add Services</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            className="row g-3 needs-validation"
            noValidate
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <CCol md={4} className="position-relative">
              <CFormLabel htmlFor="validationTooltip01">Name</CFormLabel>
              <CFormInput
                type="text"
                id="validationTooltip01"
                placeholder="Name"
                value={name}
                {...register("name", {
                  required: true,
                  pattern: /^[A-Za-z0-9 ]+$/i,
                })}
                onChange={(e) => setNameService(e.target.value)}
                required
              />
              {errors.name?.type === "required" && (
                <p className="text-danger mt-2">Name Service is required</p>
              )}
              {errors.name?.type === "pattern" && (
                <p className="text-danger mt-2">
                  {" "}
                  Name Service does not contain special characters
                </p>
              )}
            </CCol>
            <CCol md={4} className="position-relative">
              <CFormLabel htmlFor="validationTooltip02">Price</CFormLabel>
              <CFormInput
                type="number"
                id="validationTooltip02"
                placeholder="Price"
                defaultValue={price}
                {...register("price", {
                  required: true,
                })}
                onChange={(e) => setPriceService(e.target.value)}
                required
              />
              {errors.price?.type === "required" && (
                <p className="text-danger mt-2"> Price Service is required</p>
              )}
            </CCol>

            <CModalFooter>
              <CButton color="secondary" onClick={() => setVisibleLg(false)}>
                Close
              </CButton>
              <CButton color="success" type="submit">
                Add
              </CButton>
            </CModalFooter>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  );
};
connect(
  ({ name, price, hotelId }) => ({
    name,
    price,
    hotelId,
  }),
  AddDataService
)(PopupAdd);
export default PopupAdd;
