import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TasksProvider } from './context/fetch-tasks/context'
import { QueryClientProvider } from '@tanstack/react-query'
import { query } from './utils/query'
import { Routes } from './router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={query}>
      <TasksProvider>
        <Routes/>
      </TasksProvider>
    </QueryClientProvider>
  </StrictMode>
)
