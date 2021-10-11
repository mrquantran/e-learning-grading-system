import DashboardPage from "@/pages/Dashboard/DashboardPage"
import LoginPage from "@/pages/Login/LoginPage"

const routesHome = [
  {
    path: "/",
    exact: true,
    component: DashboardPage
  }
]

const routesAuth = [
  {
    path: "/login",
    exact: true,
    component: LoginPage
  }
]

export { routesHome, routesAuth }
