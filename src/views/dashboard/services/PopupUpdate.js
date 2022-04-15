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

import { cilCloudUpload } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateDataService } from "src/Utils/store/action/serviceAction";
import PropTypes from "prop-types";

const PopupUpdate = (props) => {
  const { nameSer, priceSer, hotelId, serviceId } = props;
  const [validated, setValidated] = useState(false);
  const [visibleLg, setVisibleLg] = useState(false);

  const [updateSerName, setUpdateSerName] = useState(nameSer);
  const [updatePriceSer, setUpdatePriceSer] = useState(priceSer);
  const [updateHotelId, setUpdateHotelId] = useState(hotelId);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    const updateService = {
      name: updateSerName,
      price: updatePriceSer,
      hotelId: updateHotelId,
    };

    dispatch(UpdateDataService(serviceId, updateService));
  };

  return (
    <>
      <CButton color="warning" onClick={() => setVisibleLg(!visibleLg)}>
        <CIcon icon={cilCloudUpload} size="sm" /> Edit
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
                value={updateSerName}
                onChange={(e) => setUpdateSerName(e.target.value)}
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
                value={updatePriceSer}
                onChange={(e) => setUpdatePriceSer(e.target.value)}
                required
              />
              <CFormFeedback tooltip valid>
                Looks good!
              </CFormFeedback>
            </CCol>
            <CCol md={4} className="position-relative">
              <CFormLabel htmlFor="validationTooltip03">Hotel Id</CFormLabel>
              <CFormInput
                type="text"
                id="validationTooltip03"
                value={updateHotelId}
                onChange={(e) => setUpdateHotelId(e.target.value)}
                disabled
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
PopupUpdate.propTypes = {
  serviceId: PropTypes.node,
  nameSer: PropTypes.node,
  priceSer: PropTypes.node,
  hotelId: PropTypes.node,
};
export default PopupUpdate;
