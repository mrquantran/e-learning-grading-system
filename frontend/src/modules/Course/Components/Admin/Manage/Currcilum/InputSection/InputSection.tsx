import { ButtonGroup, ButtonStyled } from "@/stylesheets/Button/Button.styled"
import { FlexItemStyled } from "@/stylesheets/Div/Div.styled"
import { FormGroup, InputAntd } from "@/stylesheets/Input/Inputantd.styled"
import { LabelAntdStyled } from "@/stylesheets/Input/LabelAntd.styled"
import React from "react"
import {
  SectionContent,
  SectionCreateInput,
  SectionStyled,
  SectionTitle
} from "../Section/Section.styled"

export default function InputSection({ handleCloseAddSection }) {
  return (
    <SectionStyled input>
      <SectionContent>
        <FlexItemStyled baseline>
          <SectionTitle>
            <span>New Section:{/* Section {order}:{" "} */}</span>
          </SectionTitle>
          <SectionCreateInput>
            {/* <FileTextOutlined /> */}
            <div style={{ flex: 1 }}>
              <FormGroup>
                <InputAntd section placeholder="Enter a Title" />
              </FormGroup>
              <FormGroup>
                <LabelAntdStyled fontSmall>
                  What will students be able to do at the end of this section?
                </LabelAntdStyled>
                <InputAntd section placeholder="Enter a Learning Objective" />
              </FormGroup>
              <ButtonGroup>
                <ButtonStyled udemy purple>
                  Add section
                </ButtonStyled>
                <ButtonStyled
                  onClick={handleCloseAddSection}
                  dangerText
                  transparent
                >
                  Cancel
                </ButtonStyled>
              </ButtonGroup>
            </div>
          </SectionCreateInput>
        </FlexItemStyled>
      </SectionContent>
    </SectionStyled>
  )
}
