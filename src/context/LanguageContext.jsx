import React, { createContext, useState, useContext } from 'react';
import { translations } from '../data/languages';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('es');

  const t = (key) => {
    return translations[locale][key] || key;
  };

  const toggleLanguage = () => {
    setLocale((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  return (
    <LanguageContext.Provider value={{ t, toggleLanguage, locale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);