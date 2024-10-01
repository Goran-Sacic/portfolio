interface SeoOptimizationTexts {
  title: string;
  description: string;
  imgAlt: string;
}

interface SupportedLanguages {
  eng: SeoOptimizationTexts;
  cro: SeoOptimizationTexts;
}

const seoOptimizationTexts: SupportedLanguages = {
  eng: {
    title: 'SEO optimization',
    description:
      'Writing clean, semantic HTML to improve search engine optimization (SEO) and ensure higher visibility in search engine results.',
    imgAlt:
      'An image featuring large SEO title in the middle surrounded by names of most famous search engines such as Google, Bing, Yahoo! etc.',
  },
  cro: {
    title: 'SEO optimization',
    description:
      'Pisanje čistog, semantičkog HTML-a za poboljšanje optimizacije stranice (SEO) i osiguravanje veće vidljivosti u rezultatima tražilica.',
    imgAlt:
      'Slika sa velikim SEO naslovom u sredini okruženim nazivima najpoznatijih tražilica kao što su Google, Bing, Yahoo! itd.',
  },
};

export default seoOptimizationTexts;
