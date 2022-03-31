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
      <CButton color="success" onClick={() => setVisibleLg(!visibleLg)}>
        <CIcon icon={cilCloudUpload} size="lg" />
      </CButton>
      <CModal size="lg" visible={visibleLg} onClose={() => setVisibleLg(false)}>
        <CModalHeader>
          <CModalTitle>Update</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            className="row g-3 needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <CCol md={4} className="position-relative">
              <CFormLabel htmlFor="validationTooltip01">Email</CFormLabel>
              <CFormInput
                type="text"
                id="validationTooltip01"
                defaultValue="Mark"
                required
              />
              <CFormFeedback tooltip valid>
                Looks good!
              </CFormFeedback>
            </CCol>
            <CCol md={4} className="position-relative">
              <CFormLabel htmlFor="validationTooltip02">Name</CFormLabel>
              <CFormInput
                type="text"
                id="validationTooltip02"
                defaultValue="Otto"
                required
              />
              <CFormFeedback tooltip valid>
                Looks good!
              </CFormFeedback>
            </CCol>
            <CCol md={4} className="position-relative">
              <CFormLabel htmlFor="validationTooltipUsername">
                Room type
              </CFormLabel>
              <CInputGroup className="has-validation">
                <CFormInput
                  type="text"
                  id="validationTooltipUsername"
                  defaultValue=""
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <CFormFeedback tooltip invalid>
                  Please choose a room type.
                </CFormFeedback>
              </CInputGroup>
            </CCol>
            <CCol md={4} className="position-relative">
              <CFormLabel htmlFor="validationTooltip03">Time</CFormLabel>
              <CDateRangePicker
                startDate=""
                endDate=""
                locale="en-US"
                id="validationTooltip03"
              />
              <CFormFeedback tooltip invalid>
                Please provide a valid city.
              </CFormFeedback>
            </CCol>
            <CCol md={3} className="position-relative">
              <CFormLabel htmlFor="validationTooltip05">Capactly</CFormLabel>
              <CFormInput type="number" id="validationTooltip05" required />
              <CFormFeedback tooltip invalid>
                Please provide a valid zip.
              </CFormFeedback>
            </CCol>
            <CCol md={3} className="position-relative">
              <CFormLabel htmlFor="validationTooltip06">Price</CFormLabel>
              <CFormInput type="number" id="validationTooltip06" required />
              <CFormFeedback tooltip invalid>
                Please provide a valid zip.
              </CFormFeedback>
            </CCol>
            <CCol md={2} className="position-relative">
              <CFormLabel htmlFor="validationTooltip04">Status</CFormLabel>
              <CFormSelect id="validationTooltip04" required>
                <option>Rejected</option>
                <option>Acceopted</option>
              </CFormSelect>
              <CFormFeedback tooltip invalid>
                Please provide a valid city.
              </CFormFeedback>
            </CCol>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setVisibleLg(false)}>
                Close
              </CButton>
              <CButton color="success" type="submit">
                Save
              </CButton>
            </CModalFooter>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  );
};

export default PopupUpdate;
