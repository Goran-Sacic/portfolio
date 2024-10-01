import React, { useContext } from 'react';
import styles from './SEOoptimization.module.css';
import SEO from '../assets/images/SEO.png';
import { LanguageContext } from '../contexts/LanguageContext';
import seoOptimizationTexts from '../texts/SeoOptimizationTexts';

const SEOoptimization = () => {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;

  const { title, description, imgAlt } =
    seoOptimizationTexts[language] || seoOptimizationTexts['eng'];

  return (
    <div className={styles.seoContainer}>
      <div className={styles.seoDesc}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.seoImg}>
        <img src={SEO} alt={imgAlt} />
      </div>
    </div>
  );
};

export default SEOoptimization;
