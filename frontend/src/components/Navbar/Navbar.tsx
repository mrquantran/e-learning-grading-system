import React from "react"
import { Layout } from "antd"

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux"
import { CLOSE_SIDE_NAV } from "@/App/actions/App.actions"
import { RootState } from "@/redux/reducer/rootReducer"
import { HeaderContent } from "./Navbar.styled"

const { Header } = Layout

const styledIcon = {
  fontSize: "25px",
  padding: "auto",
  marginLeft: "10px"
}

const headerStyled = {
  padding: 0,
  height: "80px",
  display: "flex",
  alignItems: "center"
}

export default function Navbar() {
  const dispatch = useDispatch()
  const collapsed = useSelector((state: RootState) => state.app.closeSideNav)

  const closeSideNav = () => {
    dispatch({ type: CLOSE_SIDE_NAV })
  }

  const renderIcon = (collapsed: boolean) => {
    if (collapsed) {
      return <MenuUnfoldOutlined onClick={closeSideNav} style={styledIcon} />
    }
    return <MenuFoldOutlined onClick={closeSideNav} style={styledIcon} />
  }

  return (
    <Header className="site-layout-background" style={headerStyled}>
      <HeaderContent>{renderIcon(collapsed)}</HeaderContent>
    </Header>
  )
}
