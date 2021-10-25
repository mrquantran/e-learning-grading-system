import styled, { css } from "styled-components"

export const CourseItemStyled = styled.div`
  .pull-up {
    -webkit-transition: all 0.25s ease;
    -o-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }

  .box {
    position: relative;
    margin-bottom: 30px;
    width: 100%;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 0px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-shadow: 0 0 30px 0 rgb(82 63 105 / 5%);
    box-shadow: 0 0 30px 0 rgb(82 63 105 / 5%);
  }

  .box-body {
    padding: 1.5rem 1.5rem;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    border-radius: 10px;
    color: #172b4c;
    ${props =>
      props.flex &&
      css`
        display: flex;
      `}
  }

  .theme-primary .bg-primary {
    background-color: #0052cc !important;
    color: #ffffff;
  }

  .box-header .box-title {
    display: inline-block;
    margin: 0;
    font-weight: 400;
  }
`
