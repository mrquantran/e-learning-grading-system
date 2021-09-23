import { AppReducer } from "@/App/reducers/App.reducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  app: AppReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
