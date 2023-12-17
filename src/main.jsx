import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import AppProvider from './components/contextapi/CreateContext.jsx'
import CartContextProvider from './components/cartcontext/CartContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <App />
  </CartContextProvider>,
)
