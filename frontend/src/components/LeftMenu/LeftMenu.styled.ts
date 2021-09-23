import styled from "styled-components"
import { Layout } from "antd"
import { LayoutProps } from "antd/lib/layout"

const { Sider } = Layout

export const SiderStyled: React.FunctionComponent<LayoutProps> = styled(Sider)`
  width: 256px !important;
  flex: 0 0 256px !important;
  max-width: 300px !important;
  min-width: 256px !important;
  .site-layout .site-layout-background {
    background: #fff;
  }
  .logo {
    padding: 49px;
    background: #fff;
  }
  .menu-style {
    height: 100vh;
    width: 256px;
    position: fixed;
    .ant-menu-item {
      height: 57px !important;
    }
  }
`
