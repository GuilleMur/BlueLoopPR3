import React, { useState } from 'react';
import Contact from './Contact';
import { useLanguage } from '../context/LanguageContext';
import { usePageTransition } from '../hooks/usePageTransition'; 
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { t } = useLanguage();
  const transitionTo = usePageTransition(); 
  const { cartItems, updateQuantity, removeItem, cartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    
    setIsProcessing(true);

    try {
      // Petición HTTP POST a nuestro nuevo servidor Node.js
      const response = await fetch('https://spotted-case-sturdy.ngrok-free.dev/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: 1, // Usuario de prueba de la base de datos
          total_price: cartTotal,
          items: cartItems 
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsProcessing(false);
        clearCart();             // Vaciamos el carrito en React
        transitionTo('/success'); // Cortina azul hacia la pantalla de éxito
      } else {
        alert('Hubo un error en el servidor al procesar el pago.');
        setIsProcessing(false);
      }

    } catch (error) {
      console.error('Error de red/conexión:', error);
      alert('No se pudo conectar con el servidor backend.');
      setIsProcessing(false);
    }
  }; // <-- Llave de cierre de handleCheckout corregida

  return (
    <main>
      <div className="cart-page">
        <div className="cart-main-content">
          <section className={`cart-container card-glass ${isProcessing ? 'processing-fade' : ''}`}>
            <h1>{t('cart-title')}</h1>
            
            <div className="cart-table">
              {cartItems.length === 0 ? (
                <p style={{ textAlign: 'center', padding: '20px' }}>Tu carrito está vacío</p>
              ) : (
                cartItems.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.img} alt={item.title} />
                    <div className="item-info">
                      <h3>{item.title}</h3>
                      <span>{item.price.toFixed(2)}€</span>
                    </div>
                    <div className="quantity-selector">
                      <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <input type="number" value={item.quantity} readOnly className="qty-input" />
                      <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                    <span className="item-total">{(item.quantity * item.price).toFixed(2)}€</span>
                    <button className="remove-item" onClick={() => removeItem(item.id)}>✕</button>
                  </div>
                ))
              )}
            </div>

            <div className="cart-summary">
              <div className="summary-row total">
                <span>Total:</span>
                <span>{cartTotal.toFixed(2)}€</span>
              </div>
              <button 
                className="btn-modern" 
                onClick={handleCheckout} 
                disabled={isProcessing || cartItems.length === 0}
              >
                {isProcessing ? t('cart-processing') : t('cart-btn-confirm')}
              </button>
            </div>
          </section>
        </div>
      </div> 
      <Contact />
    </main>
  );
};

export default Cart;