import { RootState } from "@/redux/reducer/rootReducer"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"

// Logger with default options
import logger from "redux-logger"

import rootReducer from "./reducer/rootReducer"

const persistConfig = {
  key: "root",
  storage
}

const composeEnhancers =
  (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()

let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(logger, sagaMiddleware))
)
let persistor = persistStore(store)

export { store, persistor, sagaMiddleware }
