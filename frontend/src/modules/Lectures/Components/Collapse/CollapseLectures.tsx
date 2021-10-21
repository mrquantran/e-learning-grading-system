import React, { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { FETCH_LECTURE_DETAIL } from "../../actions/lectureAction"
import { useRouter } from "@/hooks/useRouter"
import { RootState } from "@/redux/reducer/rootReducer"
import { TYPE_LECTURES } from "@/utils/ENUM"
import { Card, Progress, Collapse, Checkbox, Popover, Button } from "antd"

import { DownOutlined, FolderOpenOutlined } from "@ant-design/icons"
import { CollapsedStyled } from "./Collapse.Styled"

const { Panel } = Collapse

function callback(key) {
  // eslint-disable-next-line no-console
  console.log(key)
}

const content = (
  <div>
    <span>item.pttx</span>
  </div>
)

export default function CollapseLectures() {
  const dispatch = useDispatch()

  const router = useRouter()

  const { id } = router.query

  const { data } = useSelector((state: RootState) => state.lecture)

  const renderSection = (section, objectIndex) => {
    // eslint-disable-next-line array-callback-return
    return section.map((item, index) => {
      if (item.objectIndex === objectIndex) {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              margin: "15px 0"
            }}
          >
            <div style={{ padding: "0 10px 0 0" }}>
              <Checkbox />
            </div>
            <div style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "0 0 5px 0",
                  width: "100%"
                }}
              >
                <span>
                  {index}. {item.title}
                </span>
                <Progress
                  percent={Math.floor(Math.random() * (100 - 0))}
                  steps={3}
                  showInfo={false}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                <Popover
                  content={content}
                  placement="bottomRight"
                  trigger="click"
                >
                  <Button style={{ display: "flex", alignItems: "center" }}>
                    <FolderOpenOutlined />
                    Resource <DownOutlined />
                  </Button>
                </Popover>
              </div>
            </div>
          </div>
        )
      }
    })
  }

  const renderPanel = () => {
    // eslint-disable-next-line array-callback-return
    const chapter = data.filter(item => {
      if (item._class === TYPE_LECTURES.CHAPTER) {
        return true
      }
    })

    // eslint-disable-next-line array-callback-return
    const section = data.filter(item => {
      if (item._class === TYPE_LECTURES.SECTION) {
        return true
      }
    })

    return chapter.map((item, index) => {
      return (
        <Panel header={`Section ${index + 1}: ${item.title}`} key={index + 1}>
          {renderSection(section, index + 1)}
        </Panel>
      )
    })
  }

  useEffect(() => {
    dispatch({ type: FETCH_LECTURE_DETAIL, payload: id })
  }, [dispatch, id])

  return (
    <CollapsedStyled>
      <Card title="Content" style={{ width: "100%", height: "100%" }}>
        <Collapse defaultActiveKey={[1]} onChange={callback}>
          {renderPanel()}
        </Collapse>
      </Card>
    </CollapsedStyled>
  )
}
