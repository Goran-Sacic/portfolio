interface HomeContent {
  title: string;
  description: string;
  flavourText: string;
}

interface SupportedLanguages {
  eng: HomeContent;
  cro: HomeContent;
}

const homeTexts: SupportedLanguages = {
  eng: {
    title: `Hi, I'm Goran`,
    description: 'Fullstack developer',
    flavourText: 'Turning ideas into creative reality',
  },
  cro: {
    title: 'Bok, ja sam Goran',
    description: 'Fullstack developer',
    flavourText: 'Pretvaram ideje u kreativnu stvarnost',
  },
};

export default homeTexts;
