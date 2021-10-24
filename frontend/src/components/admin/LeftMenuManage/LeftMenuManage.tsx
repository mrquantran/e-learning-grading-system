import React from "react"
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons"

import { Menu } from "antd"

const { SubMenu } = Menu

export default function LeftMenuManage() {
  return (
    <Menu
      // theme={this.state.theme}
      // onClick={this.handleClick}
      style={{ width: 256 }}
      // defaultOpenKeys={["sub1"]}
      // selectedKeys={["sub1", "sub2", "sub3", "sub4"]}
      defaultOpenKeys={["sub1", "sub2", "sub3", "sub4"]}
      mode="inline"
    >
      <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </Menu>
  )
}
