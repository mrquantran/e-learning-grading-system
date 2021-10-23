import React from "react"
import { DatePicker, Form, Input, TimePicker, Select } from "antd"

const FormItem = Form.Item
const { Option } = Select

const CreateAntField =
  AntComponent =>
  ({
    field,
    form,
    hasFeedback,
    label,
    selectOptions,
    submitCount,
    type,
    ...props
  }) => {
    const touched = form.touched[field.name]
    const submitted = submitCount > 0
    const hasError = form.errors[field.name]
    const submittedError = hasError && submitted
    const touchedError = hasError && touched
    const onInputChange = ({ target: { value } }) =>
      form.setFieldValue(field.name, value)
    const onChange = value => form.setFieldValue(field.name, value)
    const onBlur = () => form.setFieldTouched(field.name, true)
    return (
      <div className="field-container">
        <FormItem
          label={label}
          hasFeedback={
            (hasFeedback && submitted) || (hasFeedback && touched)
              ? true
              : false
          }
          help={submittedError || touchedError ? hasError : false}
          validateStatus={submittedError || touchedError ? "error" : "success"}
        >
          <AntComponent
            {...field}
            {...props}
            onBlur={onBlur}
            onChange={type ? onInputChange : onChange}
          >
            {selectOptions?.map(child => {
              return (
                <Option key={child.name} value={child.value}>
                  {child.name}
                </Option>
              )
            })}
          </AntComponent>
        </FormItem>
      </div>
    )
  }

export const AntSelect = CreateAntField(Select)
export const AntDatePicker = CreateAntField(DatePicker)
export const AntInput = CreateAntField(Input)
export const AntTimePicker = CreateAntField(TimePicker)
