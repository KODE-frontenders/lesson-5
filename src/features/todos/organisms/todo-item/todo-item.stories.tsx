import React from "react";
import { TodoItem } from "./todo-item";

export default {
  title: "Molecules/TodoItem",
  component: TodoItem,
};

const Template = (args) => <TodoItem {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  todo: { id: "sdtnst", title: "test", completed: false },
  loadingDeletedTodoIds: [],
  loadingToggledTodoIds: [],
  toggleTodoAction: () => {},
  deletoTodoAction: () => {},
};

export const completed = Template.bind({});
completed.args = {
  todo: { id: "sdtnst", title: "test", completed: true },
  loadingDeletedTodoIds: [],
  loadingToggledTodoIds: [],
  toggleTodoAction: () => {},
  deletoTodoAction: () => {},
};
