interface FooterContent {
  name: string;
  desc: string;
  socialsTitle: string;
  copyright: string;
}

interface SupportedLanguages {
  eng: FooterContent;
  cro: FooterContent;
}

const footerTexts: SupportedLanguages = {
  eng: {
    name: 'GORAN SAČIĆ',
    desc: 'A Frontend Web Developer dedicated to crafting the user interface of websites and web applications, enhancing user experience and driving product excellence',
    socialsTitle: 'SOCIALS',
    copyright: 'Copyright 2024. All rights reserved. Made by',
  },
  cro: {
    name: 'GORAN SAČIĆ',
    desc: 'Frontend web programer posvećen izradi korisničkog sučelja za web stranice i web aplikacije, poboljšavajući korisničko iskustvo i unaprjeđivajući izvrsnost proizvoda',
    socialsTitle: 'MREŽE',
    copyright: 'Copyright 2024. Sva prava pridržana. Izradio',
  },
};

export default footerTexts;
