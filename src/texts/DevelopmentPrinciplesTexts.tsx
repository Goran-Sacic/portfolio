import frontendCodeImg from '../assets/images/frontend-code.png';
import responsiveDesignImg from '../assets/images/responsive_design.png';
import seoImg from '../assets/images/SEO.png';
import accessibilityImg from '../assets/images/Accessibility.svg';

interface DevelopmentPrinciplesTexts {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
}

interface PageTitle {
  title: string;
}

interface AllPrinciples {
  performanceOptimization: DevelopmentPrinciplesTexts;
  responsiveDesign: DevelopmentPrinciplesTexts;
  seoOptimization: DevelopmentPrinciplesTexts;
  accessibility: DevelopmentPrinciplesTexts;
  pageTitle: PageTitle;
}

interface SupportedLanguages {
  eng: AllPrinciples;
  cro: AllPrinciples;
}

const developmentPrinciplesTexts: SupportedLanguages = {
  eng: {
    pageTitle: {
      title: 'My approach to Excellence in Web Development',
    },
    performanceOptimization: {
      title: 'Performance optimization',
      description:
        'Deliver fast, efficient apps by writing clean code, reducing bundle size, and following best practices for speed and performance.',
      imgSrc: frontendCodeImg,
      imgAlt: 'Example of clean and optimized frontend code.',
    },
    responsiveDesign: {
      title: 'Responsive design',
      description:
        'Designing and developing web pages that adapt seamlessly to any screen size, ensuring an optimal user experience on all devices, from mobile phones to desktops.',
      imgSrc: responsiveDesignImg,
      imgAlt: 'Responsive layout displayed on tablet, laptop, and phone.',
    },
    seoOptimization: {
      title: 'SEO optimization',
      description:
        'Writing clean, semantic HTML to improve search engine optimization (SEO) and ensure higher visibility in search engine results.',
      imgSrc: seoImg,
      imgAlt:
        'An image featuring large SEO title in the middle surrounded by names of most famous search engines such as Google, Bing, Yahoo! etc.',
    },
    accessibility: {
      title: 'Accessibility',
      description:
        'Making digital experiences inclusive by implementing keyboard navigation, screen reader support, and WCAG-compliant features.',
      imgSrc: accessibilityImg,
      imgAlt: 'Accessibility symbol showing a person within a circle.',
    },
  },
  cro: {
    pageTitle: {
      title: 'Moj pristup izvrsnosti u web razvoju',
    },
    performanceOptimization: {
      title: 'Optimizacija performansi',
      description:
        'Isporučujem brze i učinkovite aplikacije pisanjem čistog koda, smanjenjem veličine paketa i praćenjem najboljih praksi.',
      imgSrc: frontendCodeImg,
      imgAlt: 'Primjer čistog i optimiziranog frontend koda.',
    },
    responsiveDesign: {
      title: 'Responzivni dizajn',
      description:
        'Dizajniranje i razvoj web stranica koje se besprijekorno prilagođavaju bilo kojoj veličini zaslona, osiguravajući optimalno korisničko iskustvo na svim uređajima, od mobilnih telefona do stolnih računala.',
      imgSrc: responsiveDesignImg,
      imgAlt: 'Prikaz responzivnog dizajna na tabletu, laptopu i mobitelu.',
    },
    seoOptimization: {
      title: 'SEO optimizacija',
      description:
        'Pisanje čistog, semantičkog HTML-a za poboljšanje optimizacije stranice (SEO) i osiguravanje veće vidljivosti u rezultatima tražilica.',
      imgSrc: seoImg,
      imgAlt:
        'Slika sa velikim SEO naslovom u sredini okruženim nazivima najpoznatijih tražilica kao što su Google, Bing, Yahoo! itd.',
    },
    accessibility: {
      title: 'Pristupačnost',
      description:
        'Uključiv dizajn koji omogućuje korištenje aplikacija svima – s podrškom za tipkovnicu, čitače ekrana i WCAG standarde.',
      imgSrc: accessibilityImg,
      imgAlt: 'Simbol pristupačnosti – osoba unutar kruga.',
    },
  },
};
export default developmentPrinciplesTexts;
