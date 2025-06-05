import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PortfolioMain from './pages/PortfolioMain.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioMain />
  </StrictMode>,
)
