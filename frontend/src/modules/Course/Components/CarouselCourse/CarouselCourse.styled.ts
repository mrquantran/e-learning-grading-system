import styled from "styled-components"

export const CarouselCourseItemStyled = styled.div`
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
  }

  .theme-primary .bg-success-light {
    background-color: #d1f5f0 !important;
    color: #04a08b;
  }

  .theme-primary .btn-info-light {
    background-color: #d1f3ff;
    border-color: #d1f3ff;
    color: #00baff;
  }

  .btn {
    border-radius: 4px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 1px solid transparent;
    cursor: pointer;
    line-height: inherit;
    padding: 8px 16px;
    font-size: 1.1rem;
    -webkit-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }

  .btn-info-light {
    background-color: #d1f3ff;
    border-color: #d1f3ff;
    color: #00baff;
  }
`
