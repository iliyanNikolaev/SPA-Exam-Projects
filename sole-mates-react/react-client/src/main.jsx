import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext.jsx'
import { ShoesContextProvider } from './contexts/ShoesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <ShoesContextProvider>
        <App />
      </ShoesContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
)
