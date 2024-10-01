import * as React from 'react';
import styles from './Projects.module.css';
import GoGoFood from '../assets/images/GoGoFood.jpg';
import WorkoutBuddy from '../assets/images/WorkoutBuddy.jpg';
import CoursesApp from '../assets/images/CoursesApp.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import { LanguageContext } from '../contexts/LanguageContext';
import projectsTexts from '../texts/ProjectTexts';

const Projects = () => {
  const languageContext = React.useContext(LanguageContext);
  const { language } = languageContext;

  const {
    title,
    GoGoFoodDescription,
    WorkoutBuddyDescription,
    CoursesAppDescription,
  } = projectsTexts[language] || projectsTexts['eng'];

  return (
    <div>
      <div className={styles.projects}>
        <ScrollAnimation
          animateIn="bounceInDown"
          animateOut="fadeOut"
          duration={2}
        >
          <h1>{title}</h1>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounceInDown"
          animateOut="fadeOut"
          duration={2}
        >
          <div className={styles.projectsContainer}>
            <div className={styles.project}>
              <div className={styles.imgDiv}>
                <img src={GoGoFood} />
              </div>
              <h3>GOGO FOOD</h3>
              <p className={styles.descp}>{GoGoFoodDescription}</p>
              <p>
                <span style={{ fontWeight: 'bold' }}>TECH STACK:</span> ReactJS,
                Firebase
              </p>
              <span className={styles.links}>
                <a
                  href="https://github.com/Goran-Sacic/food-order-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className={styles.fontAwesome}
                    icon={faGithub}
                  />
                </a>
                <a
                  href="https://food-order-app-gs.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className={styles.fontAwesome}
                    icon={faGlobe}
                  />
                </a>
              </span>
            </div>
            <div className={styles.project}>
              <div className={styles.imgDiv}>
                <img src={WorkoutBuddy} />
              </div>
              <h3>WORKOUT BUDDY</h3>
              <p className={styles.descp}>{WorkoutBuddyDescription}</p>
              <p>
                <span style={{ fontWeight: 'bold' }}>TECH STACK:</span> MERN
                Stack - ReactJS, Node.js, Express.js, MongoDB
              </p>
              <span className={styles.links}>
                <a
                  href="https://github.com/Goran-Sacic/workout-buddy-0.1.0-frontend"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className={styles.fontAwesome}
                    icon={faGithub}
                  />
                </a>
                <a
                  href="https://workout-buddy-0-1-0-frontend.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className={styles.fontAwesome}
                    icon={faGlobe}
                  />
                </a>
              </span>
            </div>
            <div className={styles.project}>
              <div className={styles.imgDiv}>
                <img src={CoursesApp} />
              </div>
              <h3>COURSES APP</h3>
              <p className={styles.descp}>{CoursesAppDescription}</p>
              <p>
                <span style={{ fontWeight: 'bold' }}>TECH STACK:</span> ReactJS
                (Redux, Router, Axios), TypeScript
              </p>
              <span className={styles.links}>
                <a
                  href="https://github.com/Goran-Sacic/courses-app-frontend"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className={styles.fontAwesome}
                    icon={faGithub}
                  />
                </a>
                <a
                  href="https://courses-app-6d92.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className={styles.fontAwesome}
                    icon={faGlobe}
                  />
                </a>
              </span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Projects;
