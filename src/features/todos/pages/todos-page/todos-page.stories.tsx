import React from "react";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";
import { TodosPage } from "./todos-page";
import { EmptyList as TodoAddEmpty } from "../../organisms/todo-list/todo-list.stories";
import { SeveralItems as TodoListSeveralItems } from "../../organisms/todo-list/todo-list.stories";

const getState = () => ({
  todos: {
    items: TodoListSeveralItems.args.todos,
    loadingToggledTodoIds: [],
    loadingDeletedTodoIds: [],
    errors: "",
  },
});

const storeMock = {
  getState,
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

export default {
  title: "Pages/TodosPage",
  component: TodosPage,
  decorators: [
    (Story: React.FC): JSX.Element => (
      // @ts-expect-error using of simple store mock for story
      <Provider store={storeMock}>
        <Story />
      </Provider>
    ),
  ],
};

const Template = (args) => <TodosPage {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: [
    <TodoListSeveralItems {...TodoListSeveralItems.args} />,
    <TodoAddEmpty {...TodoAddEmpty.args} />,
  ],
};
