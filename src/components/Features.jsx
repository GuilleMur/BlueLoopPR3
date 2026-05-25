import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  const featureList = [
    {
      icon: "💧",
      titleKey: "feature-pure-quality",
      descKey: "feature-pure-quality-desc",
    },
    {
      icon: "🚚",
      titleKey: "feature-convenient-delivery",
      descKey: "feature-convenient-delivery-desc",
    },
    {
      icon: "🌿",
      titleKey: "feature-eco-friendly",
      descKey: "feature-eco-friendly-desc",
    }
  ];

  return (
    <section className="features">
      {featureList.map((feature, index) => (
        <div key={index} className="feature card-glass">
          <div className="feature-icon">{feature.icon}</div>
          <h2>{t(feature.titleKey)}</h2>
          <p>{t(feature.descKey)}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;