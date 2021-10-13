import DashboardPage from "@/pages/Dashboard/DashboardPage"
import DetailPage from "@/pages/Detail/DetailPage"
import LoginPage from "@/pages/Login/LoginPage"

const routesHome = [
  {
    path: "/",
    exact: true,
    component: DashboardPage
  },
  {
    path: "/detail/:id",
    exact: true,
    component: DetailPage
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
