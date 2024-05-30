import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FormRegister from './components/Fragments/FormRegister';
import FormLogin from './components/Fragments/FormLogin';
import Home from './pages/Home/';

const router = createBrowserRouter([
  {
    path: "/",
    element: "Hello World",
  },
  {
    path: "/login",
    element: <FormLogin />,
  },
  {
    path: "/register",
    element: <FormRegister />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
