interface ProjectsTexts {
  title: string;
  description: string;
  techStack: string;
}

interface Projects {
  GoGoFood: ProjectsTexts;
  WorkoutBuddy: ProjectsTexts;
  CoursesApp: ProjectsTexts;
  title: string;
}

interface SupportedLanguages {
  eng: Projects;
  cro: Projects;
}

const projectsTexts: SupportedLanguages = {
  eng: {
    title: 'A few sample works...',
    GoGoFood: {
      title: 'GoGo Food!',
      description:
        'Experience effortless food delivery with GOGO FOOD! Browse through a wide selection of dishes and have gourmet meals delivered straight to your door.',
      techStack: 'ReactJS, Firebase',
    },
    WorkoutBuddy: {
      title: 'Workout Buddy',
      description:
        'A secure application for tracking your workout routines, featuring user authentication and encrypted data storage. Monitor your progress, set goals, and stay motivated!',
      techStack: 'MERN Stack - ReactJS, Node.js, Express.js, MongoDB',
    },
    CoursesApp: {
      title: 'Courses App',
      description:
        'An application for displaying educational programs. Allows setting the title, duration, and author. Includes editing capabilities. Dummy admin credentials are available for testing.',
      techStack: 'ReactJS (Redux, Router, Axios), TypeScript',
    },
  },
  cro: {
    title: 'Nekoliko primjera radova...',
    GoGoFood: {
      title: 'GoGo Food!',
      description:
        'Iskusite dostavu hrane uz GOGO FOOD! Pregledajte širok izbor jela i gurmanske obroke koje isporučujemo ravno na vaša vrata.',
      techStack: 'ReactJS, Firebase',
    },
    WorkoutBuddy: {
      title: 'WorkoutBuddy',
      description:
        'Sigurna aplikacija za praćenje vaših vježbi, s autentifikacijom korisnika i šifriranom pohranom podataka. Pratite svoj napredak, postavite ciljeve i ostanite motivirani!',
      techStack: 'MERN Stack - ReactJS, Node.js, Express.js, MongoDB',
    },
    CoursesApp: {
      title: 'Courses App',
      description:
        'Aplikacija za prikaz obrazovnih programa. Dopušta postavljanje naslova, trajanja i autora te uključuje mogućnosti uređivanja. Lažne administratorske vjerodajnice dostupne su za testiranje.',
      techStack: 'ReactJS (Redux, Router, Axios), TypeScript',
    },
  },
};

export default projectsTexts;
