import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import { CollegeProvider } from './context/CollegeContext'
import './index.css'
import router from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <CollegeProvider>
          <RouterProvider router={router} />
        </CollegeProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
