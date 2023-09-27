import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/index";
import Home from "../pages/Home/Home";
import RegisterProvider from "../pages/register_provider/RegisterProvider";
import LoginProvder from "../pages/login_provider/LoginProvier";
import LoginUser from "../pages/login_user/LoginUser";
import RegisterUser from "../pages/register_users/RegisterUser";
import Register from "../pages/Register/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
        children: [
          {
            path: "register/provider",
            element: <RegisterProvider />,
          },
          {
            path: "register/user",
            element: <RegisterUser/>,
          },
        ],
      },
      { path: "login", element: <LoginUser /> },
    ],
  },
]);
