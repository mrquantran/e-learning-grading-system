import styled from "styled-components"
import { Layout } from "antd"
import { LayoutProps } from "antd/lib/layout"
import "antd/dist/antd.css"

export const LayoutStyled: React.FunctionComponent<LayoutProps> = styled(
  Layout
)`
  // height: 100%;
  .site-layout .site-layout-background {
    background: #fff;
  }
`