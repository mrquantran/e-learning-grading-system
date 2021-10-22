/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Layout, Row, Menu, Dropdown, Col, Button, Popover } from "antd"
import { IconHeader } from "@/components/Navbar/Navbar.styled"

import { UserOutlined } from "@ant-design/icons"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"
import { history } from "@/App/App"

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
  width: "100%",
  alignItems: "center",
  background: "#f0f2f5"
}

const menuProfile = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="#">
        Profile
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="#">
        My Learning
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Logout</Menu.Item>
  </Menu>
)

const content = (
  <div>
    <span>
      Switch to the student view here - get back to the courses you’re taking
    </span>
  </div>
)

export default function NavbarAdmin() {
  return (
    <Header className="site-layout-background" style={headerStyled}>
      <Row style={{ width: "100%", justifyContent: "space-between" }}>
        <Col
          span={24}
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center"
          }}
        >
          <Dropdown overlay={menuProfile} placement="bottomLeft">
            <IconHeader>
              <UserOutlined style={styledIcon} />
            </IconHeader>
          </Dropdown>
          <Popover placement="bottomRight" content={content} trigger="hover">
            <ButtonStyled
              onClick={() => history.push("/")}
              style={{ height: "50px" }}
            >
              Student
            </ButtonStyled>
          </Popover>
        </Col>
      </Row>
    </Header>
  )
}
