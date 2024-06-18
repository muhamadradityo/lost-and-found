import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FormLogin from './pages/Auth/components/Login/FormLogin';
import Home from './pages/Home/';
import Pengaturan from './pages/Settings/components/Pengaturan/Pengaturan';
import PengaturanAkun from './pages/Settings/components/PengaturanAkun/PengaturanAkun';
import UbahKataSandi from './pages/Settings/components/Ubah Kata Sandi/Step1_UbahKataSandi';
import KataSandiBaru from './pages/Settings/components/Ubah Kata Sandi/Step2_KataSandiBaru'

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
    path: "/home",
    element: <Home />,
  },
  {
    path: "/pengaturan",
    element: <Pengaturan />,
  },
  {
    path: "/pengaturanAkun",
    element: <PengaturanAkun />,
  },
  {
    path: "/UbahKataSandi",
    element: <UbahKataSandi />,
  },
  {
    path: "/KataSandiBaru",
    element: <KataSandiBaru />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
