import { createBrowserRouter, Navigate } from 'react-router-dom'
import Signup from './views/Signup'
import Users from './views/Users'
import Login from './views/Login'
import Notfound from './views/Notfound' 
import DefaultLayout from './components/DefaultLayout'
import GuestLayout from './components/GuestLayout'

const router = createBrowserRouter([
    {
    path: '/',
    element: <DefaultLayout />,
    children:[
        {
            path: '/dashboard',
            element: <Navigate to="/dashboard" />
        },{
            path: '/users',
            element: <Users />
        },
    ]
  },
  {
    path: '/',
    element: <GuestLayout />,
    children:[
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <Signup />
        },
    ]
  }, 
  {
    path: '*',
    element: <Notfound />
  }
])

export default router
