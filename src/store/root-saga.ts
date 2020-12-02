import todosWatcher from "features/todos/sagas";
import { all, fork } from "redux-saga/effects";

const featuresWatchers = [todosWatcher];

export function* rootSaga() {
  yield all(featuresWatchers.map(fork));
}
