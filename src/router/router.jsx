import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import LogIn from "../Pages/Authentications/LogIn/LogIn";
import Register from "../Pages/Authentications/Register/Register";
import Covarage from "../Pages/Covarage/Covarage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import PrivetRoutes from "../Routes/PrivetRoutes";
import SendParcel from "../Pages/SendParcel/SendParcel";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "covarage",
        Component: Covarage,
      },
      {
        path: "aboutus",
        Component: AboutUs,
      },
{
  path: 'sendparcel',
  Component: () => (
    <PrivetRoutes>
      <SendParcel />
    </PrivetRoutes>
  ),
},

    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: LogIn,
      },
      {
        path: 'register',
        Component: Register,
      }
    ]
  },
]);