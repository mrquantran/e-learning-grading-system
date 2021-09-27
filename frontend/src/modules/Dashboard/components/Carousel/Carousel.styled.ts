import styled, { css } from "styled-components"

export const CarouselBoxStyled = styled.div`
  .bg-gradient-primary,
  .theme-primary .bg-gradient-primary,
  .theme-primary .art-bg {
    background: linear-gradient(45deg, #0052cc, #00baff);
  }

  .pull-up {
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

  .overflow-hidden {
    overflow: hidden !important;
  }

  .box-body {
    padding: 1.5rem 1.5rem;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    border-radius: 10px;
  }

  .box-body > *:last-child {
    margin-bottom: 0;
  }
  .align-items-center {
    align-items: center !important;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
`
