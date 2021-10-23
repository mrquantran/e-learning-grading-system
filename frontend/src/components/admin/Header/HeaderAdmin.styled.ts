import styled from "styled-components"

export const StepHeaderStyled = styled.div`
  height: 0.4rem;
  border-radius: 0;
  background: #d1d7dc;
  //   border-radius: 9999px;
  height: 0.3rem;
  width: 100%;
  overflow: hidden;

  .meter--meter--27-bB {
    background: #5624d0;
    height: 100%;
    transform-origin: left center;
    transition: transform 150ms cubic-bezier(0.2, 0, 0.38, 0.9);
  }
  .meter--meter--27-bB {
    background: #5624d0;
    height: 100%;
    transform-origin: left center;
    transition: transform 150ms cubic-bezier(0.2, 0, 0.38, 0.9);
  }
`
export const ContentHeaderStyled = styled.div`
  border-left: 1px solid #d1d7dc;
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 1px;
  height: 100%;
  margin: 0 2.4rem;
  padding: 0 2.4rem;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 19px;
  }
`
