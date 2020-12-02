import { connect, ConnectedProps } from "react-redux";
import { toggleTodoAsync, deleteTodoAsync } from "features/todos/actions";
import { TodoItem } from "./todo-item";
import {
  getLoadingToggledTodoIds,
  getLoadingDeletedTodoIds,
} from "features/todos/selectors";
import { RootState } from "store/root-reducer";
import { TTodo, NewTodoStatus } from "features/todos/types";

const mapStateToProps = (state: RootState) => ({
  loadingToggledTodoIds: getLoadingToggledTodoIds(state),
  loadingDeletedTodoIds: getLoadingDeletedTodoIds(state),
});

const mapDispatchToProps = {
  toggleTodoAction: toggleTodoAsync.request,
  deleteTodoAction: deleteTodoAsync.request,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type OwnProps = {
  todo: TTodo;
  toggleTodoAction: ({ id, completed }: NewTodoStatus) => void;
  deleteTodoAction: (id: string) => void;
};

export type ContainerProps = ConnectedProps<typeof connector> & OwnProps;
export const TodoItemContainer = connector(TodoItem);
