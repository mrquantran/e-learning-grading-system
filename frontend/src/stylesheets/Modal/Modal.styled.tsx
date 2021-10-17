import { Modal } from "antd"
import { ExclamationCircleOutlined } from "@ant-design/icons"
import React from "react"

const { confirm } = Modal

interface Button {
  text?: string
  function?: any
}

interface buttonModal {
  okButton?: Button
  cancelButton?: Button
}

export function showConfirm(
  title: string,
  description: string,
  button: buttonModal
): void {
  const { okButton, cancelButton } = button

  confirm({
    title: title,
    icon: <ExclamationCircleOutlined />,
    content: description,
    centered: true,
    okText: okButton?.text || "Confirm",
    cancelText: cancelButton?.text || "Cancel",
    onOk: okButton?.function
  })
}
