import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/home/index.tsx'
import Login from './components/common/login.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <div>Not found</div>,
  },
  {
    path: '/home',
    element: <Home />,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
