import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
import "./room.scss";
import { useDispatch } from "react-redux";
import { FetchData } from "src/Utils/store/action/roomAction";

export default function Rooms() {
  const navigate = useNavigate();
  const AddRoom = () => {
    navigate("/admin/addroom");
  };

  const dispatch = useDispatch();
  const data = useSelector((state) => state.room.rooms);

  useEffect(() => {
    dispatch(FetchData());
  }, [dispatch]);

  console.log("data service", data);

  return (
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

      <CCol xs={12}>
        <CButton type="submit" onClick={() => AddRoom()}>
          AddRoom
        </CButton>
      </CCol>
    </CRow>
  );
}
