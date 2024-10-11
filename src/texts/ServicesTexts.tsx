interface ServicesTexts {
  title: string;
  description: string;
}

interface AllServices {
  servicesTitle: string;
  customWebsiteDevelopment: ServicesTexts;
  webApplicationDevelopment: ServicesTexts;
  portfolioAndPersonalWebsites: ServicesTexts;
}

interface SupportedLanguages {
  eng: AllServices;
  cro: AllServices;
}

const servicesTexts: SupportedLanguages = {
  eng: {
    servicesTitle: 'What I can do for you',
    customWebsiteDevelopment: {
      title: 'Custom Website Development',
      description:
        'I build responsive websites tailored to your needs, ensuring they look great and function smoothly on all devices, from mobile phones to desktops.',
    },
    webApplicationDevelopment: {
      title: 'Web Application Development',
      description:
        'I create dynamic and interactive web applications using modern tools like React and Next.js. Whether it’s an e-commerce platform, a blog, or a business dashboard, I ensure seamless functionality and an engaging user experience.',
    },
    portfolioAndPersonalWebsites: {
      title: 'Portfolio and Personal Websites',
      description:
        'Showcase your work or business with a clean, professional portfolio or personal website that highlights your unique value.',
    },
  },
  cro: {
    servicesTitle: 'Što mogu učiniti za vas',
    customWebsiteDevelopment: {
      title: 'Razvoj prilagođenih web stranica',
      description:
        'Izrađujem responzivne web-stranice prilagođene vašim potrebama, osiguravajući da izgledaju sjajno i besprijekorno funkcioniraju na svim uređajima, od mobilnih telefona do stolnih računala.',
    },
    webApplicationDevelopment: {
      title: 'Razvoj web aplikacija',
      description:
        'Izrađujem dinamične i interaktivne web aplikacije koristeći moderne alate kao što su React i Next.js. Bez obzira radi li se o platformi za e-trgovinu, blogu ili poslovnom dashboard-u, osiguravam besprijekornu funkcionalnost i privlačno korisničko iskustvo.',
    },
    portfolioAndPersonalWebsites: {
      title: 'Portfelj i osobne web stranice',
      description:
        'Predstavite svoj rad ili posao urednim, profesionalnim portfeljem ili osobnom web stranicom koja ističe vašu jedinstvenu vrijednost.',
    },
  },
};

export default servicesTexts;
