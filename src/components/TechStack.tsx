import React, { useContext } from 'react';
import styles from './TechStack.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faJs,
  faReact,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import frontendCodeImg from '../assets/images/frontend-code.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';
import { LanguageContext } from '../contexts/LanguageContext';
import techStackTexts from '../texts/TechStackTexts';

const TechStack = () => {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;

  const {
    HtmlCss,
    JsTs,
    React,
    NodejsExpressjs,
    FirebaseMongodb,
    performanceOptimizationTitle,
    performanceOptimizationDescription,
  } = techStackTexts[language] || techStackTexts['eng'];

  return (
    <div>
      <div className={styles.techStackContainer}>
        <div>
          <h2>Frontend stack</h2>
        </div>
        <span className={styles.horizontalLine}></span>
        <div className={styles.techStack}>
          <div>
            <FontAwesomeIcon
              className={styles.fontAwesome}
              icon={faHtml5}
              style={{
                fontSize: '80px',
              }}
            />
            <h3>HTML&CSS</h3>
            <p>{HtmlCss}</p>
          </div>
          <div>
            <FontAwesomeIcon
              className={styles.fontAwesome}
              icon={faJs}
              style={{ fontSize: '80px' }}
            />{' '}
            <h3>JavaScript&TypeScript</h3>
            <p>{JsTs}</p>
          </div>
          <div>
            <FontAwesomeIcon
              className={styles.fontAwesome}
              icon={faReact}
              style={{ fontSize: '80px' }}
            />{' '}
            <h3>React</h3>
            <p>{React}</p>
          </div>
        </div>
      </div>

      <div className={styles.frontendCode}>
        <div className={styles.frontendImg}>
          <ScrollAnimation animateIn="fadeIn" duration={2}>
            <img
              src={frontendCodeImg}
              alt="A picture depicting frontend developer code - several lines of frontend code"
            />{' '}
          </ScrollAnimation>
        </div>

        <div className={styles.frontendDesc}>
          <h2>{performanceOptimizationTitle}</h2>
          <p>{performanceOptimizationDescription}</p>
        </div>
      </div>

      <div className={styles.techStackContainer2}>
        <div>
          <h2>Backend stack</h2>
        </div>
        <span className={styles.horizontalLine}></span>
        <div className={styles.techStack2}>
          <div>
            <FontAwesomeIcon
              className={styles.fontAwesome}
              icon={faNodeJs}
              style={{ fontSize: '80px' }}
            />
            <h3>NodeJS&ExpressJS</h3>
            <p>{NodejsExpressjs}</p>
          </div>
          <div>
            <FontAwesomeIcon
              className={styles.fontAwesome}
              icon={faDatabase}
              style={{ fontSize: '80px' }}
            />{' '}
            <h3>Firebase/MongoDB</h3>
            <p>{FirebaseMongodb}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
