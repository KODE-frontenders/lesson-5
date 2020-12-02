import React from "react";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";
import { TodoList } from "./todo-list";

const getState = () => ({
  todos: {
    items: [],
    isLoading: false,
    loadingToggledTodoIds: [],
    loadingDeletedTodoIds: [],
  },
});

const storeMock = {
  getState,
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

export default {
  title: "Organisms/TodoList",
  component: TodoList,
  decorators: [
    (Story) => (
      // @ts-expect-error using of simple store mock for story
      <Provider store={storeMock}>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
};

const Template = (args) => <TodoList {...args} />;

export const ListLoading = Template.bind({});
ListLoading.args = {
  isLoading: true,
  fetchTodosRequest: () => {},
};

export const EmptyList = Template.bind({});
EmptyList.args = {
  fetchTodosRequest: () => {},
};

export const OneItem = Template.bind({});
OneItem.args = {
  todos: [
    {
      description: "test",
      completed: false,
      _id: "stn*&ds*t&n^d",
    },
  ],
  fetchTodosRequest: () => {},
};

export const SeveralItems = Template.bind({});
SeveralItems.args = {
  todos: [
    {
      description: "test",
      completed: false,
      _id: "stn*&ds*t&n^d",
    },
    {
      description: "test",
      completed: true,
      _id: "stn*&ds*t^d",
    },
    {
      description: "veeeeerryyyyy loooooong todoooooo cheeeeeeckiiiing",
      completed: false,
      _id: "stnds*t&n^d",
    },
  ],
  isLoading: false,
  fetchTodosRequest: () => {},
};
