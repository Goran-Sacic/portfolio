import React, { useContext } from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { LanguageContext } from '../contexts/LanguageContext';
import footerTexts from '../texts/FooterTexts';

const Footer = () => {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;

  const { name, desc, socialsTitle, copyright } =
    footerTexts[language] || footerTexts['eng'];

  return (
    <div className={styles.footerContainer}>
      <div className={styles.descAndSocials}>
        <div className={styles.desc}>
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>
        <div className={styles.socials}>
          <h3>{socialsTitle}</h3>
          <div className={styles.socialsIcons}>
            <a
              href="https://github.com/Goran-Sacic"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className={styles.fontAwesome} icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/goran-sa%C4%8Di%C4%87-b6b4351a7/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className={styles.fontAwesome}
                icon={faLinkedin}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.copyright}>
        <p>
          {copyright}{' '}
          <a href="https://goransacic.com/" target="_blank" rel="noreferrer">
            Goran Sačić
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
