import React, { useContext } from 'react';
import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { LanguageContext } from '../contexts/LanguageContext';
import homeTexts from '../texts/HomeTexts';
import MyFace from '../assets/images/leMe2.png';

const Home = () => {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;

  const { title, description, flavourText } =
    homeTexts[language] || homeTexts['eng'];

  return (
    <div className={styles.home}>
      <div className={styles.mainContent}>
        <div className={styles.mainContentDiv}>
          <h1>{title}</h1>
          <div>
            <h2>{description}</h2>
            <h3>{flavourText}</h3>
          </div>
          <div className={styles.mainContentSocials}>
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
        <div className={styles.myImgContainer}>
          <img className={styles.myImg} src={MyFace} />
        </div>
      </div>
    </div>
  );
};

export default Home;
