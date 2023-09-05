import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Bloco de ROtas
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from '.routesHome.jsx';
import Produtos from '.routesHome.jsx';
import EditarProdutos from '.routesHome.jsx';
import Error404 from '.routesHome.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
