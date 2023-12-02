import React from 'react'
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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : () => fetch('http://localhost:5000/appartment')

      },
      {
        path : '/apartment',
        element : <Apartment></Apartment>
      },
      {
        path : '/login',
        element : <Login></Login>

      },
      {
        path : '/registration',
        element : <Registration></Registration>
      }
    ]
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
