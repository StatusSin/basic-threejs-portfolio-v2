import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PortfolioHome from './pages/PortfolioHome.jsx'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <PortfolioHome />
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioHome />
  </StrictMode>,
)
