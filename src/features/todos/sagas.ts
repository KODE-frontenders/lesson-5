import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchTodos, addTodo, deleteTodo, updateTodo } from "api";
import {
  fetchTodosAsync,
  addTodoAsync,
  deleteTodoAsync,
  toggleTodoAsync,
} from "./actions";
import { TTodo } from "./types";

function* fetchTodosWorker() {
  try {
    const todos: TTodo[] = yield call(fetchTodos);
    yield put(fetchTodosAsync.success(todos));
  } catch (e) {
    yield put(fetchTodosAsync.failure(e.message));
  }
}

function* addTodoWorker(action: ReturnType<typeof addTodoAsync.request>) {
  try {
    const newTodoDescription = action.payload;
    const { data }: { data: TTodo } = yield call(addTodo, newTodoDescription);
    yield put(addTodoAsync.success(data));

    yield put(fetchTodosAsync.request(false));
  } catch (e) {
    yield put(addTodoAsync.failure(e.message));
  }
}

function* toggleTodoWorker(action: ReturnType<typeof toggleTodoAsync.request>) {
  try {
    const { id, completed } = action.payload;
    const newBody = { completed };
    const { data }: { data: TTodo } = yield call(updateTodo, id, newBody);

    yield put(toggleTodoAsync.success(data.completed));
    yield put(fetchTodosAsync.request(false));
  } catch (e) {
    yield put(toggleTodoAsync.failure(e.message));
  }
}

function* deleteTodoWorker(action: ReturnType<typeof deleteTodoAsync.request>) {
  try {
    const todoIdToDelete = action.payload;
    const { data }: { data: TTodo } = yield call(deleteTodo, todoIdToDelete);

    yield put(deleteTodoAsync.success(data));
    yield put(fetchTodosAsync.request(false));
  } catch (e) {
    yield put(deleteTodoAsync.failure(e.message));
  }
}

function* todosWatcher(): Generator {
  yield all([
    takeEvery(fetchTodosAsync.request, fetchTodosWorker),
    takeEvery(addTodoAsync.request, addTodoWorker),
    takeLatest(toggleTodoAsync.request, toggleTodoWorker),
    takeLatest(deleteTodoAsync.request, deleteTodoWorker),
  ]);
}

export default todosWatcher;
