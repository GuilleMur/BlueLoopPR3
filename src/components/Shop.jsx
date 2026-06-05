import React from 'react';
import ProductCard from './ProductCard';
import Contact from './Contact';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext'; 

const Shop = () => {
  const { t } = useLanguage();
  const { addToCart } = useCart(); // <--- Usamos el hook del carrito

  const products = [
    { id: 'natural', title: 'prod-natural-title', price: 8.50, img: '/img/Blueloop.png',badgeKey: 'badge-best-value' },
    { id: 'sparkling', title: 'prod-sparkling-title', price: 9.90, img: '/img/Blueloop.png',badgeKey: 'badge-sparkling', hueRotate: true }
  ];

  return (
    <main>
      <section className="shop-hero">
        <h1 className="section-title">{t('shop-title')}</h1>
        <p className="subtitle">{t('shop-subtitle')}</p>
      </section>

      <section className="products-section">
        <div className="products-container">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              badge={t(product.badgeKey)}
              badgeClass={product.hueRotate ? "eco" : ""}
              img={product.img}
              title={t(product.titleKey)}
              price={product.price}
              hueRotate={product.hueRotate}
              // 3. Pasamos la función como una prop llamada 'onAdd'
              onAdd={(qty) => addToCart({
                id: product.id,
                title: t(product.titleKey),
                price: product.price,
                img: product.img,
                quantity: qty // <--- Antes faltaba pasar esto aquí
              })}
            />
          ))}
        </div>
      </section>
      <Contact />
    </main>
  );
};

export default Shop;