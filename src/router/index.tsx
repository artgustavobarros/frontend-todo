import { RouterProvider } from "react-router-dom"
import { userRoutes } from "./user-routes"
import { authRoutes } from "./auth-routes"
import { useAuth } from "@/context/auth/use-tasks"

export function Routes(){
  const {auth} = useAuth()
  return <RouterProvider router={auth? userRoutes:authRoutes}/>
}