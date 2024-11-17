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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>There was an error</div>,
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
        element: <Profile></Profile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
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