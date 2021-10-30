import styled, { css } from "styled-components"

export const LectureArrowStyled = styled.div`
  position: relative;

  margin-left: -38px;
  top: 0px;
  &:hover {
    .addLectureArrow {
      opacity: 1 !important;
    }
  }
  ${props =>
    props.type &&
    css`
      top: 40px;
      left: 14px;
    `}
`

export const ButtonAddLecture = styled.button`
  width: 40px;
  height: 27px;
  position: relative;
  border: 1px dashed #6a6f73;
  border-right: 0;
  background: #fff;
  opacity: 0;
  padding: 2px 8px;
  font-size: 13px;
  line-height: 1.35135;
  transition: all 500ms;
  &:before {
    transition: all 500ms;
    content: "";
    position: absolute;
    right: -11px;
    top: 2px;
    height: 21px;
    width: 21px;
    background: #fff;
    border: 1px dashed #6a6f73;
    border-bottom: none;
    border-left: none;
    transform: rotate(35deg) skew(-15deg);
  }

  @keyframes lectureClock {
    0% {
      transform: rotate(0deg);
      left: 0px;
    }
    100% {
      transform: rotate(-45deg);
      left: 60px;
    }
  }

  @keyframes reverseLectureClock {
    0% {
      transform: rotate(-45deg);
      left: 60px;
    }
    100% {
      transform: rotate(0deg);
      left: 0px;
    }
  }

  .addLectureArrowIcon {
    transition: all 0.5s ease-in-out;
    animation: ${({ isFocus }) =>
      isFocus
        ? css`
          lectureClock 0.5s ease-in-out 1 forwards;
        `
        : css`
          reverseLectureClock 0.5s ease-in-out 1 forwards;
        `};
  }

  ${props =>
    props.isFocus &&
    css`
      margin-left: -31px;
      border: none;
      opacity: 1;
      background: 0 0;
      .anticon {
        left: 60px;
        transform: rotate(-135deg);
      }

      &:before {
        right: -14px;
        transform: rotate(45deg) skew(0deg);
        border-style: solid;
        border-left: none;
        border-bottom: none;
      }
    `}
`
