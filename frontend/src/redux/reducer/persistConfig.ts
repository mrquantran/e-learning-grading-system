import storage from "redux-persist/lib/storage"

const appPersistConfig = {
  key: "app",
  storage: storage,
  whitelist: ["closeSideNav"]
}

const dashboardPersistConfig = {
  key: "dashboard",
  storage: storage,
  whitelist: ["courses"]
}

const coursePersistConfig = {
  key: "course",
  storage: storage,
  whitelist: ["course"]
}

export const persistConfig = {
  appPersistConfig,
  dashboardPersistConfig,
  coursePersistConfig
}
