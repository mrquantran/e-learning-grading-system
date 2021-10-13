import React from "react"
import course from "@/assets/images/course/c1.png"

export default function CourseImage() {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="box box-body b-1 text-center no-shadow">
        <img src={course} id="product-image" className="img-fluid" />
      </div>
      <div className="clear" />
    </div>
  )
}
