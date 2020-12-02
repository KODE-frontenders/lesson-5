import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SettingsPage } from "features/settings/pages/settings-page/settings-page";
import { TodosPage } from "features/todos/pages/todos-page/todos-page";
import { NotFound } from "shared/pages/not-found/not-found";

type Props = {
  toggleTheme: () => void;
};

export const Routing: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Router>
      <Switch>
        <Route path="/settings">
          <SettingsPage toggleTheme={toggleTheme} />
        </Route>

        <Route path="/">
          <TodosPage />
        </Route>
        <Route path="/todos">
          <TodosPage />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};
