/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import SelectInput from "@/components/Formik/Select/SelectInput"
import { FormGroup, InputAntd } from "@/stylesheets/Input/Inputantd.styled"
import { LabelAntdStyled } from "@/stylesheets/Input/LabelAntd.styled"
import { countryList } from "@/utils/CountryList"
import { OPTIONS_CATEGORY, OPTIONS_LEVEL } from "@/utils/ENUM"
import { Col, Row } from "antd"
import React, { useState } from "react"
import { Upload, message } from "antd"
import { UploadImageStyled } from "./LandingPageCourse.styled"
import UploadInput from "@/components/Formik/Upload/UploadInput"

export default function LandingPageCourse() {
  const options = countryList.map(item => {
    return { content: item, value: item }
  })

  const defaultValue = countryList.find(item => item === "Vietnam")

  return (
    <>
      <FormGroup>
        <LabelAntdStyled>Course Title</LabelAntdStyled>
        <InputAntd placeholder="Insert your course title" />
      </FormGroup>
      <FormGroup>
        <LabelAntdStyled>Course Subtitle</LabelAntdStyled>
        <InputAntd placeholder="Insert your course subtitle" />
      </FormGroup>
      <FormGroup>
        <LabelAntdStyled>Course Description</LabelAntdStyled>
        <InputAntd description placeholder="Insert your course description" />
      </FormGroup>
      <>
        <LabelAntdStyled>Basic Info</LabelAntdStyled>
        <Row justify="space-between">
          <Col span={8}>
            <FormGroup col3>
              <SelectInput defaultValue={defaultValue} options={options} />
            </FormGroup>
          </Col>

          <Col span={8}>
            <FormGroup col3>
              <SelectInput
                defaultValue={OPTIONS_LEVEL[0].value}
                options={OPTIONS_LEVEL}
              />
            </FormGroup>
          </Col>
          <Col span={8}>
            <FormGroup>
              <SelectInput
                options={OPTIONS_CATEGORY}
                defaultValue={OPTIONS_CATEGORY[0].value}
              />
            </FormGroup>
          </Col>
        </Row>
      </>
      <div>
        <LabelAntdStyled>Course image</LabelAntdStyled>
        <Row justify="space-between">
          <Col span={12}>
            <UploadImageStyled style={{ marginRight: "10px" }}>
              <img
                data-purpose="image-preview"
                alt="Course image"
                src="https://s.udemycdn.com/course/750x422/placeholder.jpg"
              ></img>
            </UploadImageStyled>
          </Col>
          <Col span={12}>
            <FormGroup upload>
              <p style={{ margin: "0 0 10.5px" }}>
                <span>
                  Upload your course image here. It must meet our{" "}
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    course image quality standards
                  </a>{" "}
                  to be accepted. Important guidelines: 750x422 pixels; .jpg,
                  .jpeg,. gif, or .png. no text on the image.
                </span>
              </p>
              <UploadInput />
            </FormGroup>
          </Col>
        </Row>
      </div>
    </>
  )
}
