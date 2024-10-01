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
    title: `I'm Goran`,
    description: 'Frontend developer',
    flavourText: 'Turning ideas into creative reality',
  },
  cro: {
    title: 'Ja sam Goran',
    description: 'Frontend developer',
    flavourText: 'Pretvaram ideje u kreativnu stvarnost',
  },
};

export default homeTexts;
