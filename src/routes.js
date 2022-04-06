import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const Bookings = React.lazy(() =>
  import("./views/dashboard/bookings/Bookings")
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
  { path: '/rooms/addroom', name: 'Rooms', element: AddRoom },
  { path: "/user", name: "Users", element: Users },
  { path: "/bookings", name: "Bookings", element: Bookings },
];

export default routes;
