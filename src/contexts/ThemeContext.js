import React, {createContext} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

  const [theme, setTheme] = React.useState({
    isDarkTheme: true,
    lightTheme: {
      text: '#222',
      background: '#d8ddf1'
    },
    darkTheme: {
      text: '#fff',
      background: '#5c5c5c',
    }
  });

  const changeTheme = () => {
    setTheme(prevTheme => ({
      ...prevTheme,
      isDarkTheme: !prevTheme.isDarkTheme
    }));
  };

  return (
    <ThemeContext.Provider value={{...theme, changeTheme: changeTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;