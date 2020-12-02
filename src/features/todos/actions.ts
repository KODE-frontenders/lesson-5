import { TTodo } from "./types";
import { createAsyncAction } from "typesafe-actions";
import { NewTodoStatus } from "./types";

export const fetchTodosAsync = createAsyncAction(
  "FETCH_TODOS_REQUEST",
  "FETCH_TODOS_SUCCESS",
  "FETCH_TODOS_FAILURE"
)<boolean, TTodo[], string>();

export const addTodoAsync = createAsyncAction(
  "ADD_TODO_REQUEST",
  "ADD_TODO_SUCCESS",
  "ADD_TODO_FAILURE"
)<string, TTodo, string>();

export const toggleTodoAsync = createAsyncAction(
  "TOGGLE_TODO_REQUEST",
  "TOGGLE_TODO_SUCCESS",
  "TOGGLE_TODO_FAILURE"
)<NewTodoStatus, boolean, string>();

export const deleteTodoAsync = createAsyncAction(
  "DELETE_TODO_REQUEST",
  "DELETE_TODO_SUCCESS",
  "DELETE_TODO_FAILURE"
)<string, TTodo, string>();
