import React from "react"
import { CarouselBoxStyled } from "./Carousel.styled"
import custom14 from "@/assets/images/custom-14.svg"

export default function Carousel() {
  return (
    <CarouselBoxStyled>
      <div className="box bg-gradient-primary overflow-hidden pull-up">
        <div className="box-body pr-0 pl-lg-50 pl-15 py-0">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8">
              <h1 className="font-size-40 text-white">Welcome Jhone!</h1>
              <p className="text-white mb-0 font-size-20">
                Education is the passport to the future, So learn more &amp;
                more
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <img src={custom14} alt="true" />
            </div>
          </div>
        </div>
      </div>
    </CarouselBoxStyled>
  )
}
