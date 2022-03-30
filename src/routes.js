import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const Bookings = React.lazy(() =>
  import("./views/dashboard/bookings/Bookings")
);

const editBooking = React.lazy(() =>
  import("./views/dashboard/bookings/editBooking")
);
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Rooms", element: Dashboard },
  { path: "/users", name: "Users", element: Dashboard },
  { path: "/bookings", name: "Bookings", element: Bookings },
  { path: "/bookings/edit", name: "Bookings", element: editBooking },
];

export default routes;
