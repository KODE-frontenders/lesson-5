import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./store";

import { darkTheme, lightTheme } from "shared/ui/theme";
import { useDarkMode } from "shared/hooks/use-dark-mode";
import { GlobalStyles } from "shared/ui/global-styles";
import { Routing } from "shared/organisms/routing/routing";

const Root = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeStyles = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={themeStyles}>
          <GlobalStyles />
          <Routing toggleTheme={toggleTheme} />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
};

render(<Root />, document.getElementById("root"));
