import React from "react";
import { Provider } from "react-redux";
import { TodoAddModal } from "./todo-add-modal";
import { action } from "@storybook/addon-actions";

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
  title: "Molecules/TodoAddModal",
  component: TodoAddModal,
  decorators: [
    (Story: React.FC): JSX.Element => (
      // @ts-expect-error using of simple store mock for story
      <Provider store={storeMock}>
        <Story />
      </Provider>
    ),
  ],
};

const Template = (args) => <TodoAddModal {...args} />;

export const Visible = Template.bind({});
Visible.args = {
  isVisible: true,
};
