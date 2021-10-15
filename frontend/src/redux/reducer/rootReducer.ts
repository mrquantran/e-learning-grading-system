import { AppReducer } from "@/App/reducers/App.reducer"

import dashboardReducer from "@/modules/Dashboard/reducers"
import AuthReducer from "@/modules/authentication/reducers/authentication"

import { combineReducers } from "redux"
import courseReducer from "@/modules/Course/reducers"
import { persistReducer } from "redux-persist"
import { persistConfig } from "./persistConfig"

const appReducer = combineReducers({
  /* your app’s top-level reducers */
  app: persistReducer<any, any>(persistConfig.appPersistConfig, AppReducer),
  dashboard: dashboardReducer,
  auth: AuthReducer,
  course: courseReducer
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
