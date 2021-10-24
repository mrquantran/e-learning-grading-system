import React from "react"
import { PageHeader, Tag } from "antd"
import { ContainerHeaderManage } from "./HeaderManage.styled"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"

import { SettingOutlined } from "@ant-design/icons"

export default function HeaderManage() {
  return (
    <ContainerHeaderManage>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
        tags={<Tag color="blue">Draft</Tag>}
        extra={[
          <ButtonStyled primary key="save">
            Save
          </ButtonStyled>,
          <SettingOutlined />
        ]}
      ></PageHeader>
    </ContainerHeaderManage>
  )
}
