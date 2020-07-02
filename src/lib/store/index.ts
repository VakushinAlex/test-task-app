import { createStore, compose, applyMiddleware, Middleware } from "redux";
import rootReducer from "./rootReducer";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export type RootState = ReturnType<typeof rootReducer>;

let cCompose = compose;
let middlewares: Middleware[] = [];

if (process.env.NODE_ENV === "development") {
  cCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const composedEnhancers = cCompose(applyMiddleware(...middlewares));

const store = createStore(rootReducer, composedEnhancers);

export default store;
