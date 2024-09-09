import { ShowAllTasks } from "@/components/tasks/all";
import { ShowTasksByCategory } from "@/components/tasks/categories";
import { ShowTasksByStatus } from "@/components/tasks/status";
import { Dashboard } from "@/pages/Dashboard";
import { PageNotFound } from "@/pages/Error404";
import { createBrowserRouter } from "react-router-dom";

export const userRoutes = createBrowserRouter([{
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
  },{
    path:'*',
    element: <PageNotFound/>
  }
])