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
import { useDispatch } from "react-redux";
import { AddDataService } from "src/Utils/store/action/serviceAction";

const PopupAdd = () => {
  const [validated, setValidated] = useState(false);
  const [visibleLg, setVisibleLg] = useState(false);

  const [nameService, setNameService] = useState("");
  const [priceService, setPriceService] = useState("");
  const [hotelId, setHotelId] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    const newData = {
      name: nameService,
      price: priceService,
      hotelId: hotelId,
    };

    dispatch(AddDataService(newData));
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
            validated={validated}
            onSubmit={handleSubmit}
          >
            <CCol md={4} className="position-relative">
              <CFormLabel htmlFor="validationTooltip01">Name</CFormLabel>
              <CFormInput
                type="text"
                id="validationTooltip01"
                placeholder="Name"
                value={nameService}
                onChange={(e) => setNameService(e.target.value)}
                required
              />
              <CFormFeedback tooltip valid>
                Looks good!
              </CFormFeedback>
            </CCol>
            <CCol md={4} className="position-relative">
              <CFormLabel htmlFor="validationTooltip02">Price</CFormLabel>
              <CFormInput
                type="number"
                id="validationTooltip02"
                placeholder="Price"
                value={priceService}
                onChange={(e) => setPriceService(e.target.value)}
                required
              />
              <CFormFeedback tooltip valid>
                Looks good!
              </CFormFeedback>
            </CCol>
            <CCol md={4} className="position-relative">
              <CFormLabel htmlFor="validationTooltip03">HotelId</CFormLabel>
              <CFormInput
                type="text"
                id="validationTooltip03"
                placeholder="Hotel ID"
                value={hotelId}
                onChange={(e) => setHotelId(e.target.value)}
                required
              />
              <CFormFeedback tooltip valid>
                Looks good!
              </CFormFeedback>
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

export default PopupAdd;
