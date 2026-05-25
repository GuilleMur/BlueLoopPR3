import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePageTransition } from '../hooks/usePageTransition';

const Hero = () => {
  const { t } = useLanguage();
  const transitionTo = usePageTransition(); // Hook para la navegación con cortina
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ['intro', 'intro2', 'intro3', 'intro4'];

  // Lógica del carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text card-glass">
          <h1>
            {t('hero-welcome')} <span className="brand-color">BlueLoop</span>
          </h1>
          <p>
            {t('hero-desc')}
          </p>
          
          {/* Cambiamos el link por un botón que usa transitionTo */}
          <button 
            onClick={() => transitionTo('/shop')} 
            className="btn-modern"
          >
            {t('btn-shop')}
          </button>
        </div>

        <div className="hero-carousel card-glass">
          <div className="carousel-track-container">
            <ul className="carousel-track">
              {images.map((img, i) => (
                <li 
                  key={i} 
                  className={`carousel-slide ${i === currentSlide ? 'current-slide' : ''}`}
                  style={{ display: i === currentSlide ? 'block' : 'none' }}
                >
                  <img className="carousel-image" src={`/img/${img}.png`} alt="Agua" />
                </li>
              ))}
            </ul>
          </div>
          <div className="carousel-nav">
            {images.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentSlide(i)}
                className={`carousel-indicator ${i === currentSlide ? 'current-slide' : ''}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;