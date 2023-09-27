import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/index";
import Home from "../pages/Home/Home";
import RegisterProvider from "../pages/register_provider/RegisterProvider";
import LoginProvder from "../pages/login_provider/LoginProvier";
import LoginUser from "../pages/login_user/LoginUser";
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
        path:"register",
        element:<RegisterProvider/>
      },
     { path:"login",
      element:<LoginUser/>
    }
    ],
  },
]);
