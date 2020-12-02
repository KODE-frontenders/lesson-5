import { combineReducers } from "redux";
import { todosReducer } from "features/todos/reducers";
import { StateType } from "typesafe-actions";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
