import { AppReducer } from "@/App/reducers/App.reducer"
import dashboardReducer from "@/modules/Dashboard/reducers"

import { combineReducers } from "redux"

const rootReducer = combineReducers({
  app: AppReducer,
  dashboard: dashboardReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
