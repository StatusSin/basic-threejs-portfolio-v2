import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Styles
import './index.css'

// Pages
import PortfolioHome from './pages/PortfolioHome.jsx'
import MachineLearningProjects from "./pages/projects/MachineLearningProjects.jsx";
import BackendProjects from "./pages/projects/BackendProjects.jsx";
import FrontendProjects from "./pages/projects/FrontendProjects.jsx";

const router = createBrowserRouter([
    { path: "/", element: <PortfolioHome /> },
    { path: "/MachineLearningProjects", element: <MachineLearningProjects /> },
    { path: "/BackendProjects", element: <BackendProjects /> },
    { path: "/FrontendProjects", element: <FrontendProjects /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
