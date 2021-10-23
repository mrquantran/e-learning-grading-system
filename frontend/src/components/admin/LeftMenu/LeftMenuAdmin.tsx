import { Container } from "@/components/admin/LeftMenu/LeftMenuAdmin.styled"
import React, { useState } from "react"
import { Menu } from "antd"
import { Link } from "react-router-dom"
import { Layout } from "antd"
import logo from "@/assets/images/logo.svg"
import { useRouter } from "@/hooks/useRouter"

import {
  PushpinOutlined,
  // MenuUnfoldOutlined,
  // MenuFoldOutlined,
  PlaySquareOutlined,
  DashboardOutlined,
  MessageOutlined,
  SmileOutlined,
  ToolOutlined
} from "@ant-design/icons"
import pathRoute from "@/routes/routePath"

const pageMenuPath = {
  home: "/instructor",
  course: "/instructor/courses",
  overview: "/instructor/overview"
}

const { Sider } = Layout

export default function LeftMenuAdmin() {
  const router = useRouter()
  const { pathname: pathName } = router.location

  const [collapsed, setCollapsed] = useState(true)

  return (
    <Container>
      <Sider
        width={256}
        trigger={null}
        collapsible
        className="site-layout-background sider"
        collapsed={collapsed}
        onMouseLeave={e => {
          if (!collapsed) {
            setCollapsed(true)
          }
        }}
        onMouseEnter={e => {
          if (collapsed) {
            setCollapsed(false)
          }
        }}
      >
        <Link to={pageMenuPath.home}>
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
          <Menu.Item
            key={pathRoute.instructorCourse}
            icon={<PlaySquareOutlined />}
          >
            Courses
          </Menu.Item>
          <Menu.Item
            // onClick={() => handleUserLogin(pageMenuPath.myFavorite)}
            // key={pageMenuPath.overview}
            icon={<DashboardOutlined />}
          >
            Overview
          </Menu.Item>
          <Menu.Item
            // onClick={() => handleUserLogin(pageMenuPath.myFavorite)}
            key={pageMenuPath.overview}
            icon={<MessageOutlined />}
          >
            Communication
          </Menu.Item>
          <Menu.Item key="sub1" icon={<SmileOutlined />} title="Tests">
            Profile
          </Menu.Item>
          <Menu.Item key="sub1" icon={<ToolOutlined />} title="Tests">
            Tools
          </Menu.Item>
          <Menu.Item key="sub2" icon={<PushpinOutlined />}>
            Resource
          </Menu.Item>
        </Menu>
      </Sider>
    </Container>
  )
}
