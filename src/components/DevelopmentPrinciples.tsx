import React, { useContext } from 'react';
import styles from './DevelopmentPrinciples.module.css';
import { LanguageContext } from '../contexts/LanguageContext';
import developmentPrinciplesTexts from '../texts/DevelopmentPrinciplesTexts';

const DevelopmentPrinciples = () => {
  const { language } = useContext(LanguageContext);
  const {
    pageTitle,
    performanceOptimization,
    responsiveDesign,
    seoOptimization,
    accessibility,
  } = developmentPrinciplesTexts[language];

  return (
    <div>
      <div className={styles.pageTitle}>
        <h1>{pageTitle.title.toUpperCase()}</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.principleCard}>
          <img
            src={performanceOptimization.imgSrc}
            alt={performanceOptimization.imgAlt}
            className={styles.principleImg}
          />
          <h3 className={styles.principleTitle}>
            {performanceOptimization.title.toUpperCase()}
          </h3>
          <p className={styles.principleDescription}>
            {performanceOptimization.description}
          </p>
        </div>

        <div className={styles.principleCard}>
          <img
            src={responsiveDesign.imgSrc}
            alt={responsiveDesign.imgAlt}
            className={styles.principleImg}
          />
          <h3 className={styles.principleTitle}>
            {responsiveDesign.title.toUpperCase()}
          </h3>
          <p className={styles.principleDescription}>
            {responsiveDesign.description}
          </p>
        </div>

        <div className={styles.principleCard}>
          <img
            src={seoOptimization.imgSrc}
            alt={seoOptimization.imgAlt}
            className={styles.principleImg}
          />
          <h3 className={styles.principleTitle}>
            {seoOptimization.title.toUpperCase()}
          </h3>
          <p className={styles.principleDescription}>
            {seoOptimization.description}
          </p>
        </div>
        <div className={styles.principleCard}>
          <img
            src={accessibility.imgSrc}
            alt={accessibility.imgAlt}
            className={styles.principleImg}
          />
          <h3 className={styles.principleTitle}>
            {accessibility.title.toUpperCase()}
          </h3>
          <p className={styles.principleDescription}>
            {accessibility.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentPrinciples;
