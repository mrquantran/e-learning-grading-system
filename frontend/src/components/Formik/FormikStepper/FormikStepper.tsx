import React, { useState } from "react"
import { Form, Formik, FormikConfig, FormikValues } from "formik"
import { FooterStyled } from "@/components/admin/Footer/Footer.styled"
import { Layout } from "antd"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"
import { LoadingOutlined } from "@ant-design/icons"
import { ContentCreateCourseStyled } from "@/pages/admin/CreateCourse/CreateCourse.styled"
import { useRouter } from "@/hooks/useRouter"
import pathRoute from "@/routes/routePath"
import { history } from "@/App/App"

const { Footer } = Layout

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  label: string
}

export default function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<FormikStepProps>[]

  const [step, setStep] = useState(0)
  const router = useRouter()
  const { step: stepCurrently } = router.query

  const currentChild = childrenArray[step]

  function isLastStep() {
    return step === childrenArray.length - 1
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers)
        } else {
          setStep(s => s + 1)

          // the next line was not covered in the youtube video
          //
          // If you have multiple fields on the same step
          // we will see they show the validation error all at the same time after the first step!
          //
          // If you want to keep that behaviour, then, comment the next line :)
          // If you want the second/third/fourth/etc steps with the same behaviour
          //    as the first step regarding validation errors, then the next line is for you! =)
          //
          // In the example of the video, it doesn't make any difference, because we only
          //    have one field with validation in the second step :)
          helpers.setTouched({})
        }
      }}
    >
      {({ isSubmitting, dirty }) => {
        return (
          <Form
            autoComplete="off"
            style={{ height: "100%", position: "relative" }}
          >
            <ContentCreateCourseStyled>
              {currentChild}
            </ContentCreateCourseStyled>
            <FooterStyled>
              <Footer
                style={{
                  background: "#fff"
                }}
              >
                <div className="footer-button">
                  {step > 0 ? (
                    <ButtonStyled
                      primary
                      // onClick={goToPrevious}
                      disabled={isSubmitting}
                      variant="contained"
                      onClick={() => {
                        history.push(
                          `${pathRoute.createCourse}/${
                            Number(stepCurrently) - 1
                          }`
                        )
                        setStep(s => s - 1)
                      }}
                    >
                      Previous
                    </ButtonStyled>
                  ) : null}
                  <div style={{ flex: "1 1 0%" }} />
                  <ButtonStyled
                    danger
                    startIcon={isSubmitting ? <LoadingOutlined /> : null}
                    disabled={!dirty}
                    onClick={() =>
                      !isLastStep()
                        ? history.push(
                            `${pathRoute.createCourse}/${
                              Number(stepCurrently) + 1
                            }`
                          )
                        : null
                    }
                    variant="contained"
                    type="submit"
                  >
                    {isSubmitting
                      ? "Submitting"
                      : isLastStep()
                      ? "Submit"
                      : "Continue"}
                  </ButtonStyled>
                </div>
              </Footer>
            </FooterStyled>
          </Form>
        )
      }}
    </Formik>
  )
}
