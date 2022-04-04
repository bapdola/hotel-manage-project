import React from "react";
import {
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CCol,
  CFormSelect,
  CFormFeedback,
  CInputGroup,
  CInputGroupText,
} from "@coreui/react";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { cilCloudUpload, cilDelete } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import { CDateRangePicker } from "@coreui/react-pro";

const PopupUpdate = () => {
  const [validated, setValidated] = useState(false);
  const [visibleLg, setVisibleLg] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <CButton color="warning" onClick={() => setVisibleLg(!visibleLg)}>
        <CIcon icon={cilCloudUpload} size="lg" />
      </CButton>
      <CModal size="lg" visible={visibleLg} onClose={() => setVisibleLg(false)}>
        <CModalHeader>
          <CModalTitle>Update Services</CModalTitle>
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
                defaultValue=""
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
                Update
              </CButton>
            </CModalFooter>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  );
};

export default PopupUpdate;
