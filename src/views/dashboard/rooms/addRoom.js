import React from 'react'
import {CForm, CCol, CFormLabel, CFormInput, CFormSelect, option, CFormCheck, CButton, CFormTextarea } from '@coreui/react'

export default function AddRoom() {
  return (
    
    <CForm className="row g-3">
    <div className="text-center form-title">Add Room</div>
    <CCol md={12}>
      <CFormLabel htmlFor="inputName">Name</CFormLabel>
      <CFormInput type="name" id="inputName" placeholder="Room name."/>
    </CCol>
    <CCol md={12}>
      <CFormLabel htmlFor="inputType">Type</CFormLabel>
      <CFormInput type="type" id="inputType" placeholder="Room type"/>
    </CCol>
    <CCol xs={12}>
      <CFormLabel htmlFor="inputPrice">Price</CFormLabel>
      <CFormInput id="inputPrice" placeholder="0"/>
    </CCol>
    <CCol xs={12}>
      <CFormLabel htmlFor="inputSize">Size</CFormLabel>
      <CFormInput id="inputSize" placeholder="0"/>
    </CCol>
    <CCol md={12}>
      <CFormLabel htmlFor="inputCapacity">Capacity</CFormLabel>
      <CFormInput id="inputCapacity" placeholder="1"/>
    </CCol>
    <CCol>
      <CFormCheck id="flexBreakfast" label="Breakfast"/>
      <CFormCheck id="flexPets" label="Pets"  />
    </CCol>

    <CCol xs={12}>
      <CFormLabel htmlFor="inputDescription">Description</CFormLabel>
      <CFormTextarea
        placeholder="Short description of room."
        id="inputDescription"
        style={{ height: '100px' }}
      ></CFormTextarea>
      <CFormLabel htmlFor="inputDescription"></CFormLabel>
    </CCol>

    <CCol xs={12}>
      <CFormLabel htmlFor="inputExtras">Extras</CFormLabel>
      <CFormTextarea
        placeholder="Separated by comma (,)"
        id="inputExtras"
        style={{ height: '100px' }}
      ></CFormTextarea>
      <CFormLabel htmlFor="inputExtras"></CFormLabel>
    </CCol>

    <CCol xs={12}>
      <div className="mb-3">
        <CFormLabel htmlFor="formFile">Thêm ảnh</CFormLabel>
        <CFormInput type="file" id="formFile"/>
      </div>
    </CCol>

    <CCol xs={12}>
      <CButton type="submit">AddRoom</CButton>
    </CCol>
  </CForm>
  )
}