import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) throw new Error("Context was used outside the box");
  return context;
}

export { DarkModeProvider, useDarkMode };
