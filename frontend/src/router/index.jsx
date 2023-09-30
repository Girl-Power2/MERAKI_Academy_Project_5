import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/index";
import Home from "../pages/Home/Home";
import RegisterProvider from "../pages/Register/register_provider/RegisterProvider";
import LoginProvider from "../pages/login/login_provider/LoginProvider";
import LoginUser from "../pages/login/login_user/LoginUser";
import RegisterUser from "../pages/Register/register_users/RegisterUser";
import Register from "../pages/Register/Register";
import About from "../pages/AboutUs/About";
import Login from "../pages/login/Login"

import Info from "../pages/ProviderUI/provider_info/Info";

import Categories from "../components/categories/Categories";
import Provider from "../components/providers/Provider";
import Information_UserSide from "../components/information/Information_UserSide";

import MyServices from "../pages/ProviderUI/Myservices/MyServices";

import Feadback_reviwes from "../components/feedback_review/Feadback_reviwes";
import UserProfile from "../components/UserProfile/UserProfile";


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
      { path: "/loginProvider", element: <LoginProvider /> },
      {
        path: "/info",
        element: <Info />,

   
  },
  {path:"/services",
element:<MyServices/>},

      
      { path: "/category", element: <Categories /> },
      { path: "/provider/:id", element: <Provider /> },
      {
        path: "/provider_Information/:id",
        element: <Information_UserSide />,
        
      },
      {
        path:"/reveiws/:id",
        element:<Feadback_reviwes/>
      },
      {
        path:"/myProfile",
        element:<UserProfile/>
      }
    ],
  },
]);
