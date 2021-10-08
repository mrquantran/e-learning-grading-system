import React from "react"
import { CarouselBoxStyled2 } from "./Carousel2.styled"
import custom1 from "@/assets/images/custom-1.svg"

export default function Carousel2() {
  return (
    <CarouselBoxStyled2>
      <div className="box theme2">
        <div className="box-body d-flex px-0">
          <div
            className="flex-grow-1 p-30 flex-grow-1 bg-img dask-bg bg-none-md"
            style={{
              backgroundPosition: "right bottom",
              backgroundSize: "auto 100%",
              backgroundImage: `url(${custom1})`
            }}
          >
            <div className="row">
              <div className="col-12 col-xl-7">
                <h2 style={{ color: "#0052cc" }}>
                  Welcome back, <strong>John!</strong>
                </h2>
                <p className="text-dark my-10 font-size-16">
                  Your students complated{" "}
                  <strong className="text-warning">80%</strong> of the tasks.
                </p>
                <p className="text-dark my-10 font-size-16">
                  Progress is{" "}
                  <strong className="text-warning">very good!</strong>
                </p>
              </div>
              <div className="col-12 col-xl-5" />
            </div>
          </div>
        </div>
      </div>
    </CarouselBoxStyled2>
  )
}
