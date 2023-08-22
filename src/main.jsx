import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Pedido from './Pedido.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Pedido />
  </React.StrictMode>,
)
