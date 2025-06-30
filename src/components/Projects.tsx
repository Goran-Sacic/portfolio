import * as React from 'react';
import styles from './Projects.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { LanguageContext } from '../contexts/LanguageContext';
import projectsTexts from '../texts/ProjectTexts';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Project_CateringApp from '../assets/images/cateringapp.webp';
import Project_RadioApp from '../assets/images/radioapp.webp';
import Project_ConstructionWebsite from '../assets/images/ztbgradnja.webp';

const Projects = () => {
  const languageContext = React.useContext(LanguageContext);
  const { language } = languageContext;

  const { title, CateringApp, RadioApp, ConstructionWebsite } =
    projectsTexts[language] || projectsTexts['eng'];

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
      </div>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        a11y={{ enabled: true }}
        className={styles.swiper}
      >
        <SwiperSlide>
          <div className={styles.project}>
            <img src={Project_CateringApp} alt="Catering App Preview" />
            <div className={styles.projectInfo}>
              <a
                href="https://catering-ac.fly.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <h1>{CateringApp.title}</h1>
              </a>
              <p>{CateringApp.description}</p>
              <p>{CateringApp.techStack}</p>
              <div className={styles.socials}>
                <a
                  href="https://catering-ac.fly.dev/"
                  target="_blank"
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
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.project}>
            <img src={Project_RadioApp} alt="Radio App Preview" />
            <div className={styles.projectInfo}>
              <a
                href="https://radio-master-5000.fly.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <h1>{RadioApp.title}</h1>
              </a>
              <p>{RadioApp.description}</p>
              <p>{RadioApp.techStack}</p>
              <div className={styles.socials}>
                <a
                  href="https://radio-master-5000.fly.dev/"
                  target="_blank"
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
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.project}>
            <img
              src={Project_ConstructionWebsite}
              alt="Construction Site Preview"
            />
            <div className={styles.projectInfo}>
              <a href="http://ztbgradnja.xyz/" target="_blank" rel="noreferrer">
                <h1>{ConstructionWebsite.title}</h1>
              </a>
              <p>{ConstructionWebsite.description}</p>
              <p>{ConstructionWebsite.techStack}</p>
              <div className={styles.socials}>
                <a
                  href="http://ztbgradnja.xyz/"
                  target="_blank"
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
