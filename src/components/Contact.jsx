import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container card-glass">
        <div className="contact-info">
          <h2>{t('contact-title')}</h2>
          <p>{t('contact-desc')}</p>
          <div className="info-item">
            <span className="icon">📍</span>
            <p>{t('contact-location')}</p>
          </div>
          <div className="info-item">
            <span className="icon">📧</span>
            <p>hello@blueloop.com</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <input 
              type="text" 
              placeholder={t('contact-placeholder-name')} 
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="email" 
              placeholder={t('contact-placeholder-email')} 
              required 
            />
          </div>
          <div className="input-group">
            <textarea 
              placeholder={t('contact-placeholder-msg')} 
              rows="5" 
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-modern">
            {t('contact-btn-send')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;