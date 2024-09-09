import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { query } from './utils/query'
import { Routes } from './router'
import { AuthProvider } from './context/auth/context'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={query}>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
)
