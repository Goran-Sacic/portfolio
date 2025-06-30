interface TechStackTexts {
  LinkText: string;
  LinkTextAfter: string;
  JsTs: string;
  React: string;
  UIAndUX: string;
  NodejsExpressjs: string;
  FirebaseMongodb: string;
  SqlPostgresql: string;
}

interface SupportedLanguages {
  eng: TechStackTexts;
  cro: TechStackTexts;
}

const techStackTexts: SupportedLanguages = {
  eng: {
    LinkText: 'Learn more about ',
    LinkTextAfter: '',
    JsTs: 'Strong knowledge of JavaScript and TypeScript used across fullstack apps. Confident in building complex UI logic, API interaction, and data validation.',
    React:
      'Advanced experience with React, Next.js, Vite, and libraries like TanStack Router, Zustand, MaterialUI, and Motion. Built production-ready apps with client-side filtering, CMS integration, and mobile-friendly UI.',
    UIAndUX:
      'Skilled in building accessible and responsive UIs with Material UI, ShadCN, Headless UI, and Motion.',
    NodejsExpressjs:
      'Built scalable backends with Node.js and Express, including REST APIs, authentication flows, server-side logic, and secure file handling for projects like catering and CMS platforms.',
    FirebaseMongodb:
      'Used Firebase Auth and MongoDB for real-time data and authentication in earlier fullstack projects. Familiar with Firestore, rules, and client SDKs.',
    SqlPostgresql:
      'Experienced in PostgreSQL with Supabase. Designed normalized schemas, handled many-to-many relationships, and implemented secure data queries for production systems like the catering app and CMS.',
  },
  cro: {
    LinkText: 'Više o ',
    LinkTextAfter: '-u',
    JsTs: 'Odlično poznavanje JavaScript-a i TypeScript-a korišteno u fullstack aplikacijama. Izrada složene UI logike, API integracija i validacija podataka.',
    React:
      'Napredno korištenje React-a, Next.js-a i Vite-a te alata poput TanStack Router, Zustand, MaterialUI i Motion. Razvijene aplikacije s filtriranjem, CMS integracijom i prilagodbom za mobilne uređaje.',
    UIAndUX:
      'Iskusan u izradi pristupačnih i responzivnih korisničkih sučelja koristeći Material UI, ShadCN, Headless UI i Motion.',

    NodejsExpressjs:
      'Razvijeni skalabilni backendovi pomoću Node.js i Express-a s REST API-ima, autentifikacijom, server-side logikom i sigurnim rukovanjem datotekama.',
    FirebaseMongodb:
      'Firebase i MongoDB korišteni za autentifikaciju i rad s podacima u realnom vremenu u ranim projektima. Poznavanje Firestore baze i sigurnosnih pravila.',
    SqlPostgresql:
      'Iskustvo s PostgreSQL-om i Supabase-om. Dizajnirane relacijske sheme, povezane više na više (many-to-many) relacije i sigurne upite za aplikacije poput catering sustava i CMS-a.',
  },
};

export default techStackTexts;
