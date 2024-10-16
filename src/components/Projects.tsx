import * as React from 'react';
import styles from './Projects.module.css';
import './Projects.css';

/* Using regular CSS file in addition to CSS Modules file because slick-carousel uses global
class names like .slick-next, which makes this harder to scope within CSS Modules. */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { LanguageContext } from '../contexts/LanguageContext';
import projectsTexts from '../texts/ProjectTexts';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Project_WorkoutBuddyImg from '../assets/images/Project_WorkoutBuddy.png';
import Project_GoGoFoodImg from '../assets/images/Project_GoGoFood.png';
import Project_CoursesAppImg from '../assets/images/Project_CoursesApp.png';
import Personal_Finance_Dashboard from '../assets/images/Personal_finance_dashboard.png';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const SampleNextArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
      }}
      onClick={onClick}
    />
  );
};

const Projects = () => {
  const languageContext = React.useContext(LanguageContext);
  const { language } = languageContext;

  const { title, GoGoFood, WorkoutBuddy, CoursesApp, FinanceDashboard } =
    projectsTexts[language] || projectsTexts['eng'];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 35,
    /* centerMode: true, */
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
      </div>
      <div className="slider-container">
        <Slider {...settings} className="custom-slider-projects">
          <div>
            <div className={styles.project}>
              <img src={Project_WorkoutBuddyImg} />
              <div className={styles.projectInfo}>
                <a
                  href="https://workout-buddy-0-1-0-frontend.onrender.com/"
                  target="_self"
                  rel="noreferrer"
                >
                  <h1>{WorkoutBuddy.title}</h1>
                </a>
                <p>{WorkoutBuddy.description}</p>
                <p>{WorkoutBuddy.techStack}</p>
                <div className={styles.socials}>
                  <a
                    href="https://github.com/Goran-Sacic/workout-buddy-0.1.0-frontend"
                    target="_self"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={styles.fontAwesome}
                      icon={faGithub}
                    />
                  </a>
                  <a
                    href="https://workout-buddy-0-1-0-frontend.onrender.com/"
                    target="_self"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={styles.fontAwesome}
                      icon={faGlobe}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.project}>
              <img src={Project_GoGoFoodImg} />
              <div className={styles.projectInfo}>
                <a
                  href="https://food-order-app-gs.netlify.app/"
                  target="_self"
                  rel="noreferrer"
                >
                  <h1>{GoGoFood.title}</h1>
                </a>
                <p>{GoGoFood.description}</p>
                <p>{GoGoFood.techStack}</p>
                <div className={styles.socials}>
                  <a
                    href="https://github.com/Goran-Sacic/food-order-app"
                    target="_self"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={styles.fontAwesome}
                      icon={faGithub}
                    />
                  </a>
                  <a
                    href="https://food-order-app-gs.netlify.app/"
                    target="_self"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={styles.fontAwesome}
                      icon={faGlobe}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.project}>
              <img src={Project_CoursesAppImg} />
              <div className={styles.projectInfo}>
                <a
                  href="https://courses-app-6d92.onrender.com/"
                  target="_self"
                  rel="noreferrer"
                >
                  <h1>{CoursesApp.title}</h1>
                </a>
                <p>{CoursesApp.description}</p>
                <p>{CoursesApp.techStack}</p>
                <div className={styles.socials}>
                  <a
                    href="https://github.com/Goran-Sacic/courses-app-frontend"
                    target="_self"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={styles.fontAwesome}
                      icon={faGithub}
                    />
                  </a>
                  <a
                    href="https://courses-app-6d92.onrender.com/"
                    target="_self"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={styles.fontAwesome}
                      icon={faGlobe}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.project}>
              <img src={Personal_Finance_Dashboard} />
              <div className={styles.projectInfo}>
                <a
                  href="https://courses-app-6d92.onrender.com/"
                  target="_self"
                  rel="noreferrer"
                >
                  <h1>{FinanceDashboard.title}</h1>
                </a>
                <p>{FinanceDashboard.description}</p>
                <p>{FinanceDashboard.techStack}</p>
                <div className={styles.socials}>
                  <a
                    href="https://github.com/Goran-Sacic/personal-finance-dashboard"
                    target="_self"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={styles.fontAwesome}
                      icon={faGithub}
                    />
                  </a>
                  <a
                    href="https://personalfinancedashboard-gs.netlify.app/"
                    target="_self"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={styles.fontAwesome}
                      icon={faGlobe}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
