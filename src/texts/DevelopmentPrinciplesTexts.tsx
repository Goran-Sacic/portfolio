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
        'Building fast-loading, optimized web applications by utilizing efficient code and following best practices to enhance performance.',
      imgSrc: frontendCodeImg,
      imgAlt: 'Image depicting some well-written frontend code',
    },
    responsiveDesign: {
      title: 'Responsive design',
      description:
        'Designing and developing web pages that adapt seamlessly to any screen size, ensuring an optimal user experience on all devices, from mobile phones to desktops.',
      imgSrc: responsiveDesignImg,
      imgAlt:
        'Responsive design image featuring three screen sizes: tablet, laptop and mobile phone',
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
        'Ensuring web applications are inclusive and usable by people of all abilities by following accessibility standards like WCAG and implementing features such as keyboard navigation and screen reader compatibility.',
      imgSrc: accessibilityImg,
      imgAlt:
        'An image showing depicting a silhouette of a person, contained withing a black circle.',
    },
  },
  cro: {
    pageTitle: {
      title: 'Moj pristup izvrsnosti u web razvoju',
    },
    performanceOptimization: {
      title: 'Optimizacija performansi',
      description:
        'Izrada optimiziranih web aplikacija koje se brzo učitavaju zahvaljujući učinkovitom kodu i praćenju najboljih praksi za poboljšanje performansi.',
      imgSrc: frontendCodeImg,
      imgAlt: 'Slika koja prikazuje neki dobro napisani Frontend kod',
    },
    responsiveDesign: {
      title: 'Responzivni dizajn',
      description:
        'Dizajniranje i razvoj web stranica koje se besprijekorno prilagođavaju bilo kojoj veličini zaslona, osiguravajući optimalno korisničko iskustvo na svim uređajima, od mobilnih telefona do stolnih računala.',
      imgSrc: responsiveDesignImg,
      imgAlt:
        'Slika s prikazom responzivnog dizajna na ukupno tri veličine zaslona: tablet, prijenosno računalo i mobilni telefon',
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
        'Osiguravanje da su web aplikacije inkluzivne i da ih mogu koristiti osobe svih sposobnosti, slijedeći standarde pristupačnosti poput WCAG i implementirajući značajke kao što su navigacija putem tipkovnice i kompatibilnost s čitačima zaslona.',
      imgSrc: accessibilityImg,
      imgAlt: 'Slika koja prikazuje siluetu osobe unutar crnog kruga.',
    },
  },
};
export default developmentPrinciplesTexts;
