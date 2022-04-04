import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import PrivateRoutes from "./router/PrivateRoutes";
import Navbar from "./components/userPage/Navbar";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
const TestConfigRedux = React.lazy(() =>
  import("./views/pages/testConfigRedux/testConfigRedux")
);

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

const App = () => {
  const isLogged = true;
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={loading}>
        <Routes>
          <Route exact path="/" name="Home Page" element={<Home />} />
          <Route exact path="/rooms" name="Page" element={<Rooms />} />

          {/* test config redux */}
          <Route exact path="/test" name="Page" element={<TestConfigRedux />} />

          <Route
            path="/rooms/single-room"
            name="Page"
            element={<SingleRoom isLogged={isLogged} />}
          />
          <Route
            element={
              <PrivateRoutes isLogged={isLogged} redirectLink="/login" />
            }
          >
            <Route
              path="/register"
              name="Register Page"
              element={<Register />}
            />
          </Route>
          <Route path="admin/login" name="Login Page" element={<Login />} />
          <Route
            element={
              <PrivateRoutes isLogged={isLogged} redirectLink="admin/login" />
            }
          >
            <Route path="/admin/*" element={<DefaultLayout />} />
          </Route>
          <Route
            path="admin/login"
            name="Login Page"
            element={<AdminLogin />}
          />
          <Route path="/login" name="Login Page" element={<Login />} />
          <Route exact path="*" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
