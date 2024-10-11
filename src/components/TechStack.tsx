import React, { useContext, useState, useEffect } from 'react';
import styles from './TechStack.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faJs,
  faReact,
  faNodeJs,
  faCss3,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import 'animate.css/animate.compat.css';
import { LanguageContext } from '../contexts/LanguageContext';
import techStackTexts from '../texts/TechStackTexts';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ padding: '10px 0px' }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TechStack = () => {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;

  const {
    LinkText,
    LinkTextAfter,
    Html,
    Css,
    JsTs,
    React,
    NodejsExpressjs,
    FirebaseMongodb,
  } = techStackTexts[language] || techStackTexts['eng'];

  const [value, setValue] = useState(0);

  const handleChange = (
    /* event */ _: React.SyntheticEvent,
    newValue: number
  ) => {
    setValue(newValue);
  };

  const [isTabVisible, setIsTabVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setIsTabVisible(currentWidth > 660);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className={styles.tab}>
        {isTabVisible ? (
          <Box>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: 'rgba(0, 43, 87, 0.15);',
                display: 'flex',
                justifyContent: 'flex-start',
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: 'rgb(0, 43, 87)',
                  },
                }}
              >
                <Tab
                  label="Frontend stack"
                  {...a11yProps(0)}
                  sx={{
                    color: 'rgba(0, 43, 87, 0.5);',
                    marginRight: '50px',
                    fontSize: '1.6em',
                    fontWeight: 'bold',
                    border: '2px solid transparent',
                    '&.Mui-selected': {
                      color: 'rgb(0, 43, 87);',
                    },
                    '&:hover': {
                      borderBottom: '2px solid rgb(54, 69, 79);',
                    },
                  }}
                />
                <Tab
                  label="Backend stack"
                  {...a11yProps(1)}
                  sx={{
                    color: 'rgba(0, 43, 87, 0.5);',
                    marginRight: '50px',
                    fontSize: '1.6em',
                    fontWeight: 'bold',
                    border: '2px solid transparent',
                    '&.Mui-selected': {
                      color: 'rgb(0, 43, 87);',
                    },
                    '&:hover': {
                      borderBottom: '2px solid rgb(54, 69, 79);',
                    },
                  }}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <div className={styles.techStack}>
                <a
                  href="https://kinsta.com/knowledgebase/what-is-html/#what-is-html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className={styles.fontAwesome}
                    icon={faHtml5}
                    style={{
                      fontSize: '60px',
                    }}
                  />
                  <h3>HTML</h3>
                  <p>{Html}</p>
                  <div>
                    <p className={styles.textRight}>
                      {LinkText}
                      HTML{LinkTextAfter}
                    </p>
                    <FontAwesomeIcon
                      className={styles.arrowRight}
                      icon={faArrowRight}
                    />
                  </div>
                </a>
                <a
                  href="https://en.wikipedia.org/wiki/CSS"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className={styles.fontAwesome}
                    icon={faCss3}
                    style={{ fontSize: '60px' }}
                  />{' '}
                  <h3>CSS</h3>
                  <p>{Css}</p>
                  <div>
                    <p className={styles.textRight}>
                      {LinkText}
                      CSS{LinkTextAfter}
                    </p>
                    <FontAwesomeIcon
                      className={styles.arrowRight}
                      icon={faArrowRight}
                    />
                  </div>
                </a>
                <a
                  href="https://hygraph.com/blog/typescript-vs-javascript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className={styles.fontAwesome}
                    icon={faJs}
                    style={{ fontSize: '60px' }}
                  />{' '}
                  <h3>JavaScript&TypeScript</h3>
                  <p>{JsTs}</p>
                  <div>
                    <p className={styles.textRight}>
                      {LinkText}
                      JavaScript&TypeScript{LinkTextAfter}
                    </p>
                    <FontAwesomeIcon
                      className={styles.arrowRight}
                      icon={faArrowRight}
                    />
                  </div>
                </a>
                <a href="https://react.dev/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    className={styles.fontAwesome}
                    icon={faReact}
                    style={{ fontSize: '60px' }}
                  />{' '}
                  <h3>React</h3>
                  <p>{React}</p>
                  <div>
                    <p className={styles.textRight}>
                      {LinkText}
                      React{LinkTextAfter}
                    </p>
                    <FontAwesomeIcon
                      className={styles.arrowRight}
                      icon={faArrowRight}
                    />
                  </div>
                </a>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <div className={styles.techStack}>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className={styles.fontAwesome}
                    icon={faNodeJs}
                    style={{ fontSize: '60px' }}
                  />
                  <h3>NodeJS&ExpressJS</h3>
                  <p>{NodejsExpressjs}</p>
                  <div>
                    <p className={styles.textRight}>
                      {LinkText}
                      NodeJS&ExpressJS{LinkTextAfter}
                    </p>
                    <FontAwesomeIcon
                      className={styles.arrowRight}
                      icon={faArrowRight}
                    />
                  </div>
                </a>
                <a
                  href="https://www.mongodb.com/resources/basics/databases/nosql-explained"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className={styles.fontAwesome}
                    icon={faDatabase}
                    style={{ fontSize: '60px' }}
                  />{' '}
                  <h3>Firebase/MongoDB</h3>
                  <p>{FirebaseMongodb}</p>
                  <div>
                    <p className={styles.textRight}>
                      {LinkText}
                      Firebase/MongoDB{LinkTextAfter}
                    </p>
                    <FontAwesomeIcon
                      className={styles.arrowRight}
                      icon={faArrowRight}
                    />
                  </div>
                </a>
              </div>
            </CustomTabPanel>
          </Box>
        ) : (
          <Box>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: 'rgb(0, 43, 87)',
                display: 'flex',
                justifyContent: 'flex-start',
                marginBottom: '20px',
              }}
            >
              <h2
                style={{
                  fontSize: '1.7em',
                  marginRight: '50px',
                  fontWeight: 'bold',
                  marginTop: '30px',
                }}
              >
                FRONTEND STACK
              </h2>
            </Box>
            <div className={styles.techStack}>
              <a
                href="https://kinsta.com/knowledgebase/what-is-html/#what-is-html"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className={styles.fontAwesome}
                  icon={faHtml5}
                  style={{ fontSize: '60px' }}
                />
                <h3>HTML</h3>
                <p style={{ paddingBottom: '60px' }}>{Html}</p>
                <div>
                  <p className={styles.textRight}>
                    {LinkText}
                    HTML{LinkTextAfter}
                  </p>
                  <FontAwesomeIcon
                    className={styles.arrowRight}
                    icon={faArrowRight}
                  />
                </div>
              </a>
              <a
                href="https://en.wikipedia.org/wiki/CSS"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className={styles.fontAwesome}
                  icon={faCss3}
                  style={{ fontSize: '60px' }}
                />
                <h3>CSS</h3>
                <p style={{ paddingBottom: '60px' }}>{Css}</p>
                <div>
                  <p className={styles.textRight}>
                    {LinkText}
                    CSS{LinkTextAfter}
                  </p>
                  <FontAwesomeIcon
                    className={styles.arrowRight}
                    icon={faArrowRight}
                  />
                </div>
              </a>
              <a
                href="https://hygraph.com/blog/typescript-vs-javascript"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className={styles.fontAwesome}
                  icon={faJs}
                  style={{ fontSize: '60px' }}
                />
                <h3>JavaScript & TypeScript</h3>
                <p style={{ paddingBottom: '60px' }}>{JsTs}</p>
                <div>
                  <p className={styles.textRight}>
                    {LinkText}
                    JavaScript&TypeScript{LinkTextAfter}
                  </p>
                  <FontAwesomeIcon
                    className={styles.arrowRight}
                    icon={faArrowRight}
                  />
                </div>
              </a>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  className={styles.fontAwesome}
                  icon={faReact}
                  style={{ fontSize: '60px' }}
                />
                <h3>React</h3>
                <p style={{ paddingBottom: '60px' }}>{React}</p>
                <div>
                  <p className={styles.textRight}>
                    {LinkText}
                    React{LinkTextAfter}
                  </p>
                  <FontAwesomeIcon
                    className={styles.arrowRight}
                    icon={faArrowRight}
                  />
                </div>
              </a>
            </div>

            <Box
              sx={{
                borderBottom: 1,
                borderColor: 'rgb(0, 43, 87)',
                display: 'flex',
                justifyContent: 'flex-start',
                marginTop: '50px',
                marginBottom: '20px',
              }}
            >
              <h2
                style={{
                  fontSize: '1.7em',
                  marginRight: '50px',
                  fontWeight: 'bold',
                  marginTop: '30px',
                }}
              >
                BACKEND STACK
              </h2>
            </Box>

            <div className={styles.techStack}>
              <a
                href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className={styles.fontAwesome}
                  icon={faNodeJs}
                  style={{ fontSize: '60px' }}
                />
                <h3>NodeJS & ExpressJS</h3>
                <p style={{ paddingBottom: '60px' }}>{NodejsExpressjs}</p>
                <div>
                  <p className={styles.textRight}>
                    {LinkText}
                    NodeJS&ExpressJS{LinkTextAfter}
                  </p>
                  <FontAwesomeIcon
                    className={styles.arrowRight}
                    icon={faArrowRight}
                  />
                </div>
              </a>
              <a
                href="https://www.mongodb.com/resources/basics/databases/nosql-explained"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className={styles.fontAwesome}
                  icon={faDatabase}
                  style={{ fontSize: '60px' }}
                />
                <h3>Firebase/MongoDB</h3>
                <p style={{ paddingBottom: '60px' }}>{FirebaseMongodb}</p>
                <div>
                  <p className={styles.textRight}>
                    {LinkText}
                    Firebase/MongoDB{LinkTextAfter}
                  </p>
                  <FontAwesomeIcon
                    className={styles.arrowRight}
                    icon={faArrowRight}
                  />
                </div>
              </a>
            </div>
          </Box>
        )}
      </div>
    </div>
  );
};

export default TechStack;
