import { Dashboard } from "@/pages/Dashboard"
import { Login } from "@/pages/Login"
import { SignUp } from "@/pages/SignUp"
import {
  createBrowserRouter,
} from "react-router-dom"

export const router = createBrowserRouter([
  {
    path:'/sign-in',
    element: <Login/>
  }, {
    path:'/sign-up',
    element: <SignUp/>
  },{
    path: '/',
    element: <Dashboard/>
  }
])