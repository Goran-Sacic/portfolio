import React, { useEffect, useState, useContext } from 'react';
import styles from './Header.module.css';
import mojLogo from '../assets/logos/kruzni-ja2.png';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ArrowForwardIosIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { LanguageContext } from '../contexts/LanguageContext';
import headerTexts from '../texts/HeaderTexts';

interface HeaderProps {
  scrollToHome: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  scrollToAbout: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  scrollToProjects: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  scrollToContact: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Header = ({
  scrollToHome,
  scrollToAbout,
  scrollToProjects,
  scrollToContact,
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setFirstRender(true);
    }
  };

  const languageContext = useContext(LanguageContext);
  const { language, setLanguage } = languageContext;

  const { languageIndicator, home, about, projects, contact, languagePicker } =
    headerTexts[language] || headerTexts['eng'];

  const setEnglishLanguage = (): void => {
    setLanguage('eng');
    localStorage.setItem('lang', 'eng');
  };

  const setCroatianLanguage = (): void => {
    setLanguage('cro');
    localStorage.setItem('lang', 'cro');
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [isButtonVisible, setIsButtonVisible] = useState(
    window.innerWidth > 768
  );

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setIsButtonVisible(currentWidth > 768);
      if (currentWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.headerTop}>
      <div className={styles.header}>
        <span className={styles.logo}>
          <img src={mojLogo} />
        </span>
        <div className={styles.navAndLangPicker}>
          <div>
            {isButtonVisible && (
              <Button
                id="basic-button"
                size="small"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                onMouseEnter={handleOpen}
                sx={{ color: 'white', border: '1px solid white' }}
                endIcon={
                  <ArrowForwardIosIcon
                    sx={{
                      transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease-in-out',
                      paddingBottom: '2px',
                    }}
                  />
                }
              >
                {languageIndicator}
              </Button>
            )}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
                onMouseLeave: handleClose,
              }}
              disableScrollLock={true}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  setEnglishLanguage();
                }}
              >
                ENG
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setCroatianLanguage();
                }}
              >
                CRO
              </MenuItem>
            </Menu>
          </div>
          <nav
            aria-hidden={!isMenuOpen}
            className={`${styles.navigation} ${isMenuOpen ? styles.active : ''}`}
          >
            {isMenuOpen && (
              <div>
                <p>{languagePicker}</p>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="large"
                          sx={{
                            color: 'silver',
                            '&.Mui-checked': {
                              color: 'rgb(186, 181, 255)',
                            },
                          }}
                          checked={language === 'eng'}
                          onChange={() => {
                            setFirstRender(true);
                            setEnglishLanguage();
                          }}
                        />
                      }
                      label="ENG"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="large"
                          sx={{
                            color: 'silver',
                            '&.Mui-checked': {
                              color: 'rgb(186, 181, 255)',
                            },
                          }}
                          checked={language === 'cro'}
                          onChange={() => {
                            setFirstRender(true);
                            setCroatianLanguage();
                          }}
                        />
                      }
                      label="CRO"
                    />
                  </FormGroup>
                </div>
              </div>
            )}
            <ul>
              <li>
                <a
                  className={styles.linkAnimation}
                  href="#home"
                  onClick={(e) => {
                    scrollToHome(e);
                    if (isMenuOpen) {
                      toggleMenu();
                    }
                  }}
                >
                  {home}
                </a>
              </li>
              <li>
                <a
                  className={styles.linkAnimation}
                  href="#about"
                  onClick={(e) => {
                    scrollToAbout(e);
                    if (isMenuOpen) {
                      toggleMenu();
                    }
                  }}
                >
                  {about}
                </a>
              </li>
              <li>
                <a
                  className={styles.linkAnimation}
                  href="#projects"
                  onClick={(e) => {
                    scrollToProjects(e);
                    if (isMenuOpen) {
                      toggleMenu();
                    }
                  }}
                >
                  {projects}
                </a>
              </li>
              <li>
                <a
                  className={styles.linkAnimation}
                  href="#contact"
                  onClick={(e) => {
                    scrollToContact(e);
                    if (isMenuOpen) {
                      toggleMenu();
                    }
                  }}
                >
                  {contact}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={isMenuOpen ? styles.showMenu : styles.hideMenu}></div>
          <div
            className={
              isMenuOpen
                ? styles.noLine
                : firstRender
                  ? styles.showLine
                  : styles.showLineFirstRender
            }
          ></div>
          <div
            className={isMenuOpen ? styles.showMenu2 : styles.hideMenu2}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
