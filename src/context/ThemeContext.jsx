import React, { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const localStorageTheme =
    JSON.parse(localStorage.getItem("theme")) || "light";
  const [theme, setTheme] = useState(localStorageTheme);

  const updateLocalStorage = (value) => {
    localStorage.setItem("theme", JSON.stringify(value));
  };

  const handdleTheme = () => {
    if (theme === "light") {
      const newValue = "dark";
      updateLocalStorage(newValue);
      setTheme(newValue);
    } else {
      const newValue = "light";
      updateLocalStorage(newValue);
      setTheme(newValue);
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, handdleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
