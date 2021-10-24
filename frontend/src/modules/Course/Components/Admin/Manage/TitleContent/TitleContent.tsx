import React from "react"
import styled from "styled-components"

const TitleContentStyled = styled.div`
  display: flex;
  position: relative;
  padding: 30px 45px;
  border-bottom: 1px solid #d1d7dc;
`

const TitleFlexStyled = styled.div`
  flex: 1;
  min-width: 1px;
  display: flex;
`

export default function TitleContent({ title }) {
  return (
    <TitleContentStyled>
      <TitleFlexStyled>
        <h2>{title}</h2>
      </TitleFlexStyled>
    </TitleContentStyled>
  )
}
