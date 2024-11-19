import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/layouts/Root';
import Home from './components/layouts/Home';
import Profile from './components/pages/Profile';
import ServiceDetails from './components/pages/ServiceDetails';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import AuthProvider from './components/provider/AuthProvider';
import PrivateRoutesMain from './PrivateRoutesMain';
import ErrorPage from './components/pages/ErrorPage';
import UpdateProfile from './components/pages/UpdateProfile';
import UpdatePassword from './components/pages/UpdatePassword';
import FreeCourse from './components/pages/FreeCourse';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/career.json'),
      },
      {
        path: '/services/:serviceId',
        element: <PrivateRoutesMain>
          <ServiceDetails></ServiceDetails>,
        </PrivateRoutesMain>,
        loader: () => fetch('/career.json'),
      },
      {
        path: "/profile",
        element: <PrivateRoutesMain>
          <Profile></Profile>,
        </PrivateRoutesMain>,
      },
      {
        path: "/updatePassword",
        element: <UpdatePassword></UpdatePassword>,
      },
      {
        path: "/updateProfile",
        element: <PrivateRoutesMain>
          <UpdateProfile></UpdateProfile>,
        </PrivateRoutesMain>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/course",
        element: <PrivateRoutesMain>
          <FreeCourse></FreeCourse>
        </PrivateRoutesMain>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)