import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/index";
import Home from "../pages/Home/Home";
import RegisterProvider from "../pages/RegisterProvider";

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
      }
    ],
  },
]);
