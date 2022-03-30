import React from "react"

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Rooms = React.lazy(() => import('./views/dashboard/rooms/Rooms'))
const AddRoom = React.lazy(() => import('./views/dashboard/rooms/addRoom'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Rooms', element: Dashboard },
  { path: '/Rooms', name: 'Rooms', element: Rooms },
  { path: '/Rooms/addroom', name: 'Rooms', element: AddRoom },
  { path: '/users', name: 'Users', element: Dashboard },
  { path: '/bookings', name: 'Bookings', element: Dashboard },
]

export default routes
