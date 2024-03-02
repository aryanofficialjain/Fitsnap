import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextResultProvider } from "../src/context/ContextResultProvider.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextResultProvider>
      <App />
    </ContextResultProvider>
  </React.StrictMode>,
)
