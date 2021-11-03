import React from "react"
import { Modal } from "antd"
import { ExclamationCircleOutlined } from "@ant-design/icons"

interface button {
  text?: string
  function?: any
}

interface buttons {
  confirm: button
  cancel: button
}

export const defaultButton = ({
  text,
  confirm
}: {
  text: string
  confirm: any
}) => {
  return {
    cancel: { text: "Cancel" },
    confirm: { text: text, function: confirm }
  }
}

export default function ModalConfirm({
  title,
  content,
  button
}: {
  title: string
  content: string
  button: buttons
}) {
  return Modal.confirm({
    title: title,
    icon: <ExclamationCircleOutlined />,
    content: content,
    okText: button.confirm.text,
    onOk: button.confirm.function,
    cancelText: button.cancel.text
  })
}
