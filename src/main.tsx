import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { TasksProvider } from './context/fetch-tasks/context'
import { QueryClientProvider } from '@tanstack/react-query'
import { query } from './utils/query'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={query}>
      <TasksProvider>
        <RouterProvider router={router}/>
      </TasksProvider>
    </QueryClientProvider>
  </StrictMode>
)
