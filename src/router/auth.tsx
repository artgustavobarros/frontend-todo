import { Dashboard } from "@/pages/Dashboard"
import { Login } from "@/pages/Login"
import { SignUp } from "@/pages/SignUp"
import { createBrowserRouter } from "react-router-dom"

interface ProtectedRouterProps{
  logged: string | null
}

export function protectedRouter({logged}: ProtectedRouterProps){
  let router
  
  if (logged){
    router = createBrowserRouter([{
        path: '/',
        element: <Dashboard/>
      }
    ])
  }else{
    router = createBrowserRouter([
      {
        path:'/',
        element: <Login/>
      }, {
        path:'/sign-up',
        element: <SignUp/>
      }
    ])
  }

  return router
}