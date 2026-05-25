// src/components/Success.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePageTransition } from '../hooks/usePageTransition';

const Success = () => {
  const { t } = useLanguage();
  const transitionTo = usePageTransition();

  return (
    <main className="success-main-wrapper">
      <div className="order-success-page">
        <section className="order-success-msg card-glass show">
          <div className="success-icon-container">
            <img src="/img/Blueloop.png" alt="Success" style={{ width: '100px', marginBottom: '10px' }} />
          </div>
          <h2 style={{ color: '#00d2ff', margin: '15px 0' }}>{t('cart-ordered-title')}</h2>
          <p style={{ color: '#ffffff', marginBottom: '15px', fontSize: '1.1rem' }}>
            {t('cart-ordered-thanks')}
          </p>
          <button 
            className="btn-modern" 
            onClick={() => transitionTo('/')} 
            style={{ marginTop: '20px' }}
          >
            {t('cart-back-home')}
          </button>
        </section>
      </div>
    </main>
  );
};

export default Success;