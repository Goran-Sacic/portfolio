import React, { useRef } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Home from './components/Home';
import TechStack from './components/TechStack';
import ResponsiveDesign from './components/ResponsiveDesign';
import Projects from './components/Projects';
import SEOoptimization from './components/SEOoptimization';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  const headerRef = useRef<null | HTMLDivElement>(null);
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);

  const scrollToHome = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.app}>
      <div ref={headerRef}></div>
      <Header
        scrollToHome={scrollToHome}
        scrollToAbout={scrollToAbout}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />
      <Home />
      <div ref={aboutRef}></div>
      <TechStack />
      <ResponsiveDesign />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <SEOoptimization />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
