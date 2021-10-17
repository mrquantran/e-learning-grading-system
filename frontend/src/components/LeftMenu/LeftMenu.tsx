/* eslint-disable no-console */
import React from "react"
import { Menu } from "antd"
import { Layout } from "antd"
import logo from "@/assets/images/logo.svg"
import {
  AppstoreOutlined,
  // MenuUnfoldOutlined,
  // MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined
} from "@ant-design/icons"
import { Container } from "./LeftMenu.styled"
import { RootState } from "@/redux/reducer/rootReducer"
import { useSelector } from "react-redux"

import { Link, NavLink } from "react-router-dom"
import { useRouter } from "@/hooks/useRouter"
import { history } from "@/App/App"
import { showConfirm } from "@/stylesheets/Modal/Modal.styled"

const { Sider } = Layout
// const { SubMenu } = Menu

const pageMenuPath = {
  home: "/",
  myCoursesEnroll: "/my-courses/learning",
  myFavorite: "/my-courses/favorite"
}

const changeToPath = path => {
  history.push(path)
}

const confirmModalLeftMenu = path => {
  return {
    title: "Go to your courses",
    description: "You need to login to watch your courses !"
  }
}

export default function LeftMenu() {
  const collapsed = useSelector((state: RootState) => state.app.closeSideNav)
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  const handleUserLogin = (path: string) => {
    if (isAuthenticated) {
      changeToPath(path)
    } else {
      const { title, description } = confirmModalLeftMenu(path)

      const button = {
        okButton: {
          function: () => changeToPath(path)
        }
      }

      showConfirm(title, description, button)
    }
  }

  const router = useRouter()
  const { pathname: pathName } = router.location

  return (
    <Container>
      <Sider
        width={256}
        trigger={null}
        collapsible
        className="site-layout-background sider"
        collapsed={collapsed}
      >
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </Link>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          className="menu-style"
          selectedKeys={pathName}
          // style={{ height: "100%" }}
          // theme="dark"
          // inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key={pageMenuPath.home} icon={<PieChartOutlined />}>
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item
            key={pageMenuPath.myCoursesEnroll}
            icon={<DesktopOutlined />}
            onClick={() => handleUserLogin(pageMenuPath.myCoursesEnroll)}
          >
            My Courses
            {/* <NavLink to={pageMenuPath.myCoursesEnroll}>My Courses</NavLink> */}
          </Menu.Item>
          <Menu.Item
            onClick={() => handleUserLogin(pageMenuPath.myFavorite)}
            key={pageMenuPath.myFavorite}
            icon={<ContainerOutlined />}
          >
            My favorite
          </Menu.Item>
          <Menu.Item key="sub1" icon={<MailOutlined />} title="Tests">
            Tests
            {/* <Menu.Item key="9">Test 9</Menu.Item>
            <Menu.Item key="10">Test 10</Menu.Item>
            <SubMenu key="sub3" title="Test 11">
              <Menu.Item key="11">Test Math</Menu.Item>
              <Menu.Item key="12">Test Physics</Menu.Item>
            </SubMenu> */}
          </Menu.Item>
          <Menu.Item key="sub2" icon={<AppstoreOutlined />}>
            Achievements
          </Menu.Item>
        </Menu>
      </Sider>
    </Container>
  )
}
