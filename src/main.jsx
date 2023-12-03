import React  from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './Pages/Home/Home';
import Apartment from './Pages/Apartment/Apartment';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import AuthProvider from './AuthProvieder/AuthProvider';
import Dashboard from './Shared/Dashboard/Dashboard';
import UserProfile from './Shared/Dashboard/UserProfile';
import Announcement from './Shared/Dashboard/Announcement';
import AdminProfile from './Shared/Dashboard/AdminProfile';
import Details from './Pages/Home/Details';
import SingleDetail from './Pages/Home/SingleDetail';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>,

      },
      
      {
        path : '/apartment',
        element : <Apartment></Apartment>,
        loader : () => fetch('https://building-management-server-abldegp2t-aminul-islams-projects.vercel.app/appartment/agreement')
      },
      {
        path : '/login',
        element : <Login></Login>

      },
      {
        path : '/details',
        element : <Details></Details>,
      },
      {
        path : '/details/:id',
        element : <SingleDetail></SingleDetail>,
        // loader : ({params}) => fetch(`https://building-management-server-abldegp2t-aminul-islams-projects.vercel.app/appartment/details/${params.id}`)
      },
      {
        path : '/registration',
        element : <Registration></Registration>
      }
    ]
  },
  {
    path : '/dashboard',
    element : <Dashboard></Dashboard>,
    children : [
      {
        path  : '/dashboard/profile',
        element : <UserProfile></UserProfile>
      },
      {
        path : '/dashboard/announcement',
        element : <Announcement></Announcement>
      },
      {
        path :  '/dashboard/profileAdmin',
        element : <AdminProfile></AdminProfile>
      }
    ]
  }
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
  </div>
)
