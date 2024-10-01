interface ProjectsTexts {
  title: string;
  GoGoFoodDescription: string;
  WorkoutBuddyDescription: string;
  CoursesAppDescription: string;
}

interface SupportedLanguages {
  eng: ProjectsTexts;
  cro: ProjectsTexts;
}

const projectsTexts: SupportedLanguages = {
  eng: {
    title: 'A few sample projects...',
    GoGoFoodDescription:
      'Experience effortless food delivery with GOGO FOOD! Browse through a wide selection of dishes and have gourmet meals delivered straight to your door.',
    WorkoutBuddyDescription:
      'A secure application for tracking your workout routines, featuring user authentication and encrypted data storage. Monitor your progress, set goals, and stay motivated!',
    CoursesAppDescription:
      ' An application for displaying educational programs. Allows setting the title, duration, and author. Includes editing capabilities. Dummy admin credentials are available for testing.',
  },
  cro: {
    title: 'Nekoliko oglednih projekata...',
    GoGoFoodDescription:
      'Iskusite dostavu hrane uz GOGO FOOD! Pregledajte širok izbor jela i gurmanske obroke koje isporučujemo ravno na vaša vrata.',
    WorkoutBuddyDescription:
      'Sigurna aplikacija za praćenje vaših vježbi, s autentifikacijom korisnika i šifriranom pohranom podataka. Pratite svoj napredak, postavite ciljeve i ostanite motivirani!',
    CoursesAppDescription:
      ' Aplikacija za prikaz obrazovnih programa. Dopušta postavljanje naslova, trajanja i autora te uključuje mogućnosti uređivanja. Lažne administratorske vjerodajnice dostupne su za testiranje.',
  },
};

export default projectsTexts;
