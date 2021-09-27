import styled from "styled-components"

export const Container = styled.div`
  // .sider {
  //   width: 256px !important;
  //   flex: 0 0 256px !important;
  //   max-width: 300px !important;
  //   min-width: 256px !important;
  // }

  // .site-layout .site-layout-background {
  //   background: #fff;
  // }

  .logo {
    display: flex;
    align-items: center;
    img {
      width: 108px;
      padding: 10px;
      height: 62px;
    }
    height: 80px;
    background: #fff;
  }
  .logo img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 125px;
  }

  .menu-style {
    height: 100vh;
    // width: 256px;
    background: #fff;
    // position: fixed;
    .ant-menu-item {
      height: 57px !important;
    }
  }
`
