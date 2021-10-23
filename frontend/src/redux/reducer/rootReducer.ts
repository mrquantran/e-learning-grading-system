import { AppReducer } from "@/App/reducers/App.reducer"

import dashboardReducer from "@/modules/Dashboard/reducers"
import AuthReducer from "@/modules/authentication/reducers/authentication"

import { combineReducers } from "redux"
import courseReducer from "@/modules/Course/reducers"
import lectureReducer from "@/modules/Lectures/reducer"

import { persistReducer } from "redux-persist"
import { persistConfig } from "./persistConfig"
import createCourseReducer from "@/modules/Course/reducers/createCourseReducer"

const appReducer = combineReducers({
  /* your app’s top-level reducers */
  app: persistReducer<any, any>(persistConfig.appPersistConfig, AppReducer),
  dashboard: dashboardReducer,
  auth: AuthReducer,
  course: courseReducer,
  lecture: lectureReducer,
  create: createCourseReducer
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootReducer

export default rootReducer
