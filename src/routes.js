import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const Bookings = React.lazy(() =>
  import("./views/dashboard/bookings/Bookings")
);

const editBooking = React.lazy(() =>
  import("./views/dashboard/bookings/editBooking")
);
const Users = React.lazy(() =>
  import("./views/dashboard/users/ManagerUser")
);
const Rooms = React.lazy(() =>
  import("./views/dashboard/rooms/rooms")
);
const AddRoom = React.lazy(() => import("./views/dashboard/rooms/addRoom"))
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/rooms", name: "Rooms", element: Rooms },
  { path: '/Rooms/addroom', name: 'Rooms', element: AddRoom },
  { path: "/user", name: "Users", element: Users },
  { path: "/bookings", name: "Bookings", element: Bookings },
  { path: "/bookings/edit", name: "Bookings", element: editBooking },
];

export default routes;
