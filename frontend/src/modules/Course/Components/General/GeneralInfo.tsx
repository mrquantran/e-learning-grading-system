import React from "react"

export default function GeneralInfo() {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12">
      <h4 className="box-title mt-40">General Info</h4>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <td width={390}>Brand</td>
              <td> Brand Name </td>
            </tr>
            <tr>
              <td>Delivery Condition</td>
              <td> Lorem Ipsum </td>
            </tr>
            <tr>
              <td>Type</td>
              <td> Party Wear </td>
            </tr>
            <tr>
              <td>Style</td>
              <td> Modern </td>
            </tr>
            <tr>
              <td>Product Number</td>
              <td> FG1548952 </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
