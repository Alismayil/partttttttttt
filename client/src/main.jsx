import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WishlistProvider from './context/wishlistContext.jsx'
import BasketProvider from './context/basketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasketProvider>
    <WishlistProvider>
    <App />
    </WishlistProvider>
    </BasketProvider>
  </React.StrictMode>,
)
