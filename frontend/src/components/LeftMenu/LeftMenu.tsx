/* eslint-disable no-console */
import React, { useEffect } from "react"
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

import { Link } from "react-router-dom"

const { Sider } = Layout
const { SubMenu } = Menu

export default function LeftMenu() {
  const collapsed = useSelector((state: RootState) => state.app.closeSideNav)

  useEffect(() => {
    console.log(collapsed)
  }, [collapsed])

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
          // style={{ height: "100%" }}
          // theme="dark"
          // inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            My Courses
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Favorite
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
