import React, { useContext } from 'react';
import styles from './ResponsiveDesing.module.css';
import responsiveDesignImg from '../assets/images/responsive_design.png';
import ScrollAnimation from 'react-animate-on-scroll';
import { LanguageContext } from '../contexts/LanguageContext';
import responsiveDesignTexts from '../texts/ResponsiveDesignTexts';

const ResponsiveDesign = () => {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;

  const { title, description, imgAlt } =
    responsiveDesignTexts[language] || responsiveDesignTexts['eng'];

  return (
    <div className={styles.responsiveDesign}>
      <div>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={3}>
          <h1>{title}</h1>
          <p>{description}</p>
        </ScrollAnimation>
      </div>
      <ScrollAnimation
        animateIn="backInRight"
        animateOut="backOutRight"
        duration={1}
      >
        <img src={responsiveDesignImg} alt={imgAlt} />
      </ScrollAnimation>
    </div>
  );
};

export default ResponsiveDesign;
