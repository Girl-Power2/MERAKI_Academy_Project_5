import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/index";
import Home from "../pages/Home/Home";
import RegisterProvider from "../pages/register_provider/RegisterProvider";
import LoginProvder from "../pages/login_provider/LoginProvier";
import LoginUser from "../pages/login_user/LoginUser";
import RegisterUser from "../pages/register_users/RegisterUser";
import Register from "../pages/Register/Register";
import About from "../pages/AboutUs/About";
import Login from "../pages/login/Login";
import ProviderMain from "../pages/providerMain/ProviderMain";
import Info from "../pages/provider_info/Info";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "/aboutUs",
            element: <About />,
          },
        ],
      },

      {
        path: "/aboutUs",
        element: <About />,
      },

      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/provider",
        element: <RegisterProvider />,
      },
      {
        path: "/user",
        element: <RegisterUser />,
      },
      { path: "/login", element: <Login /> },
      { path: "/loginUser", element: <LoginUser /> },
      { path: "/loginProvider", element: <LoginProvder /> },
      {
        path: "/info",
        element: <Info />,
   
  },
    ],
  },

  
]);
