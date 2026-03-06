import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProduct from './components/ContextProduct.jsx'
import CartProvider from './components/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <ContextProduct>
      <CartProvider>
        <App />
      </CartProvider>
    </ContextProduct>

)
