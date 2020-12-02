import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { composeWithDevTools } from "redux-devtools-extension";
import { rootSaga } from "./root-saga";
import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  /** Specify name here, actionsBlacklist, actionsCreators and other options if needed */
});

/**  compose enhancers (Redux Dev Tools, ...) with middlewares (Redux Thunk, ...) */
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

/**  create store */
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);
/**  export store singleton instance */
export default store;
