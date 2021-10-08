/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { TotalItemStyled } from "./TotalItem.styled"

export default function TotalItem({ title, total }) {
  return (
    <div className="col-12">
      <TotalItemStyled>
        <a
          className="box box-link-shadow text-center pull-up"
          // href="javascript:void(0)"
        >
          <div className="box-body theme3 py-25 px-5">
            <p className="font-weight-600 text-info">{title}</p>
          </div>
          <div className="box-body">
            <h1 className="countnm font-size-50 m-0">{total}</h1>
          </div>
        </a>
      </TotalItemStyled>
    </div>
  )
}
