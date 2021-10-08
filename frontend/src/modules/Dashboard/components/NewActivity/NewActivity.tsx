import React from "react"

export default function NewActivity() {
  return (
    <div className="col-12">
      <div className="box">
        <div className="box-header">
          <h4 className="box-title">New Activity</h4>
        </div>
        <div className="box-body">
          <div
            className="slimScrollDiv"
            style={{
              position: "relative",
              overflow: "hidden",
              width: "auto",
              height: 410
            }}
          >
            <div
              className="act-div"
              style={{ overflow: "hidden", width: "auto", height: 410 }}
            >
              <div className="bg-gray-100 p-15 rounded10 mb-20">
                <div>
                  <span className="badge badge-sm badge-dot badge-warning mr-5" />
                  Fuzzy Logic
                </div>
                <h4 className="my-20">Dont forget to submit the task!</h4>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      src="../images/avatar/1.jpg"
                      className="avatar avatar-sm mr-10 avatar-pill"
                    />
                    <p className="text-fade font-size-12 mb-0">Johen doe</p>
                  </div>
                  <p className="text-fade font-size-12 mb-0">08 Nov 2020</p>
                </div>
              </div>
              <div className="bg-gray-100 p-15 rounded10 mb-20">
                <div>
                  <span className="badge badge-sm badge-dot badge-primary mr-5" />
                  Biometric
                </div>
                <h4 className="my-20">
                  Explain what do you know about
                  <br /> Biometric! (&gt;100 words)
                </h4>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      src="../images/avatar/2.jpg"
                      className="avatar avatar-sm mr-10 avatar-pill"
                    />
                    <p className="text-fade font-size-12 mb-0">Mical doe</p>
                  </div>
                  <p className="text-fade font-size-12 mb-0">08 Nov 2020</p>
                </div>
              </div>
              <div className="bg-gray-100 p-15 rounded10 mb-20">
                <div>
                  <span className="badge badge-sm badge-dot badge-warning mr-5" />
                  Fuzzy Logic
                </div>
                <h4 className="my-20">Dont forget to submit the task!</h4>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      src="../images/avatar/1.jpg"
                      className="avatar avatar-sm mr-10 avatar-pill"
                    />
                    <p className="text-fade font-size-12 mb-0">Johen doe</p>
                  </div>
                  <p className="text-fade font-size-12 mb-0">08 Nov 2020</p>
                </div>
              </div>
              <div className="bg-gray-100 p-15 rounded10">
                <div>
                  <span className="badge badge-sm badge-dot badge-primary mr-5" />
                  Biometric
                </div>
                <h4 className="my-20">
                  Explain what do you know about Biometric! (&gt;100 words)
                </h4>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      src="../images/avatar/2.jpg"
                      className="avatar avatar-sm mr-10 avatar-pill"
                    />
                    <p className="text-fade font-size-12 mb-0">Mical doe</p>
                  </div>
                  <p className="text-fade font-size-12 mb-0">08 Nov 2020</p>
                </div>
              </div>
            </div>
            <div
              className="slimScrollBar"
              style={{
                background: "rgb(0, 0, 0)",
                width: 7,
                position: "absolute",
                top: 0,
                opacity: "0.4",
                display: "none",
                borderRadius: 7,
                zIndex: 99,
                right: 1,
                height: "250.896px"
              }}
            />
            <div
              className="slimScrollRail"
              style={{
                width: 7,
                height: "100%",
                position: "absolute",
                top: 0,
                display: "none",
                borderRadius: 7,
                background: "rgb(51, 51, 51)",
                opacity: "0.2",
                zIndex: 90,
                right: 1
              }}
            />
          </div>
        </div>
        <div className="box-footer text-center p-0">
          <a href="#" className="btn btn-block btn-primary-light">
            View all
          </a>
        </div>
      </div>
    </div>
  )
}
