import { createSelector } from "reselect";
import { RootState } from "store/root-reducer";

const getTodosState = (state: RootState) => {
  return state.todos;
};

export const getTodosItems = createSelector(
  getTodosState,
  (todos) => todos.items
);

export const getTodosLoadingStatus = createSelector(
  getTodosState,
  (todos) => todos.isLoading
);

export const getLoadingToggledTodoIds = createSelector(
  getTodosState,
  (todos) => todos.loadingToggledTodoIds
);

export const getLoadingDeletedTodoIds = createSelector(
  getTodosState,
  (todos) => todos.loadingDeletedTodoIds
);
