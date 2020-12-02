import React from "react";
import { PageTemplate } from "shared/templates/page/page";
import { TodoListContainer } from "features/todos/organisms/todo-list/todo-list-container";
import { TodosAdd } from "features/todos/organisms/todos-add/todos-add";

export const TodosPage: React.FC = () => {
  return (
    <PageTemplate title="Toduber" linkTo="settings">
      <TodoListContainer />
      <TodosAdd />
    </PageTemplate>
  );
};
