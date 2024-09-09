
import { createBrowserRouter } from "react-router-dom";
import { PageNotFound } from "../pages/Error404";
import { Login } from "../pages/Login";
import { ResetPassword } from "../pages/ResetPassword";
import { SignUp } from "../pages/SignUp";

export const authRoutes = createBrowserRouter([
  {
    path:'/',
    element: <Login/>,
  }, {
    path:'/sign-up',
    element: <SignUp/>,
  },{
    path:'/recover',
    element: <ResetPassword/>,
  },{
    path: '*',
    element: <PageNotFound/>
  }
])