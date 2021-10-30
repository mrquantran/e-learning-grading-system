import styled, { css } from "styled-components"

export const EditArrowStyled = styled.div`
  margin-left: 60px;
  margin-right: 10px;
  &:hover {
    .editArrow {
      opacity: 1 !important;
    }
  }
`

export const EditArrowContainer = styled.div`
  width: 100%;
  margin-left: -60px;
  position: absolute;
  top: -80px;
  height: 80px;
`

export const ButtonEdit = styled.button`

  @keyframes fadeout {
    0% {
      transform: scale(0);
      transform-origin: 50% 50%;
      opacity: 0;
    }
    50% {
      transform: scale(1);
      transform-origin: 50% 50%;
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes clock {
    0% {
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(-11.25deg);
    }
    50%{
        transform: rotate(-22.5deg);
    }
    75%{
        transform: rotate(-33.75deg);

    }
    100%{
        transform: rotate(-45deg);
    }
  }

    @keyframes reverseClock {
    0% {
        transform: rotate(-45deg);
    }
    25%{
        transform: rotate(-33.75deg);
    }
    50%{
        transform: rotate(-22.5deg);
    }
    75%{
        transform: rotate(-11.25deg);

    }
    100%{
        transform: rotate(0deg);
    }
  }

  .addSectionIcon{
    transition: all .5s ease-in-out;
      animation: ${({ isFocus }) =>
        isFocus
          ? css`
          clock 0.5s ease-in-out 1 forwards;
        `
          : css`
          reverseClock 0.5s ease-in-out 1 forwards;
        `};
  }

  top: 45px;
  position: relative;
  left: -19px;
  opacity: 0;
  transition: all 500ms;
  width: 40px;
  height: 27px;
  border: 1px dashed #6a6f73;
  border-right: 0;
  background: #fff;
  &:before {
    transition: all 500ms;
    background: #fff;
    border: 1px dashed #6a6f73;
    border-bottom: none;
    border-left: none;
    transform: rotate(35deg) skew(-15deg);
    position: absolute;
    width: 21px;
    height: 21px;
    content: "";
    right: -11px;
    animation: 
    top: 2px;
  }



  ${props =>
    props.isFocus &&
    css`
      border: 1px dashed #fff;
      border-bottom: none;
      border-left: none;
      transition: all 500ms;
      opacity: 1;
      .anticon {
        transform: rotate(-45deg);
      }

      &:before {
        border: 1px dashed #fff;
        border-bottom: none;
        border-left: none;
      }
    `}
`
