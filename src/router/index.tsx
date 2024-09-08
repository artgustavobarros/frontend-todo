import { protectedRouter } from "./auth"
import { RouterProvider } from "react-router-dom"

export function Routes(){
  const auth = localStorage.getItem('access_token')
  const router = protectedRouter({logged: auth})

  return <RouterProvider  router={router}/>
}