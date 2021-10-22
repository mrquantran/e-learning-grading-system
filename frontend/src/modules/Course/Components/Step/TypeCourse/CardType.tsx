import React from "react"
import { Card } from "antd"
import { TitleCardStyled } from "@/stylesheets/Title/Title.styled"
import {
  CardBodyStyled,
  CardStyled,
  SubContentCardStyled
} from "./TypeCourse.styled"
import { IconCardStyled } from "@/stylesheets/Icon/Icon.styled"

export default function CardType({ title, content, active, icon }) {
  return (
    <CardStyled active={active}>
      <Card style={{ width: "100%", height: "100%" }}>
        <CardBodyStyled>
          <IconCardStyled>{icon}</IconCardStyled>
          <TitleCardStyled marginY center>
            {title}
          </TitleCardStyled>
          <SubContentCardStyled>{content}</SubContentCardStyled>
        </CardBodyStyled>
      </Card>
    </CardStyled>
  )
}
