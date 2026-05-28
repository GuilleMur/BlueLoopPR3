import React from 'react';
import TeamCard from './TeamCard';
import Contact from './Contact';
import { useLanguage } from '../context/LanguageContext';

const AboutUs = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: "Javier Ochando Vidal",
      role: t('team-role-javier'),
      desc: t('team-desc-javier'),
      img: "/img/Javier.jpeg"
    },
    {
      name: "Daniel Cantó Catalán",
      role: t('team-role-dani'),
      desc: t('team-desc-dani'),
      img: "/img/Dani.jpg"
    },
    {
      name: "Rafael Murgadas Valenzuela",
      role: t('team-role-rafa'),
      desc: t('team-desc-rafa'),
      img: "/img/Rafa.jpg"
    },
    {
      name: "Guillermo Murgadas Valenzuela",
      role: t('team-role-guillermo'),
      desc: t('team-desc-guillermo'),
      img: "/img/Guille.jpg"
    }
  ];

  return (
    <main>
      <section className="about-hero">
        <h1 className="section-title">{t('about-title')}</h1>
        <p className="subtitle">
          {t('about-subtitle')}
        </p>
      </section>

      <section className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamCard 
            key={index}
            name={member.name}
            role={member.role}
            desc={member.desc}
            img={member.img}
          />
        ))}
      </section>
      <Contact />
    </main>
  );
};

export default AboutUs;