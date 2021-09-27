import styled, { css } from "styled-components"

export const DashboardComponentsStyled = styled.div`
  min-height: 250px;
  padding: 15px 30px 0px 30px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`
export const DashboardRowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  ${props =>
    props.alignItemEnds &&
    css`
      align-items: flex-end !important;
    `}
`
export const DashboardOneColumns = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
`

export const DashboardTwoColumnsItem = styled.div``
