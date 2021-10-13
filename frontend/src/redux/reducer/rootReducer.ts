import { AppReducer } from "@/App/reducers/App.reducer"

import dashboardReducer from "@/modules/Dashboard/reducers"
import AuthReducer from "@/modules/authentication/reducers/authentication"

import { combineReducers } from "redux"
import courseReducer from "@/modules/Course/reducers"

const rootReducer = combineReducers({
  app: AppReducer,
  dashboard: dashboardReducer,
  auth: AuthReducer,
  course: courseReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
