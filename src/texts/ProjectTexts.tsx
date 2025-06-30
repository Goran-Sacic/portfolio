interface ProjectsTexts {
  title: string;
  description: string;
  techStack: string;
}

interface Projects {
  title: string;
  CateringApp: ProjectsTexts;
  RadioApp: ProjectsTexts;
  ConstructionWebsite: ProjectsTexts;
}

interface SupportedLanguages {
  eng: Projects;
  cro: Projects;
}

const projectsTexts: SupportedLanguages = {
  eng: {
    title: 'Selected Projects',
    CateringApp: {
      title: 'Catering App',
      description:
        'A fullstack web application for managing corporate food orders. Features include multi-company and multi-restaurant support, admin dashboard, daily menus, PDF/XLSX parsing, Supabase database and storage integration, Clerk-based authentication and Express server for custom validation.',
      techStack:
        'Next.js, Express, TypeScript, Supabase, Clerk, Zustand, TailwindCSS',
    },
    RadioApp: {
      title: 'RadioMaster5000',
      description:
        'A React-powered radio streaming app that lets users browse by genre, country, or search. Support for over 50,000 worldwide radios in over 200 countries. Includes a compact media player with session support, favorites, and full mobile compatibility. A custom Express server handles HTTP streams securely, avoiding browser warnings and popups.',
      techStack:
        'React (Vite), Express, Material UI, React H5 Audio Player, Fly.io',
    },
    ConstructionWebsite: {
      title: 'Construction Company Websites',
      description:
        'A modern website for a construction company, featuring project galleries, a custom admin panel, CMS integration, and SEO optimization. Hosted on Hetzner with Cloudflare and Coolify deployment.',
      techStack:
        'Next.js, TypeScript, Supabase, TailwindCSS, Tiptap, ShadCN, Hetzner, Coolify, Cloudflare',
    },
  },
  cro: {
    title: 'Odabrani projekti',
    CateringApp: {
      title: 'Catering aplikacija',
      description:
        'Fullstack web aplikacija za upravljanje narudžbama hrane u tvrtkama. Uključuje podršku za veći broj tvrtki i restorana, administratorsku nadzornu ploču, dnevne jelovnike, obradu PDF/XLSX datoteka, integraciju sa Supabase bazom i pohranom, Clerk autentifikaciju te Express server za validaciju podataka.',
      techStack:
        'Next.js, Express, TypeScript, Supabase, Clerk, Zustand, TailwindCSS',
    },
    RadioApp: {
      title: 'RadioMaster5000',
      description:
        'React aplikacija za streaming radija koja omogućuje pregled stanica po žanru, državi ili putem pretraživanja. Podržava više od 50.000 postaja iz više od 200 zemalja. Sadrži kompaktan media player s media session podrškom, funkcionalnost omiljenih stanica i potpunu mobilnu prilagodbu. Posebni Express server omogućuje sigurno reproduciranje HTTP streamova bez upozorenja preglednika i otvaranja novih prozora.',
      techStack:
        'React (Vite), Express, Material UI, React H5 Audio Player, Fly.io',
    },
    ConstructionWebsite: {
      title: 'Web stranica građevinske tvrtke',
      description:
        'Moderna web stranica za građevinsku tvrtku s galerijama projekata, prilagođenim administratorskim sučeljem, CMS integracijom i SEO optimizacijom. Hostano na Hetzneru uz Cloudflare i Coolify za deploy.',
      techStack:
        'Next.js, TypeScript, Supabase, TailwindCSS, Tiptap, ShadCN, Hetzner, Coolify, Cloudflare',
    },
  },
};

export default projectsTexts;
