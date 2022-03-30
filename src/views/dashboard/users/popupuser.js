import React, { useEffect, useState } from "react";
import { 
  CButton,CButtonGroup,CModal,CModalTitle,CModalHeader,CModalBody,CModalFooter,CPopover,
  CCol,CFormLabel,CFormInput,CFormFeedback,CFormCheck,CFormSelect,CInputGroupText,CInputGroup,CForm

} from '@coreui/react'
export default function Popup() {
      const [validated, setValidated] = useState(false)
    const handleSubmit = (event) => {
      const form = event.currentTarget
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      }
      setValidated(true)
    }
  const [visible, setVisible] = useState(false)
return (
  <>
    <CButton color="info" onClick={() => setVisible(!visible)}>Edit</CButton>
    <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>Invoice information</CModalTitle>
      </CModalHeader>
      <CModalBody>
       <CForm
    className="row g-3 needs-validation"
    noValidate
    validated={validated}
    onSubmit={handleSubmit}
      >
    <CCol md={6}>
      <CFormLabel htmlFor="validationCustom01">First Name</CFormLabel>
      <CFormInput type="text" id="validationCustom01" placeholder="Đinh"  required />
      <CFormFeedback valid>Invalid</CFormFeedback>
    </CCol>
    <CCol md={6}>
      <CFormLabel htmlFor="validationCustom02">Last name</CFormLabel>
      <CFormInput type="text" id="validationCustom02" placeholder="Thiên Thoại" required />
      <CFormFeedback valid>Invalid</CFormFeedback>
    </CCol>
    <CCol md={6}>
      <CFormLabel htmlFor="validationCustomUsername">ID Card</CFormLabel>
      <CInputGroup className="has-validation">
        <CFormInput
          type="text"
          id="validationCustomUsername"
          placeholder="215497833"
          aria-describedby="inputGroupPrepend"
          required
        />
        <CFormFeedback valid>Invalid</CFormFeedback>
        <CFormFeedback invalid>ID Card must be 9-12 numbers</CFormFeedback>
      </CInputGroup>
    </CCol>
    <CCol md={6}>
      <CFormLabel htmlFor="validationCustom03">Phone Number</CFormLabel>
      <CFormInput type="text" id="validationCustom03 floatingInput" placeholder="0387397253"  required />
      <CFormFeedback valid>Invalid</CFormFeedback>
      <CFormFeedback invalid>Phone number must be 10-11 numbers</CFormFeedback>
    </CCol>
    <CCol md={12}>
      <CFormLabel htmlFor="validationCustom03">Email address</CFormLabel>
      <CFormInput type="email" id="validationCustom02" placeholder="vmax@gmail.com"  required />
      <CFormFeedback valid>Invalid</CFormFeedback>
      <CFormFeedback invalid>Email address is not valid</CFormFeedback>
    </CCol>
    <CCol xs={12}>
      <CFormCheck
        type="checkbox"
        id="invalidCheck"
        label="Agree to terms and conditions"
        required
      />
      <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
    </CCol>
    <CCol xs={12}>
      <CButton margin="right" color="success" type="submit">
        Submit form
      </CButton>
    </CCol>
  </CForm>
      </CModalBody>
     
    </CModal>
  </>
)
}

