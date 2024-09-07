import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { TasksProvider } from './context/fetch-tasks/context'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TasksProvider>
      <RouterProvider router={router}/>
    </TasksProvider>
  </StrictMode>
)
