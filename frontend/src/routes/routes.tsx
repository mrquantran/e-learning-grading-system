import DashboardPage from "@/pages/Dashboard/DashboardPage"
import DetailPage from "@/pages/Detail/DetailPage"
import LoginPage from "@/pages/Login/LoginPage"
import MyCoursesPage from "@/pages/MyCourses/MyCoursesPage"

const routesHome = [
  {
    path: "/",
    exact: true,
    component: DashboardPage
  },
  {
    path: "/detail/c:id",
    exact: true,
    component: DetailPage
  },
  {
    path: "/my-courses",
    exact: false,
    component: MyCoursesPage
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
