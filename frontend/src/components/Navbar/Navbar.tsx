import React from "react"
import { Layout } from "antd"
import { Col } from "antd"
import { Input, AutoComplete } from "antd"
import { Menu, Dropdown, message } from "antd"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FolderAddFilled,
  BookOutlined,
  ExpandAltOutlined,
  NotificationFilled,
  UserOutlined,
  SettingOutlined
} from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux"
import { CLOSE_SIDE_NAV } from "@/App/actions/App.actions"
import { RootState } from "@/redux/reducer/rootReducer"
import { HeaderContent, IconHeader } from "./Navbar.styled"

import { Link } from "react-router-dom"

const { Header } = Layout

const styledIcon = {
  fontSize: "25px",
  padding: "auto"
  // marginLeft: "20px"
}

const headerStyled = {
  padding: 0,
  height: "80px",
  display: "flex",
  alignItems: "center",
  background: "#f0f2f5"
}

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
)

const menuProfile = (
  <Menu>
    <Menu.Item key="0">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>
      3rd menu item（disabled）
    </Menu.Item>
  </Menu>
)

export default function Navbar() {
  const dispatch = useDispatch()
  const collapsed = useSelector((state: RootState) => state.app.closeSideNav)

  const closeSideNav = () => {
    dispatch({ type: CLOSE_SIDE_NAV })
  }

  const renderIconCollapse = (collapsed: boolean) => {
    if (collapsed) {
      return (
        <IconHeader>
          <MenuUnfoldOutlined onClick={closeSideNav} style={styledIcon} />
        </IconHeader>
      )
    }
    return (
      <IconHeader>
        <MenuFoldOutlined onClick={closeSideNav} style={styledIcon} />
      </IconHeader>
    )
  }

  return (
    <Header className="site-layout-background" style={headerStyled}>
      {/* <Row> */}
      <Col span={16}>
        <HeaderContent>
          {renderIconCollapse(collapsed)}
          <IconHeader>
            <FolderAddFilled style={styledIcon} />
          </IconHeader>
          <IconHeader>
            <BookOutlined style={styledIcon} />
          </IconHeader>
        </HeaderContent>
      </Col>
      <Col span={8}>
        <HeaderContent>
          {/* {renderIconCollapse(collapsed)} */}
          <IconHeader>
            <ExpandAltOutlined style={styledIcon} />
          </IconHeader>
          <AutoComplete
            dropdownClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={500}
            style={{
              width: 250,
              margin: "0 20px"
            }}
            // options={options}
          >
            <Input.Search size="large" placeholder="input here" />
          </AutoComplete>
          <Dropdown overlay={menu}>
            <IconHeader>
              <NotificationFilled style={styledIcon} />
            </IconHeader>
          </Dropdown>
          {/* <Dropdown overlay={menuProfile} placement="bottomCenter"> */}
          <Link to="/login">
            <IconHeader>
              <UserOutlined style={styledIcon} />
            </IconHeader>
          </Link>
          {/* </Dropdown> */}
          <Dropdown overlay={menu}>
            <IconHeader>
              <SettingOutlined style={styledIcon} />
            </IconHeader>
          </Dropdown>
        </HeaderContent>
      </Col>
      {/* </Row> */}
    </Header>
  )
}
