import React from "react"

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Rooms', element: Dashboard },
  { path: '/users', name: 'Users', element: Dashboard },
  { path: '/bookings', name: 'Bookings', element: Dashboard },
]

export default routes
