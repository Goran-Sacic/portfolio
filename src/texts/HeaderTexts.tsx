interface HeaderContent {
  languageIndicator: string;
  home: string;
  about: string;
  projects: string;
  contact: string;
  languagePicker: string;
}

interface SupportedLanguages {
  eng: HeaderContent;
  cro: HeaderContent;
}

const headerTexts: SupportedLanguages = {
  eng: {
    languageIndicator: 'ENG',
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    languagePicker: 'Language',
  },
  cro: {
    languageIndicator: 'CRO',
    home: 'Početak',
    about: 'O meni',
    projects: 'Projekti',
    contact: 'Kontakt',
    languagePicker: 'Jezik',
  },
};

export default headerTexts;
