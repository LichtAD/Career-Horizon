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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>There was an error</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('career.json'),
      },
      {
        path: "/profile", 
        element: <Profile></Profile>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)