import React, { useState } from "react"
import { Upload, message } from "antd"
import { InputAntd } from "@/stylesheets/Input/Inputantd.styled"
import ImgCrop from "antd-img-crop"

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener("load", () => callback(reader.result))
  reader.readAsDataURL(img)
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png"
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!")
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!")
  }
  return isJpgOrPng && isLt2M
}

export default function UploadInput() {
  const [imageURL, setImageURL] = useState(null)

  const [fileList, setFileList] = useState<any>([])

  const onChange = info => {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, imageUrl => setImageURL(imageUrl))
    setFileList(info.fileList)
  }

  const onPreview = async file => {
    let src = file.url
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow: any = window.open(src)
    imgWindow.document.write(image.outerHTML)
  }

  const disable = fileList.length > 0 ? true : false

  return (
    <ImgCrop rotate>
      <Upload
        listType="picture-card"
        //   action={imageURL}
        fileList={fileList}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={onChange}
        onPreview={onPreview}
        maxCount={1}
      >
        <InputAntd />
      </Upload>
    </ImgCrop>
  )
}
