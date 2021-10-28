import styled from "styled-components"
export const ContainerHeaderManage = styled.div`
  display: flex;
  justify-content: space-between;
  //   background: #1c1d1f;
  vertical-align: center;
  padding-left: 16px;
  align-items: center;
  opacity: 1;
  font-size: 20px;
  color: #fff !important;
  box-shadow: 0 4px 8px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 24%);
  height: 65px;
  span {
    font-size: 20px;
    display: flex;
    align-items: center;
  }

  .ant-page-header-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ant-page-header {
    width: 100%;
    padding: 5px 24px;
  }

  .ant-page-header-heading-left {
    display: flex;
    align-items: baseline;
  }

  .ant-page-header-back {
    display: flex;
    align-items: center;
  }
`
