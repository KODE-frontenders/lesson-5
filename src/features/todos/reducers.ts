import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import {
  fetchTodosAsync,
  deleteTodoAsync,
  toggleTodoAsync,
  addTodoAsync,
} from "./actions";
import { TTodo } from "./types";

const errorsReducer = createReducer("" as string).handleAction(
  [
    fetchTodosAsync.failure,
    addTodoAsync.failure,
    toggleTodoAsync.failure,
    deleteTodoAsync.failure,
  ],
  (_, action) => {
    const errorMessage = action.payload;
    return errorMessage;
  }
);

const itemsReducer = createReducer([] as TTodo[]).handleAction(
  [fetchTodosAsync.success],
  (_, action) => {
    const items = action.payload;
    return items;
  }
);

const isLoadingTodosReducer = createReducer(false as boolean)
  .handleAction([fetchTodosAsync.request], (state, action) => {
    const setLoadingStatus = action.payload;
    return setLoadingStatus;
  })
  .handleAction(
    [fetchTodosAsync.success, fetchTodosAsync.failure],
    () => false
  );

const loadingToggledTodoIdsReducer = createReducer([] as string[])
  .handleAction([toggleTodoAsync.request], (state, action) => {
    const { id } = action.payload;
    return [...state, id];
  })
  .handleAction([toggleTodoAsync.success, toggleTodoAsync.failure], () => []);

const loadingDeletedTodoIdsReducer = createReducer([] as string[])
  .handleAction([deleteTodoAsync.request], (state, action) => {
    const todoId = action.payload;
    return [...state, todoId];
  })
  .handleAction([deleteTodoAsync.success, deleteTodoAsync.failure], () => []);

export const todosReducer = combineReducers({
  items: itemsReducer,
  error: errorsReducer,
  isLoading: isLoadingTodosReducer,
  loadingToggledTodoIds: loadingToggledTodoIdsReducer,
  loadingDeletedTodoIds: loadingDeletedTodoIdsReducer,
});

export type TodosState = ReturnType<typeof todosReducer>;
