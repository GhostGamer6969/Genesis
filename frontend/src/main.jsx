import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AddCreds from './pages/AddCreds.jsx';
import VaultPage from './pages/VaultPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AddPhotos from './pages/AddPhotos.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },

  {
    path: "/creds",
    element: <AddCreds/>,
  },
  {
    path: "/vault",
    element: <VaultPage/>,
  },

  {
    path: "/photos",
    element: <AddPhotos/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
