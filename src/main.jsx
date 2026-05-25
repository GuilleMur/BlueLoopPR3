import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css' // Aquí es donde conectarás tus estilos
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext'; // Importalo aquí

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </LanguageProvider>
  </React.StrictMode>
);