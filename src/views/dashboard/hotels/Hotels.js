import React, { useEffect } from "react";
import {
  CTable,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { HotelFetchData } from "src/Utils/store/action/hotelAction";
import PopupAdd from "./PopupAdd";
import PopupDelete from "./PopupDelete";
import PopupUpdate from "./PopupUpdate";

const Hotels = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HotelFetchData());
  }, [dispatch]);

  const data = useSelector((state) => state.hotel.hotels);

  return (
    <>
      <CTable striped>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Adress</CTableHeaderCell>
            <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-center">
              <PopupAdd />
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data &&
            data.map((item, inx) => {
              return (
                <CTableRow key={inx}>
                  <CTableHeaderCell scope="row">{item.name}</CTableHeaderCell>
                  <CTableDataCell>{item.adress} </CTableDataCell>
                  <CTableDataCell>{item.phone} </CTableDataCell>
                  <CTableDataCell>{item.email} </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <PopupUpdate
                      hotelId={item.uuid}
                      nameHotel={item.name}
                      dressHotel={item.adress}
                      phoneHotel={item.phone}
                      emailHotel={item.email}
                    />{" "}
                    <PopupDelete hotelId={item.uuid} />
                  </CTableDataCell>
                </CTableRow>
              );
            })}
        </CTableBody>
      </CTable>
    </>
  );
};

export default Hotels;
