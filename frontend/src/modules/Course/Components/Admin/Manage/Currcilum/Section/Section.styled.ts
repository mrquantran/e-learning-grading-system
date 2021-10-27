import styled from "styled-components"

export const SectionStyled = styled.li`
  margin-top: 60px;
  padding-bottom: 40px;

  border: 1px solid #6a6f73;
  background-color: #f7f9fa;
`

export const SectionContent = styled.div`
  border: 0;
  padding: 20px 10px;
`

export const SectionTitle = styled.div`
  span {
    font-weight: 700;
    display: flex;
    align-items: center;
  }
  font-size: 15px;
  max-width: 480px;
  padding: 5px 5px 5px 0;
  white-space: nowrap;
`

export const SectionGroupTitle = styled.span`
  padding-left: 10px;
  span {
    font-weight: 400 !important;
  }

  .anticon {
    padding-right: 5px;
  }
`
