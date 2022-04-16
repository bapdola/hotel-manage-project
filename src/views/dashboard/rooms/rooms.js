import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CRow,
  CCol,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";
import img1 from "../../../assets/images/react.jpg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchData } from "src/Utils/store/action/roomAction";
import { toast } from "react-toastify";

export default function Rooms() {
  const navigate = useNavigate();
  const AddRoom = () => {
    navigate("/admin/addroom");
  };

  const dispatch = useDispatch();
  const data = useSelector((state) => state.room.rooms);
  const isLoggIn = useSelector((state) => state.adminLogin.currentUser);

  useEffect(() => {
    dispatch(FetchData());
  }, [dispatch]);

  return (
    <>
      <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
        {data.map((item, inx) => {
          return (
            <CCol xs key={inx}>
              <CCard className="h-100">
                <CCardImage orientation="top" src={img1} />
                <CCardBody>
                  <CCardTitle>{item.name}</CCardTitle>
                  <CCardText>${item.price}</CCardText>
                  <CCardText>Type: {item.type}</CCardText>
                </CCardBody>
              </CCard>
            </CCol>
          );
        })}
      </CRow>
      <CCol xs={12} className="m-4 text-center">
        <CButton type="submit" onClick={() => AddRoom()}>
          AddRoom
        </CButton>
      </CCol>
    </>
  );
}
