import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { useDispatch, useSelector } from "react-redux";
import AdminLoginAction from "src/Utils/store/action/adminLoginAction";
import { Navigate } from "react-router-dom";

const AdminLogin = () => {
  const [adminName, setAdminName] = useState("");
  const [password, setPassWord] = useState("");
  const isLoggIn = useSelector((state) => state.adminLogin.currentUser);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      AdminLoginAction({
        username: adminName,
        password: password,
      })
    );
  };

  return (
    <>
      {isLoggIn ? <Navigate to="/admin" /> : []}
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={5}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit={handleSubmit}>
                      <h1>Admin Panel</h1>
                      <p className="text-medium-emphasis">
                        Sign In to your account
                      </p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Username"
                          autoComplete="username"
                          value={adminName || ""}
                          onChange={(e) => setAdminName(e.target.value)}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          value={password || ""}
                          autoComplete="current-password"
                          onChange={(e) => setPassWord(e.target.value)}
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs={6}>
                          <CButton
                            color="primary"
                            className="px-4"
                            type="submit"
                          >
                            Login
                          </CButton>
                        </CCol>
                        <CCol xs={6} className="text-right">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  );
};

export default AdminLogin;
