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

export default function Permission() {
  const dispatch = useDispatch()

  const router = useRouter()
  const { courseId } = router.query

  const { data } = useSelector((state: RootState) => state.create.settings)

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
        <div className="mt-20">
          <FormGroup>
            <InputAntd placeholder="Enter an email associated with a Udemy account" />
          </FormGroup>
        </div>
        <div>
          <ButtonStyled secondary>Save</ButtonStyled>
        </div>
      </div>
    </SettingWrapper>
  )
}
