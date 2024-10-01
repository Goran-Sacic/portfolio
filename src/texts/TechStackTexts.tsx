interface TechStackTexts {
  HtmlCss: string;
  JsTs: string;
  React: string;
  NodejsExpressjs: string;
  FirebaseMongodb: string;
  performanceOptimizationTitle: string;
  performanceOptimizationDescription: string;
}

interface SupportedLanguages {
  eng: TechStackTexts;
  cro: TechStackTexts;
}

const techStackTexts: SupportedLanguages = {
  eng: {
    HtmlCss:
      'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experience.',
    JsTs: 'Expertise in JavaScript and TypeScript, building interactive and dynamic web applications with a focus on seamless user interaction and functionality.',
    React:
      'Advanced proficiency in React/NextJS/Vite, developing efficient and optimized front-end applications with a strong emphasis on component-based architecture.',
    NodejsExpressjs:
      'Proficient in building robust server-side applications with Node.js and Express.js, ensuring efficient performance and smooth API integration for seamless web functionality.',
    FirebaseMongodb:
      'Skilled in utilizing Firebase and MongoDB for efficient database management, enabling dynamic, real-time data handling and secure backend infrastructure.',
    performanceOptimizationTitle: 'Performance optimization',
    performanceOptimizationDescription:
      'Building fast-loading, optimized web applications by utilizing efficient code and following best practices to enhance performance.',
  },
  cro: {
    HtmlCss:
      'Izvrsnost u HTML-u i CSS-u vještom izradom vizualno privlačnih i responzivnih web stranica za optimalno korisničko iskustvo.',
    JsTs: 'Stručnost u JavaScriptu i TypeScriptu, izgradnja interaktivnih i dinamičnih web aplikacija s fokusom na besprijekornu korisničku interakciju i funkcionalnost.',
    React:
      'Napredno poznavanje React/NextJS/Vite, razvoj učinkovitih i optimiziranih front-end aplikacija s jakim naglaskom na arhitekturu temeljenu na komponentama.',
    NodejsExpressjs:
      'Vještina izrade robusnih aplikacija na strani poslužitelja koristeći Node.js i Express.js, osiguravajući učinkovitu izvedbu i glatku API integraciju za besprijekornu web funkcionalnost.',
    FirebaseMongodb:
      'Znanje u korištenju Firebase-a i MongoDB-a za učinkovito upravljanje bazama podataka, omogućavajući dinamičko rukovanje podacima u stvarnom vremenu i sigurnu pozadinsku infrastrukturu.',
    performanceOptimizationTitle: 'Optimizacija performansi',
    performanceOptimizationDescription:
      'Izrada optimiziranih web aplikacija koje se brzo učitavaju zahvaljujući učinkovitom kodu i praćenju najboljih praksi za poboljšanje performansi.',
  },
};

export default techStackTexts;
