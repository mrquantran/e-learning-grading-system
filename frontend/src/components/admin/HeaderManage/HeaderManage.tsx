import React from "react"
import { PageHeader, Tag } from "antd"
import { ContainerHeaderManage } from "./HeaderManage.styled"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"

import { SettingOutlined } from "@ant-design/icons"

const button = [
  { id: "film&Edit", button: <ButtonStyled /> },
  { id: "curriculum", button: <ButtonStyled /> },
  { id: "captions", button: <ButtonStyled /> },
  {
    id: "courseLandingPage",
    button: (
      <ButtonStyled primary key="save">
        Save
      </ButtonStyled>
    )
  },
  { id: "pricing", button: <ButtonStyled /> },
  { id: "promotions", button: <ButtonStyled /> }
]

export default function HeaderManage({ headerExtra }) {
  const buttonExtra = button.find(item => item.id === headerExtra.id)

  return (
    <ContainerHeaderManage>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Title"
        subTitle="0min of video content uploaded"
        tags={<Tag color="blue">Draft</Tag>}
        extra={[buttonExtra?.button, <SettingOutlined />]}
      ></PageHeader>
    </ContainerHeaderManage>
  )
}
