import React from "react";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";
import { TodoAddForm } from "./todo-add-form";

const getState = () => ({
  todos: {
    items: [],
    isLoading: false,
    loadingTodo_id: "",
  },
});

const storeMock = {
  getState,
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

export default {
  title: "Organisms/TodoAddForm",
  component: TodoAddForm,
  decorators: [
    (Story) => (
      // @ts-expect-error using of simple store mock for story
      <Provider store={storeMock}>
        <Story />
      </Provider>
    ),
  ],
};

const Template = (args) => <TodoAddForm {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  onSubmit: () => {},
  onCancel: () => {},
};
