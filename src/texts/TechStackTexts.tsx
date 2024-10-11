interface TechStackTexts {
  LinkText: string;
  LinkTextAfter: string;
  Html: string;
  Css: string;
  JsTs: string;
  React: string;
  NodejsExpressjs: string;
  FirebaseMongodb: string;
}

interface SupportedLanguages {
  eng: TechStackTexts;
  cro: TechStackTexts;
}

const techStackTexts: SupportedLanguages = {
  eng: {
    LinkText: 'Learn more about ',
    LinkTextAfter: '',
    Html: 'Proficient in crafting visually appealing websites using HTML, focusing on optimal user experience through proper content organization.',
    Css: 'Expert in CSS, capable of designing responsive and visually engaging layouts to enhance user interfaces.',
    JsTs: 'Expertise in JavaScript and TypeScript, building interactive and dynamic web applications with a focus on seamless user interaction and functionality.',
    React:
      'Advanced proficiency in React/NextJS/Vite, developing efficient and optimized front-end applications with a strong emphasis on component-based architecture.',
    NodejsExpressjs:
      'Proficient in building robust server-side applications with Node.js and Express.js, ensuring efficient performance and smooth API integration for seamless web functionality.',
    FirebaseMongodb:
      'Skilled in utilizing Firebase and MongoDB for efficient database management, enabling dynamic, real-time data handling and secure backend infrastructure.',
  },
  cro: {
    LinkText: 'Više o ',
    LinkTextAfter: '-u',
    Html: 'Stručan u izradi vizualno privlačnih web stranica koristeći HTML, s naglaskom na optimalno korisničko iskustvo kroz pravilnu organizaciju sadržaja.',
    Css: 'Stručnjak za CSS, sposoban dizajnirati responzivne i vizualno atraktivne izglede za poboljšanje korisničkih sučelja.',
    JsTs: 'Stručnost u JavaScriptu i TypeScriptu, izgradnja interaktivnih i dinamičnih web aplikacija s fokusom na besprijekornu korisničku interakciju i funkcionalnost.',
    React:
      'Napredno poznavanje React/NextJS/Vite, razvoj učinkovitih i optimiziranih front-end aplikacija s jakim naglaskom na arhitekturu temeljenu na komponentama.',
    NodejsExpressjs:
      'Vještina izrade robusnih aplikacija na strani poslužitelja koristeći Node.js i Express.js, osiguravajući učinkovitu izvedbu i glatku API integraciju za besprijekornu web funkcionalnost.',
    FirebaseMongodb:
      'Znanje u korištenju Firebase-a i MongoDB-a za učinkovito upravljanje bazama podataka, omogućavajući dinamičko rukovanje podacima u stvarnom vremenu i sigurnu pozadinsku infrastrukturu.',
  },
};

export default techStackTexts;
