import React from "react"
import { SettingWrapper, TableContainer } from "../Settings.styled"
import { Table } from "antd"
import { FormGroup, InputAntd } from "@/stylesheets/Input/Inputantd.styled"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"

const columns = [
  { title: "Instructor", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Address", dataIndex: "address", key: "address" },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>
  }
]

const data = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park."
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    description:
      "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park."
  },
  {
    key: 3,
    name: "Not Expandable",
    age: 29,
    address: "Jiangsu No. 1 Lake Park",
    description: "This not expandable"
  },
  {
    key: 4,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    description:
      "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park."
  }
]

export default function Permission() {
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
            dataSource={data}
          />
        </TableContainer>
        <div className="mt-20">
          <FormGroup>
            <InputAntd placeHolder="Enter an email associated with a Udemy account" />
          </FormGroup>
        </div>
        <div>
          <ButtonStyled secondary>Save</ButtonStyled>
        </div>
      </div>
    </SettingWrapper>
  )
}
