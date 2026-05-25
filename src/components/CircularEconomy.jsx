import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const CircularEconomy = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: 1,
      icon: "♻️",
      titleKey: "circular-economy-step1",
      descKey: "circular-economy-step1-desc",
    },
    {
      number: 2,
      icon: "🧼",
      titleKey: "circular-economy-step2",
      descKey: "circular-economy-step2-desc",
    },
    {
      number: 3,
      icon: "💨",
      titleKey: "circular-economy-step3",
      descKey: "circular-economy-step3-desc",
    },
    {
      number: 4,
      icon: "💧",
      titleKey: "circular-economy-step4",
      descKey: "circular-economy-step4-desc",
    }
  ];

  return (
    <section className="circular-economy">
      <div className="section-header">
        <h2 className="section-title">{t('circular-economy-title')}</h2>
        <p>{t('circular-economy-desc')}</p>
      </div>

      <div className="cycle-container">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="cycle-step card-glass">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{t(step.titleKey)}</h3>
              <p>{t(step.descKey)}</p>
            </div>
            {/* Solo renderizamos la flecha si no es el último elemento */}
            {index < steps.length - 1 && <div className="cycle-arrow">➜</div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default CircularEconomy;