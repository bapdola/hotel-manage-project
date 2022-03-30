import React from 'react'
import { useNavigate  } from 'react-router-dom';
import {CRow, CCol, CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react'
import img1 from "../../../assets/images/react.jpg"
export default function Rooms() {
  const navigate = useNavigate()
  const AddRoom = ()=> {
    navigate('/rooms/addroom');
  }
  return (
    <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
  <CCol xs>
    <CCard className="h-100">
      <CCardImage orientation="top" src={img1} />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          This is a wider card with supporting text below as a natural lead-in to additional
          content.
        </CCardText>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard className="h-100">
    <CCardImage orientation="top" src={img1} />

      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          This card has supporting text below as a natural lead-in to additional content.
        </CCardText>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard className="h-100">
    <CCardImage orientation="top" src={img1} />

      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          This is a wider card with supporting text below as a natural lead-in to additional
          content. 
        </CCardText>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs>
   
  </CCol>

  <CCol xs={12}>
      <CButton type="submit" onClick={() => AddRoom()}>AddRoom</CButton>
    </CCol>
</CRow>


  )
}
