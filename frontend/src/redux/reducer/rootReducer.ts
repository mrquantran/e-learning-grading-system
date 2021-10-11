import { AppReducer } from "@/App/reducers/App.reducer"

import dashboardReducer from "@/modules/Dashboard/reducers"
import AuthReducer from "@/modules/authentication/reducers/authentication"

import { combineReducers } from "redux"

const rootReducer = combineReducers({
  app: AppReducer,
  dashboard: dashboardReducer,
  auth: AuthReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
