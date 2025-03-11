import React, { createContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  const handdleTheme = () => {
    if (theme ==='light') {
      const newValue = 'dark'
      setTheme(newValue)
    } else {
      const newValue = 'light'
      setTheme(newValue)
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, handdleTheme }}>
        {children}
    </ThemeContext.Provider>
  )
}
