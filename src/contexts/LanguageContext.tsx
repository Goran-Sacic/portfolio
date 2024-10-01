import React, { useState, createContext, useEffect } from 'react';

type SupportedLanguages = 'eng' | 'cro';

interface LanguageContextType {
  language: SupportedLanguages;
  setLanguage: (lang: SupportedLanguages) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'eng',
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: React.PropsWithChildren) => {
  const [language, setLanguage] = useState<SupportedLanguages>('eng');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('lang') as SupportedLanguages;
    if (storedLanguage) {
      setLanguage(storedLanguage);
    } else {
      setLanguage('eng');
      localStorage.setItem('lang', 'eng');
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
