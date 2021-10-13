import React from "react"

export default function GeneralInfo() {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12">
      <h4 className="box-title mt-40">General Info</h4>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <td width={390}>Created by</td>
              <td> Brand Name </td>
            </tr>
            <tr>
              <td>Last updated</td>
              <td> 10/2021 </td>
            </tr>
            <tr>
              <td>Number of students</td>
              <td> 0 students </td>
            </tr>
            <tr>
              <td>Categories</td>
              <td> Development </td>
            </tr>
            <tr>
              <td>Language</td>
              <td> English </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
