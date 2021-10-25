/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import SelectInput from "@/components/Formik/Select/SelectInput"
import { FormGroup, InputAntd } from "@/stylesheets/Input/Inputantd.styled"
import { LabelAntdStyled } from "@/stylesheets/Input/LabelAntd.styled"
import { Formik } from "formik"
import { countryList } from "@/utils/CountryList"
import { OPTIONS_CATEGORY, OPTIONS_LEVEL } from "@/utils/ENUM"
import { Col, Row } from "antd"
import React, { useEffect, useState } from "react"
import { UploadImageStyled } from "./LandingPageCourse.styled"
import UploadInput from "@/components/Formik/Upload/UploadInput"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/reducer/rootReducer"

export default function LandingPageCourse() {
  const options = countryList.map(item => {
    return { content: item, value: item }
  })

  const defaultValue = countryList.find(item => item === "Vietnam")

  const { data } = useSelector((state: RootState) => state.create.detail)

  const [initialValue, setInitialValue] = useState<any>({
    name: "",
    subTitle: "",
    courseDetails: ""
  })

  const handleChange = e => {
    setInitialValue({
      ...initialValue,
      [`${e.target.name}`]: e.target.value
    })
  }

  useEffect(() => {
    if (data) {
      setInitialValue(data)
    }
  }, [data])

  return (
    <Formik initialValues={initialValue} onSubmit={(values, actions) => {}}>
      {props => {
        return (
          <form
            onSubmit={props.handleSubmit}
            id="form-landing-page"
            autoComplete="off"
            style={{ height: "100%", position: "relative" }}
          >
            <FormGroup>
              <LabelAntdStyled>Course Title</LabelAntdStyled>
              <InputAntd
                name="name"
                value={initialValue.name}
                onChange={handleChange}
                onBlur={props.handleBlur}
                placeholder="Insert your course title"
              />
            </FormGroup>
            <FormGroup>
              <LabelAntdStyled>Course Subtitle</LabelAntdStyled>
              <InputAntd
                name="subTitle"
                placeholder="Insert your course subtitle"
              />
            </FormGroup>
            <FormGroup>
              <LabelAntdStyled>Course Description</LabelAntdStyled>
              <InputAntd
                description
                name="courseDetails"
                onChange={handleChange}
                value={initialValue.courseDetails}
                placeholder="Insert your course description"
              />
            </FormGroup>
            <>
              <LabelAntdStyled>Basic Info</LabelAntdStyled>
              <Row justify="space-between">
                <Col span={8}>
                  <FormGroup col3>
                    <SelectInput
                      defaultValue={defaultValue}
                      options={options}
                    />
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
                        to be accepted. Important guidelines: 750x422 pixels;
                        .jpg, .jpeg,. gif, or .png. no text on the image.
                      </span>
                    </p>
                    <UploadInput />
                  </FormGroup>
                </Col>
              </Row>
            </div>
          </form>
        )
      }}
    </Formik>
  )
}
