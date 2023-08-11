import React from 'react';
import styles from '@/scss/components/HelloWorldWave.module.scss';

const HelloWorldWave: React.FC = () => {
  const text = 'ALBEDYA';
  const waveLetters = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      waveLetters.push(<span key={i}>&nbsp;&nbsp;</span>); // Double espace pour l'espacement
    } else {
      waveLetters.push(
        <span
          key={i}
          style={{ animationDelay: `${i * 0.1}s` }}
          className={styles.wave}
        >
          {text[i]}
        </span>,
      );
    }
  }

  return <div className={styles.container}>{waveLetters}</div>;
};

export default HelloWorldWave;
