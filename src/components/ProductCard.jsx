import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

// 1. Añadimos onAdd a las props
const ProductCard = ({ badge, badgeClass, img, title, size, desc, price, hueRotate = false, onAdd }) => {
  const { t } = useLanguage(); // 2. Extraemos t para las traducciones
  const [quantity, setQuantity] = useState(1);

  const handleMinus = () => quantity > 1 && setQuantity(quantity - 1);
  const handlePlus = () => setQuantity(quantity + 1);

  return (
    <div className="product-card card-glass">
      {badge && <div className={`product-badge ${badgeClass}`}>{badge}</div>}
      
      <div className="product-image">
        <img 
          src={img} 
          alt={title} 
          style={hueRotate ? { filter: 'hue-rotate(180deg)' } : {}} 
        />
      </div>

      <div className="product-details">
        <h3>{title}</h3>
        <span className="product-size">{size}</span>
        <p>{desc}</p>
        
        <div className="product-price-row">
          <span className="price">{price}€</span>
          <div className="quantity-selector">
            <button className="qty-btn minus" onClick={handleMinus}>-</button>
            <input 
              type="number" 
              value={quantity} 
              readOnly 
              className="qty-input" 
            />
            <button className="qty-btn plus" onClick={handlePlus}>+</button>
          </div>
        </div>

        {/* 3. Al hacer clic, enviamos la cantidad seleccionada */}
        <button className="btn-modern btn-add" onClick={() => onAdd(quantity)}>
          {t('btn-add-to-cart') || 'Añadir al carrito'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;