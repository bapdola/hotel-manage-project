import React, { useState, useEffect } from "react";
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
  CAlert,
  CToast,
  CToastBody,
  CToastClose,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { useDispatch, useSelector, connect } from "react-redux";
import AdminLoginAction from "src/Utils/store/action/adminLoginAction";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AdminLogin = () => {
  const [username, setAdminName] = useState("");
  const [password, setPassWord] = useState("");
  const isLoggIn = useSelector((state) => state.adminLogin.currentUser);

  const dispatch = useDispatch();

<<<<<<< HEAD
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      AdminLoginAction({
        email: adminName,
        password: password,
      })
    );
=======
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    mode: "onBlur",
  });

  const handleOnSubmit = (data) => {
    dispatch(AdminLoginAction(data));
>>>>>>> truongtrongthien
  };

  return (
    <>
      {isLoggIn ? <Navigate to="/admin" /> : []}
      <div className="bg-light min-vh-100 d-flex  flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={5}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit={handleSubmit(handleOnSubmit)}>
                      <h1>Admin Panel</h1>
                      <p className="text-medium-emphasis">
                        Sign In to your account
                      </p>
                      <CInputGroup className="mb-2">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Username"
                          autoComplete="username"
                          value={username || ""}
                          {...register("username", {
                            required: true,
                            pattern: /^[A-Za-z0-9]+$/i,
                          })}
                          onChange={(e) => setAdminName(e.target.value)}
                          // onBlur={(e) => setAdminName(e.target.value)}
                        />
                      </CInputGroup>
                      {errors.username?.type === "required" && (
                        <span className="text-danger">
                          Username is required
                        </span>
                      )}
                      {errors.username?.type === "pattern" && (
                        <p className="text-danger  p-2">
                          {" "}
                          Username does not contain special characters
                        </p>
                      )}
                      <CInputGroup className="mb-3 mt-1">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          value={password}
                          autoComplete="current-password"
                          {...register("password", {
                            required: true,
                            minLength: 5,
                          })}
                          onChange={(e) => setPassWord(e.target.value)}
                          // onBlur={(e) => setPassWord(e.target.value)}
                        />
                      </CInputGroup>
                      {errors.password?.type === "required" && (
                        <p className="text-danger">Password is required</p>
                      )}
                      {errors.password?.type === "minLength" && (
                        <p className="text-danger">
                          Password must be 6 characters long
                        </p>
                      )}
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
connect(
  ({ username, password }) => ({
    username,
    password,
  }),
  AdminLoginAction
)(AdminLogin);
export default AdminLogin;
