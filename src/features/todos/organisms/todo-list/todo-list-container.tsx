import { connect, ConnectedProps } from "react-redux";
import { TodoList } from "./todo-list";
import { fetchTodosAsync } from "features/todos/actions";
import {
  getTodosItems,
  getTodosLoadingStatus,
  getLoadingToggledTodoIds,
} from "features/todos/selectors";
import { TTodo } from "features/todos/types";
import { RootState } from "typesafe-actions";

const mapStateToProps = (state: RootState) => ({
  todos: getTodosItems(state),
  isLoading: getTodosLoadingStatus(state),
  loadingToggledTodoIds: getLoadingToggledTodoIds(state),
});

const mapDispatchToProps = {
  fetchTodosRequest: fetchTodosAsync.request,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type OwnProps = {
  fetchTodosRequest: (setTodosLoading: boolean) => void;
  isLoading?: boolean;
  todos?: TTodo[];
};

export type ContainerProps = ConnectedProps<typeof connector> & OwnProps;

export const TodoListContainer = connector(TodoList);
