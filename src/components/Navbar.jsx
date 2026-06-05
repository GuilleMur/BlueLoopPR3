import React from 'react';
import { useLocation } from 'react-router-dom';
import { usePageTransition } from '../hooks/usePageTransition';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  // Extraemos t (traductor), toggleLanguage (función de cambio) y locale (idioma actual)
  const { toggleLanguage, locale, t } = useLanguage();
  const transitionTo = usePageTransition();
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav id="main-nav" className="navbar">
      <div className="logo">
        <button onClick={() => transitionTo('/')} className="logo-btn">
          <img src="/img/Blueloop.png" alt="Logo" className="logo-img static" />
          <img src="/img/ezgif.com-reverse.gif" alt="Logo animado" className="logo-img active" />
        </button>
      </div>
      <ul className="nav-links">
        <li>
          <button 
            onClick={() => transitionTo('/')} 
            className={`nav-btn ${isActive('/')}`}
          >
            {t('nav-home')} {/* Traducido */}
          </button>
        </li>
        <li>
          <button 
            onClick={() => transitionTo('/aboutus')} 
            className={`nav-btn ${isActive('/aboutus')}`}
          >
            {t('nav-about')} {/* Traducido */}
          </button>
        </li>
        <li>
          <button 
            onClick={() => transitionTo('/shop')} 
            className={`nav-btn ${isActive('/shop')}`}
          >
            {t('nav-shop')} {/* Traducido */}
          </button>
        </li>
        <li>
          <button 
            onClick={() => transitionTo('/cart')} 
            className={`nav-btn ${isActive('/cart')}`}
          >
            {t('nav-cart')} {/* Traducido */}
          </button>
        </li>
        <li>
          <button onClick={scrollToContact} className="btn-contact">
            {t('nav-contact')} {/* Traducido */}
          </button>
        </li>
        <li>
          <button onClick={toggleLanguage} className="btn-language">
            <img 
              src={locale === 'es' ? "/img/Spanish.webp" : "/img/English.jpg"} 
              alt="Idioma" 
              id="language-flag" 
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;