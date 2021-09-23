import React from "react"
import { Layout } from "antd"

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FolderAddFilled
} from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux"
import { CLOSE_SIDE_NAV } from "@/App/actions/App.actions"
import { RootState } from "@/redux/reducer/rootReducer"
import { HeaderContent, IconHeader } from "./Navbar.styled"

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
      <HeaderContent>
        {renderIconCollapse(collapsed)}
        <IconHeader>
          <FolderAddFilled style={styledIcon} />
        </IconHeader>
      </HeaderContent>
    </Header>
  )
}
