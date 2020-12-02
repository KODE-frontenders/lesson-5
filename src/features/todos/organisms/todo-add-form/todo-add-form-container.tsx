import { connect, ConnectedProps } from "react-redux";
import { addTodoAsync } from "features/todos/actions";
import { TodoAddForm } from "./todo-add-form";

const mapDispatchToProps = {
  addTodoAction: addTodoAsync.request,
};

const connector = connect(null, mapDispatchToProps);

type OwnProps = {
  closeModal: () => void;
  addTodoAction: (description: string) => void;
};

export type ContainerProps = ConnectedProps<typeof connector> & OwnProps;

export const TodoAddFormContainer = connector(TodoAddForm);
