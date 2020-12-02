import { ThemeProvider } from "styled-components";
import React from "react";
import { lightTheme, darkTheme } from "shared/ui/theme";
import { createMemoryHistory } from "history";
import { Router, Route } from "react-router-dom";
import { GlobalStyles } from "shared/ui/global-styles";

const history = createMemoryHistory({ initialEntries: ["/"] });

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: ["light", "dark"],
    },
  },
};

export const decorators = [
         (Story, { globals }) => {
           const themeStyles =
             globals.theme === "light" ? lightTheme : darkTheme;
           return (
             <ThemeProvider theme={themeStyles}>
               <GlobalStyles />
               <Story />
             </ThemeProvider>
           );
         },
         (Story) => (
           <Router history={createMemoryHistory({ initialEntries: ["/"] })}>
             <Route path="/">
               <Story />
             </Route>
           </Router>
         ),
       ];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
