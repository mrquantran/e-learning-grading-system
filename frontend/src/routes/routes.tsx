import CreateCoursePage from "@/pages/admin/CreateCourse/CreateCoursePage"
import DashboardPageAdmin from "@/pages/admin/Dashboard/DashboardPageAdmin"
import DashboardPage from "@/pages/Dashboard/DashboardPage"
import DetailPage from "@/pages/Detail/DetailPage"
import LecturePage from "@/pages/Lectures/LecturePage"
import LoginPage from "@/pages/Login/LoginPage"
import MyCoursesPage from "@/pages/MyCourses/MyCoursesPage"

const routesCreate = [
  {
    path: "/course/create/:id",
    exact: true,
    component: CreateCoursePage
  }
]

const routesAdmin = [
  {
    path: "/instructor/courses",
    exact: true,
    component: DashboardPageAdmin
  }
]

const routesHome = [
  {
    path: "/",
    exact: true,
    component: DashboardPage
  },
  {
    path: "/course/c:id",
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

const routesPrivate = [
  {
    path: "/my-courses",
    exact: false,
    component: MyCoursesPage
  },
  {
    path: "/course/c:id/learn",
    exact: false,
    component: LecturePage
  }
]

export { routesHome, routesAuth, routesPrivate, routesAdmin, routesCreate }
