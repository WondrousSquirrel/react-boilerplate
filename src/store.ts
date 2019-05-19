import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

import rootSaga from "./sagas/saga";
import rootReducer from "./reducers/index";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default () => {
  const persistor = persistStore(store);
  return { store, persistor };
};
