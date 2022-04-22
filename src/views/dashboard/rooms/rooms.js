import React from "react";
import "./room.scss";
import {
  CRow,
  CCol,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CBadge,
} from "@coreui/react";
import img1 from "../../../assets/images/react.jpg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FetchDataRoom,
  FetchDataTypeRoom,
} from "src/Utils/store/action/roomAction";
import PopupAdd from "./PopupAdd";
import PopupUpdate from "./PopupUpdate";
import PopupDelete from "./PopupDelete";

export default function Rooms() {
  const dispatch = useDispatch();

  const dataType = useSelector((state) => state.room.typeRoom);

  useEffect(() => {
    dispatch(FetchDataTypeRoom());
  }, [dispatch]);

  console.log("data_type", dataType);

  const data = useSelector((state) => state.room.rooms);
  useEffect(() => {
    dispatch(FetchDataRoom());
  }, [dispatch]);

  return (
    <>
      <CRow xs={{ cols: 4 }} md={{ cols: 4 }} className="g-4">
        <CCol xs>
          <CCard className="h-100">
            <CCardImage orientation="top" src={img1} />
            <CCardBody>
              <h1 className="Title">CREAT NEW ROOM</h1>
            </CCardBody>
            <CCardBody>
              <PopupAdd />
            </CCardBody>
          </CCard>
        </CCol>
        {data.map((item, inx) => {
          return (
            <CCol xs key={inx}>
              <CCard textColor="primary" className="h-100'">
                <CCardImage orientation="top" src={img1} />
                <CCardBody>
                  <CCardTitle>
                    {" "}
                    <h2 className="Title">
                      {item.name}
                      {"       "}
                      {item.status === 1 ? (
                        <CBadge shape="rounded-pill" color="success">
                          Active
                        </CBadge>
                      ) : (
                        <CBadge shape="rounded-pill" color="secondary">
                          Empty
                        </CBadge>
                      )}
                    </h2>
                  </CCardTitle>
                  <CCardText>{item.price}</CCardText>

                  <CCardText>
                    {dataType.map((type) => {
                      return (
                        <>
                          <div className="type" key={type.id}>
                            {" "}
                            {type.id === item.roomTypeId ? type.type : []}{" "}
                            <span className="Title">
                              {type.id === item.roomTypeId ? `${type.price}đ`  : []}{" "} 
                            </span>
                          </div>
                        </>
                      );
                    })}
                  </CCardText>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <PopupUpdate
                      roomId={item?.id}
                      nameRoom={item?.name}
                      typeRoom={item?.roomType}
                    />
                    <PopupDelete roomId={item?.id} nameRoom={item?.name} />
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
          );
        })}
      </CRow>
    </>
  );
}
