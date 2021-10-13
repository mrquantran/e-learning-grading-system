import React from "react"

export default function InfoCourse() {
  return (
    <div className="col-md-8 col-sm-6">
      <h2 className="box-title mt-0">Typescript basic</h2>
      <div className="list-inline">
        <a className="text-warning">
          <i className="mdi mdi-star" />
        </a>
        <a className="text-warning">
          <i className="mdi mdi-star" />
        </a>
        <a className="text-warning">
          <i className="mdi mdi-star" />
        </a>
        <a className="text-warning">
          <i className="mdi mdi-star" />
        </a>
        <a className="text-warning">
          <i className="mdi mdi-star" />
        </a>
      </div>
      <h1 className="pro-price mb-0 mt-20">
        $270
        <span className="old-price">$540</span>
        <span className="text-danger">50% off</span>
      </h1>
      <hr />
      <p>
        Lorem Ipsum available, but the majority have suffered alteration in some
        form, by injected humour, or randomised words which don't look even
        slightly believable. but the majority have suffered alteration in some
        form, by injected humour
      </p>
      <hr />
      <div className="gap-items">
        <button className="btn btn-success">
          <i className="mdi mdi-shopping" /> Buy Now!
        </button>
        <button className="btn btn-primary">
          <i className="mdi mdi-cart-plus" /> Add To Cart
        </button>
        <button className="btn btn-infomr">
          <i className="mdi mdi-compare" /> Compare
        </button>
        <button className="btn btn-danger">
          <i className="mdi mdi-heart" /> Wishlist
        </button>
      </div>
      <h4 className="box-title mt-20">Key Highlights</h4>
      <ul className="list-icons">
        <li>
          <i className="fa fa-check text-danger float-none" /> Party Wear
        </li>
        <li>
          <i className="fa fa-check text-danger float-none" /> Nam libero
          tempore, cum soluta nobis est
        </li>
        <li>
          <i className="fa fa-check text-danger float-none" /> Omnis voluptas as
          placeat facere possimus omnis voluptas.
        </li>
      </ul>
    </div>
  )
}
