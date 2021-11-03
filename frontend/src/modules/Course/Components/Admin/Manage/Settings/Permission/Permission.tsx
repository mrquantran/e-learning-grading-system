import React, { useEffect } from "react"
import { SettingWrapper, TableContainer } from "../Settings.styled"
import { Table } from "antd"
import { FormGroup, InputAntd } from "@/stylesheets/Input/Inputantd.styled"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"
import { useDispatch, useSelector } from "react-redux"
import ManageCourseAction from "@/modules/Course/action/manageCourseAction"
import { useRouter } from "@/hooks/useRouter"
import { TYPE_USER } from "@/utils/ENUM"
import { RootState } from "@/redux/reducer/rootReducer"
import { Alert } from "antd"
import { Field, Formik } from "formik"

const columns = [
  { title: "Instructor", dataIndex: "name", key: "name" },
  { title: "Role", dataIndex: "role", key: "role" },
  { title: "email", dataIndex: "email", key: "eail" },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>
  }
]

function validateEmail(value) {
  let error
  if (!value) {
    error = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address"
  }
  return error
}

export default function Permission() {
  const dispatch = useDispatch()

  const router = useRouter()
  const { courseId } = router.query

  const { data, error, message } = useSelector(
    (state: RootState) => state.create.settings
  )

  const mappingData = data?.map(item => ({
    ...item,
    name: item.firstName + " " + item.lastName,
    description: "This is description of your user"
  }))

  const dispatchUserEnroll = () => {
    dispatch(
      ManageCourseAction.getTeacherInCourse(Number(courseId), TYPE_USER.teacher)
    )
  }

  const dispatchInstructorEnroll = values => {
    dispatch(
      ManageCourseAction.enrollCourseAsInstructor(Number(courseId), values)
    )
  }

  useEffect(() => {
    dispatchUserEnroll()
  }, [])

  return (
    <SettingWrapper wrapper2>
      <p className="blockLabel">Permissions</p>
      <div>
        <TableContainer>
          <Table
            columns={columns}
            expandable={{
              expandedRowRender: record => (
                <p style={{ margin: 0 }}>{record.description}</p>
              ),
              rowExpandable: record => record.name !== "Not Expandable"
            }}
            dataSource={mappingData}
            pagination={false}
          />
        </TableContainer>
        <div className="mt-20 mb-15">
          <Formik
            initialValues={{ email: null }}
            onSubmit={values => {
              // eslint-disable-next-line no-console
              console.log(values)
              // handleSubmit(values)
              dispatchInstructorEnroll(values)
            }}
          >
            {props => (
              <form onSubmit={props.handleSubmit}>
                <Field name="email" type="text" validate={validateEmail}>
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta
                  }) => (
                    <InputAntd
                      placeholder="Enter an email associated with a Udemy account"
                      name="email"
                      {...field}
                    />
                  )}
                </Field>
                <div className="mt-10">
                  <ButtonStyled secondar type="submit">
                    Save
                  </ButtonStyled>
                </div>
              </form>
            )}
          </Formik>
        </div>

        <div className="mt-25">
          {error ? <Alert message={error} type="error" /> : null}
          {message ? <Alert message={message} type="success" /> : null}
        </div>
      </div>
    </SettingWrapper>
  )
}
