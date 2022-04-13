import React from "react";

const Bookings = React.lazy(() =>
  import("./views/dashboard/bookings/Bookings")
);

const Users = React.lazy(() => import("./views/dashboard/users/ManagerUser"));
const Rooms = React.lazy(() => import("./views/dashboard/rooms/rooms"));
const AddRoom = React.lazy(() => import("./views/dashboard/rooms/addRoom"));
const Login = React.lazy(() => import("./views/pages/login/Login"));
<<<<<<< HEAD
const Services = React.lazy(() =>
  import("./views/dashboard/services/Services")
);

const routes = [
  // { path: "/users", name: "Users", element: Dashboard },
  { path: "/Bookings", name: "Bookings", element: Bookings },
  { path: "/", name: "Rooms", element: Rooms },
  { path: "/Rooms/addroom", name: "Rooms", element: AddRoom },
  { path: "/user", name: "Users", element: Users },
  { path: "/login", name: "Login Admin", element: Login },
  { path: "/Services", name: "Services", element: Services },
=======

const routes = [
  { path: "/", exact: true, name: "Admin", element: Dashboard },
  // { path: "/users", name: "Users", element: Dashboard },
  { path: "/bookings", name: "Bookings", element: Bookings },
  { path: "/rooms", name: "Rooms", element: Rooms },
  { path: "/Rooms/addroom", name: "Rooms", element: AddRoom },
  { path: "/user", name: "Users", element: Users },
  { path: "/login", name: "Login Admin", element: Login },
>>>>>>> main
];

export default routes;
