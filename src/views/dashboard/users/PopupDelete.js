import React, { useState } from "react";
import {
  CButton,
  CModal,
  CModalTitle,
  CModalHeader,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import PropTypes from "prop-types";
import { DeleteDataUser } from "src/Utils/store/action/userAction";
import { useDispatch } from "react-redux";

const PopupDelete = (props) => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const { userId } = props;
  const handleDeleteUser = () => {
    if (userId && userId !== null) {
      dispatch(DeleteDataUser(userId));
      window.location.reload();
    }
  };

  return (
    <>
      <CButton color="danger" onClick={() => setVisible(!visible)}>
        Delete
      </CButton>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Delete User</CModalTitle>
        </CModalHeader>
        <CModalBody>Are you sure you want to delete?</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="danger" onClick={handleDeleteUser}>
            Yes
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

PopupDelete.propTypes = {
  userId: PropTypes.node,
};

export default PopupDelete;