import React from "react";
import { Helmet } from "react-helmet";
import img from "../../assets/about.png";
export default function Categories() {
  return (
    <div>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="header position-absolute d-flex align-items-center justify-content-center">
        <div className="text  ">
          <h4
            className="text-white fw-bolder mt-lg-5"
            style={{ fontSize: "60px" }}
          >
            About Us
          </h4>
        </div>
      </div>
      <div className="container inp3" style={{ marginTop: "500px" }}>
        <div className="row">
          <div className="col-md-6">
            <div style={{ borderRadius: "20px" }}>
              <img
                src={img}
                alt="img"
                className="w-100 b"
                style={{ borderRadius: "20px" }}
              ></img>
            </div>
          </div>
          <div className="col-md-6 p-4">
            <div className="box1 mb-4">
              <div className="d-flex align-items-center mb-4 ">
                <i
                  class="fa-brands fa-shopify fa-2x me-2"
                  style={{ color: "rgb(0 137 123)" }}
                ></i>
                <h5 className="fw-bolder">
                  Perfect Quality & Design For Everyone!
                </h5>
              </div>
              <p>
                Our vision, here at RetailHurt, is to create better and
                higher-quality furniture & home decors to make your everyday
                home life more comfortable and elegant regardless of where you
                are living. On this site, you can discover exactly what you need
                for every corner of your loving home.
              </p>
            </div>
            <div className="box2 mb-4">
              <div className="d-flex mb-4">
                <i
                  class="fa-solid fa-file-invoice-dollar fa-2x me-2"
                  style={{ color: "rgb(0 137 123)" }}
                ></i>
                <h5 className="fw-bolder">Decorate Your Dream Home With Us!</h5>
              </div>
              <p>
                Your home or workspace should reflect who you are. Here, at
                RetailHut, we understand that every individual from our
                worldwide customer base has a different taste. And so, we try
                our best to provide designs, styles, and colors, to suit
                everyone likings and aesthetics.
              </p>
            </div>
            <div className="box3 mb-4">
              <div className="d-flex aline-items-center mb-4">
                <i
                  class="fa-solid fa-building-shield fa-2x me-1"
                  style={{ color: "rgb(0 137 123)" }}
                ></i>
                <h5 className="fw-bolder">
                  Perfect Quality & Design For Everyone!
                </h5>
              </div>
              <p>
                Your home or workspace should reflect who you are. Here, at
                RetailHut, we understand that every individual from our
                worldwide customer base has a different taste. And so, we try
                our best to provide designs, styles, and colors, to suit
                everyone likings and aesthetics.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 m-auto w-75 my-5">
        <div className="my-10">
          <h1
            className="text-center text-5xl md:text-6xl   w-[80%] md:w-[50%] mb-3 mx-auto text-gray tit"
            style={{ fontSize: "60px", width: "80%", fontWeight: "1000" }}
          >
            Sign Up For Our Newsletter
          </h1>
          <p
            className="text-center text-5xl md:text-6xl   w-[80%] md:w-[50%] mb-3 mx-auto text-gray tit2"
            style={{ width: "80%", fontWeight: "1000", color: "gray" }}
          >
            Subscribe & be the first to know of all the exclusive offers, free
            giveaways, and one-in-a-lifetime deals!
          </p>
        </div>
        <div className="d-flex tit3">
          <input
            type="email"
            placeholder="Your Email Address"
            id=""
            className="form-control w-100 rounded-4 mb-2 tit4"
          />
          <button
            type="search"
            className="text-white rounded-4 bg-black fw-bolder p-3 border-0 ms-2"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
