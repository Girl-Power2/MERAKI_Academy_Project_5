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

import Info from "../pages/provider_info/Info";

import Categories from "../components/categories/Categories";
import Provider from "../components/providers/Provider";
import Information_UserSide from "../components/information/Information_UserSide";
import Feadback_reviwes from "../components/feedback_review/Feadback_reviwes";

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

      
      { path: "/category", element: <Categories /> },
      { path: "/provider/:id", element: <Provider /> },
      {
        path: "/provider_Information/:id",
        element: <Information_UserSide />,
        
      },
      {
        path:"/reveiws/:id",
        element:<Feadback_reviwes/>
      }
    ],
  },
]);
