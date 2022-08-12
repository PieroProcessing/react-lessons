/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { ThemeContext } from './context';


export const ThemeContextComponent: React.FC = ({ children })=> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [darkTheme, setDarkTheme] = React.useState(false);
  const toggleTheme = (): void => setDarkTheme(!darkTheme);

  return (
    <ThemeContext.Provider value={{ value: darkTheme, setter: toggleTheme }}>
      {
            children
        }
    </ThemeContext.Provider>
  );
};
