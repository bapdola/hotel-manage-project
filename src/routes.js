import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const Bookings = React.lazy(() =>
  import("./views/dashboard/bookings/Bookings")
);

const editBooking = React.lazy(() =>
  import("./views/dashboard/bookings/editBooking")
);
const Users = React.lazy(() => import("./views/dashboard/users/ManagerUser"));
const Rooms = React.lazy(() => import("./views/dashboard/rooms/rooms"));
const AddRoom = React.lazy(() => import("./views/dashboard/rooms/addRoom"));
const routes = [
  { path: "/admin", exact: true, name: "Admin" },
  // { path: "/users", name: "Users", element: Dashboard },
  { path: "/bookings", name: "Bookings", element: Bookings },
  { path: "/bookings/edit", name: "Bookings", element: editBooking },
  { path: "/rooms", name: "Rooms", element: Rooms },
  { path: "/Rooms/addroom", name: "Rooms", element: AddRoom },
  { path: "/user", name: "Users", element: Users },
];

export default routes;
