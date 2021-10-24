import styled, { css } from "styled-components"

export const CourseCardImageStyled = styled.div`
  overflow: hidden;
  position: relative;
  width: 8.8rem;
  height: 100%;

  img {
  }
`

export const CourseDraftItemStyled = styled.div`
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
    padding: 0 !important;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    align-items: center;
    justify-content: space-between;
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

export const CourseProgressStyled = styled.div`
  // flex: 1;
  width: 50%;
  // display: flex;
  // align-items: center;
  // flex-wrap: wrap;
  padding: 0.8rem 1.6rem;
  gap: 1.6rem;
  .courses--course-progress--C_Gvp {
    flex: 1;
    min-width: 50%;
  }
  .meter--meter-wrapper--R6ZCR {
    background: #d1d7dc;
    border-radius: 9999px;
    height: 0.8rem;
    overflow: hidden;
  }
  .meter--meter--27-bB {
    background: #5624d0;
    height: 100%;
    transform-origin: left center;
    transition: transform 150ms cubic-bezier(0.2, 0, 0.38, 0.9);
  }
`
