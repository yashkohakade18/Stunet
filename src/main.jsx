import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import { CollegeProvider } from './context/CollegeContext'
import { ToastProvider } from './context/ToastContext'
import './index.css'
import router from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <CollegeProvider>
          <ToastProvider>
            <RouterProvider router={router} />
          </ToastProvider>
        </CollegeProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
