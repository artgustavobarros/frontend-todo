
import { ShowAllTasks } from "@/components/tasks/all"
import { ShowTasksByCategory } from "@/components/tasks/categories"
import { ShowTasksByStatus } from "@/components/tasks/status"
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
        element: <Dashboard/>,
        children: [
          {
            path:'/',
            element: <ShowAllTasks/>
          },
          {
            path:'/category/:params',
            element: <ShowTasksByCategory/>
          },
          {
            path:'/status/:params',
            element: <ShowTasksByStatus/>
          }
        ]
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