import React, { createContext, useState } from 'react';

export const Theme = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default to light mode

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <Theme.Provider value={{ theme, changeTheme }}>
      {children}
    </Theme.Provider>
  );
};

export default ThemeProvider;
