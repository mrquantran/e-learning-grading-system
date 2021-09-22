import rootReducer from "@/redux/reducer/rootReducer"

declare global {
  type AppState = ReturnType<typeof rootReducer>
}
