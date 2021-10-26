import React from "react"
import { Menu, Popover } from "antd"
import {
  MailOutlined,
  SettingOutlined,
  LogoutOutlined
} from "@ant-design/icons"

export default function FooterMenu({ collapsed, menuMode }) {
  const footerMenu = [
    { content: "Settings", icon: SettingOutlined },
    { content: "Mail", icon: MailOutlined },
    { content: "Logout", icon: LogoutOutlined }
  ]

  const renderMenuItem = () => {
    return footerMenu.map(item => (
      <Menu.Item
        style={{ alignItems: "center", display: "flex", height: "45px" }}
        icon={
          <Popover content={item.content}>
            <item.icon />
          </Popover>
        }
        key={item.content}
      >
        {/* {item.content} */}
      </Menu.Item>
    ))
  }

  return (
    <Menu
      subMenuCloseDelay={0.2}
      style={{
        justifyContent: "center",
        width: "100%",
        margin: "0 auto",
        backgroundColor: "#f2f2f2"
      }}
      mode={!collapsed ? menuMode.horizontal : menuMode.inline}
    >
      {renderMenuItem()}
    </Menu>
  )
}
