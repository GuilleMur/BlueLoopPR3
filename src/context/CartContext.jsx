import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Función para añadir al carrito
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Buscamos si el producto ya estaba en el carrito
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          // Si ya existe, le SUMAMOS la cantidad que viene de la tienda (product.quantity)
          item.id === product.id 
            ? { ...item, quantity: item.quantity + product.quantity } 
            : item
        );
      }
      
      // Si no existe, lo añadimos tal cual viene (ya lleva su propiedad quantity)
      return [...prevItems, product];
    });
  };
  const clearCart = () => {
    setCartItems([]);
  };
  // Función para cambiar cantidad (+ / -)
  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  // Función para eliminar producto
  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem, cartTotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);