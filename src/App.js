import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./scss/style.scss";

import ProtectedRoutes from "./router/ProtectedRoutes";
import Navbar from "src/components/userPage/Navbar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const AdminLogin = React.lazy(() =>
  import("./views/pages/adminLogin/AdminLogin")
);

const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

const Home = React.lazy(() => import("./views/pages/home/Home"));
const Rooms = React.lazy(() => import("./views/pages/rooms/Rooms"));
const SingleRoom = React.lazy(() =>
  import("./views/pages/singleRoom/SingleRoom")
);

const BtnBooking = React.lazy(() => import("./components/userPage/btnBooking"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={loading}>
        <Routes>
          <Route exact path="/" name="Home Page" element={<Home />} />
          <Route exact path="/rooms" name="Page" element={<Rooms />} />

          <Route
            path="/rooms/single-room"
            name="Page"
            element={<SingleRoom />}
          />
          {/* <Route element={<PrivateRoutes redirectLink="/login" />}>
            <Route
              path="/register"
              name="Register Page"
              element={<Register />}
            />
          </Route> */}
          <Route
            path="admin/login"
            name="Login Page"
            element={<AdminLogin />}
          />
          <Route element={<ProtectedRoutes redirectLink="admin/login" />}>
            <Route path="/admin/*" element={<DefaultLayout />} />
          </Route>

          <Route exact element={<ProtectedRoutes redirect="/login" />}>
            <Route exact path="/rooms/:id" element={<BtnBooking />} />
          </Route>

          <Route path="/register" name="Register Page" element={<Register />} />
          <Route path="/login" name="Login Page" element={<Login />} />
          <Route exact path="*" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
        </Routes>
      </Suspense>{" "}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
};

export default App;
