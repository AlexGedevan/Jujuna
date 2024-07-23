import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("georgian");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("Context was used outside the box");
  return context;
}

export { LanguageProvider, useLanguage };
