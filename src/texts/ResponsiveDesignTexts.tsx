interface ResponsiveDesign {
  title: string;
  description: string;
  imgAlt: string;
}

interface SupportedLanguages {
  eng: ResponsiveDesign;
  cro: ResponsiveDesign;
}

const responsiveDesignTexts: SupportedLanguages = {
  eng: {
    title: 'Responsive design',
    description:
      'Designing and developing web pages that adapt seamlessly to any screen size, ensuring an optimal user experience on all devices, from mobile phones to desktops.',
    imgAlt:
      'Responsive design image featuring three screen sizes: tablet, laptop and mobile phone',
  },
  cro: {
    title: 'Responzivni dizajn',
    description:
      'Dizajniranje i razvoj web stranica koje se besprijekorno prilagođavaju bilo kojoj veličini zaslona, osiguravajući optimalno korisničko iskustvo na svim uređajima, od mobilnih telefona do stolnih računala.',
    imgAlt:
      'Slika s prikazom responzivnog dizajna na ukupno tri veličine zaslona: tablet, prijenosno računalo i mobilni telefon',
  },
};

export default responsiveDesignTexts;
