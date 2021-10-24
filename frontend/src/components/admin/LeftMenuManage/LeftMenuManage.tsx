import React from "react"

import { Menu } from "antd"
import { LeftMenuManageStyled } from "./LeftMenuManageStyled"

import { RadioAntd } from "@/stylesheets/Input/Inputantd.styled"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"

const { SubMenu } = Menu

export default function LeftMenuManage() {
  return (
    <LeftMenuManageStyled>
      <Menu
        // theme={this.state.theme}
        // onClick={this.handleClick}
        style={{ width: 256 }}
        // defaultOpenKeys={["sub1"]}
        // selectedKeys={["sub1", "sub2", "sub3", "sub4"]}
        defaultOpenKeys={["sub1", "sub2", "sub3", "sub4"]}
        mode="inline"
      >
        <SubMenu key="sub4" title="Create your content">
          <Menu.Item key="9">
            <RadioAntd disabled={true} />
            Film & edit
          </Menu.Item>
          <Menu.Item key="10">
            <RadioAntd />
            Curriculum
          </Menu.Item>
          <Menu.Item key="11">
            <RadioAntd />
            Captions
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub1" title="Publish Your Course">
          <Menu.Item key="1">
            <RadioAntd />
            Course Landing Page
          </Menu.Item>
          <Menu.Item key="2">
            <RadioAntd />
            Pricing
          </Menu.Item>
          <Menu.Item key="3">
            <RadioAntd />
            Promotions
          </Menu.Item>
          <Menu.Item key="4">
            <RadioAntd />
            Course Message
          </Menu.Item>
        </SubMenu>
      </Menu>
      <ButtonStyled purple style={{ margin: "20px 20px 15px" }}>
        Submit for Review
      </ButtonStyled>
    </LeftMenuManageStyled>
  )
}
