import React, { useEffect } from "react"

import { Menu } from "antd"
import { LeftMenuManageStyled } from "./LeftMenuManageStyled"

import { RadioAntd } from "@/stylesheets/Input/Inputantd.styled"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/reducer/rootReducer"

const { SubMenu } = Menu

export default function LeftMenuManage({ selectedKey, setSelectedKey }) {
  const {
    manageTabs: { course }
  } = useSelector((state: RootState) => state.create)

  useEffect(() => {
    setSelectedKey(course[0].childTabs[1].id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderSubMenu = () => {
    return course.map(item => (
      <SubMenu key={item.id} title={item.title}>
        {item.childTabs.map(child => {
          if (child.id === "settings") {
            return null
          }
          return (
            <Menu.Item key={child.id}>
              <RadioAntd disabled={true} />
              {child.title}
            </Menu.Item>
          )
        })}
      </SubMenu>
    ))
  }

  return (
    <LeftMenuManageStyled>
      <Menu
        // theme={this.state.theme}
        // onClick={this.handleClick}
        selectedKeys={selectedKey}
        // defaultSelectedKeys={[selectedKey]}
        style={{ width: 256 }}
        defaultOpenKeys={course.map(item => item.id)}
        mode="inline"
        onSelect={({ key }) => {
          setSelectedKey(key)
        }}
      >
        {renderSubMenu()}
      </Menu>
      <ButtonStyled type="submit" purple style={{ margin: "20px 20px 15px" }}>
        Submit for Review
      </ButtonStyled>
    </LeftMenuManageStyled>
  )
}
