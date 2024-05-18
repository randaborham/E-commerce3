import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import img1 from "../../assets/1.png";
import img3 from "../../assets/3.png";
import img2 from "../../assets/2.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/53eee645-reatailhut-client-logo-5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import g1 from "../../assets//g1.png";
import g2 from "../../assets//g2.png";
import g3 from "../../assets//g3.png";
import g4 from "../../assets//g4.png";
import g5 from "../../assets//g5.png";
import g6 from "../../assets//g7.png";
import t1 from "../../assets//t1.png";
import t2 from "../../assets//t2.png";
import t3 from "../../assets//t3.png";
import t4 from "../../assets//t4.png";
import t5 from "../../assets//t5.png";
import t6 from "../../assets//t6.png";
import t7 from "../../assets//t7.png";
import t8 from "../../assets//t8.png";

import k1 from "../../assets//k1.png";

import k2 from "../../assets//k2.png";
import k3 from "../../assets//k3.png";
export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="">
        <div className="">
          <div className="row1 d-flex">
            <div className="col-md-6">
              <div className="header3 position-relative d-flex align-items-center justify-content-center">
                <div className="text">
                  <h4
                    className="text-white fw-bolder mt-lg-5 text-center tit6"
                    style={{ fontSize: "50px" }}
                  >
                    Best Quality Products For All Your Needs
                  </h4>
                  <p className="text-white fw-bolder fs-6 text-center w-75 m-auto">
                    RetailHut is the perfect store to find everything you need
                    for your home - your ultimate place of comfort and peace. We
                    offer you the best home furnishing with well-designed and
                    perfectly functional products to create a better everyday
                    life for everyone.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header2 position-relative d-flex align-items-center justify-content-center"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <img src={img1} alt="img"></img>
        <img src={img2} alt="img"></img>
        <img src={img3} alt="img"></img>
        <img src={img4} alt="img" className="me-3"></img>
        <img src={img5} alt="img"></img>
        <img src={img6} alt="img"></img>
        <img src={img7} alt="img"></img>
      </div>

      <div className="container px-5 m-auto w-75 my-5">
        <div className="my-10">
          <h1
            className="text-center text-5xl md:text-6xl   w-[80%] md:w-[50%] mb-3 mx-auto text-gray tit "
            style={{ fontSize: "80px", width: "80%", fontWeight: "1000" }}
          >
            Products Gallery
          </h1>
          <p
            className="text-center text-5xl md:text-6xl   w-[80%] md:w-[50%] mb-3 mx-auto text-gray tit2"
            style={{ width: "60%", fontWeight: "1000", color: "gray" }}
          >
            You find stunning products for each inch of your beautiful home
            matching your taste of style exactly.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={g1} alt="pazza" className="w-100" />
          </div>

          <div className="col-md-6 img2 d-flex" style={{ marginLeft: "-24px" }}>
            <div className="col-md-6">
              <img src={g2} alt="pazza" className="w-100" />
            </div>
            <div className="col-md-6">
              <img src={g3} alt="pazza" className="w-100" />
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div className="col-md-6">
              <img src={g4} alt="pazza" className="w-100" />
            </div>
            <div className="col-md-6">
              <img src={g5} alt="pazza" className="w-100" />
            </div>
          </div>
          <div
            className="col-md-6 img1"
            style={{ marginTop: "-199px", marginLeft: "-24px" }}
          >
            <img src={g6} alt="pazza" className="w-100" />
          </div>
        </div>
      </div>

      <div className="container px-5 m-auto w-75 my-5">
        <div className="my-10">
          <h1
            className="text-center text-5xl md:text-6xl   w-[80%] md:w-[50%] mb-3 mx-auto text-gray tit"
            style={{ fontSize: "50px", width: "80%", fontWeight: "1000" }}
          >
            Hot New Collections
          </h1>
          <p
            className="text-center text-5xl md:text-6xl   w-[80%] md:w-[50%] mb-3 mx-auto text-gray tit2"
            style={{ width: "60%", fontWeight: "1000", color: "gray" }}
          >
            Take a look at the latest home furnishing products that we have
            added to our collection recently.
          </p>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row g-3">
          <div className="col-md-3">
            <div className="card d-flex">
              <div className="d-flex">
                <img
                  src={t1}
                  className="me-2"
                  style={{ width: "50px" }}
                  alt="img"
                ></img>
                <div className="content">
                  <p className="fw-bolder">Slim Fit Stand</p>
                  <p className="fw-bold">2024-05-12</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card d-flex">
              <div className="d-flex">
                <img
                  src={t2}
                  className="me-2"
                  style={{ width: "50px" }}
                  alt="img"
                ></img>
                <div className="content">
                  <p className="fw-bolder">Archer VR300 </p>
                  <p className="fw-bold">2024-05-16</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card ">
              <div className="d-flex">
                <img
                  src={t3}
                  className="me-2"
                  style={{ width: "50px" }}
                  alt="img"
                ></img>
                <div className="content">
                  <p className="fw-bolder">PIXMA G3420 </p>
                  <p className="fw-bold">2024-05-17</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card d-flex">
              <div className="d-flex">
                <img
                  src={t4}
                  className="me-2"
                  style={{ width: "50px" }}
                  alt="img"
                ></img>
                <div className="content">
                  <p className="fw-bolder">EOS M50 Mark</p>
                  <p className="fw-bold">2024-05-17</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card d-flex">
              <div className="d-flex">
                <img
                  src={t5}
                  className="me-2"
                  style={{ width: "50px" }}
                  alt="img"
                ></img>
                <div className="content">
                  <p className="fw-bolder">PS5 DualSense</p>
                  <p className="fw-bold">2024-05-12</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card d-flex">
              <div className="d-flex">
                <img
                  src={t6}
                  className="me-2"
                  style={{ width: "50px" }}
                  alt="img"
                ></img>
                <div className="content">
                  <p className="fw-bolder">Galaxy Buds 2</p>
                  <p className="fw-bold">2024-05-19</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card d-flex">
              <div className="d-flex">
                <img
                  src={t7}
                  className="me-2"
                  style={{ width: "50px" }}
                  alt="img"
                ></img>
                <div className="content">
                  <p className="fw-bolder">WH-CH510 Wireless</p>
                  <p className="fw-bold">2024-05-20</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card d-flex">
              <div className="d-flex">
                <img
                  src={t8}
                  className="me-2"
                  style={{ width: "50px" }}
                  alt="img"
                ></img>
                <div className="content">
                  <p className="fw-bolder">016Ne Laptop</p>
                  <p className="fw-bold">2024-05-22</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-5 mt-5">
        <div className="row">
          <div className="col-md-3 ">
            <div className="d-flex align-items-center ">
              <i
                class="fa-brands fa-shopify fa-1x me-2"
                style={{ color: "rgb(0 137 123)" }}
              ></i>
              <h5 className="fw-bolder">Shop online</h5>
            </div>
            <p className="w-100 " style={{ color: "gray" }}>
              Buy any & all of our products online from the comfort of your
              home.
            </p>
          </div>
          <div className="col-md-3">
            <div className="d-flex">
              <i
                class="fa-solid fa-file-invoice-dollar fa-1x me-2"
                style={{ color: "rgb(0 137 123)" }}
              ></i>
              <h5 className="fw-bolder">Free shipping</h5>
            </div>
            <p className="w-100 " style={{ color: "gray" }}>
              Check out which products and locations we offer free shipping to.
            </p>
          </div>
          <div className="col-md-3">
            <div className="d-flex">
              <i
                class="fa-regular fa-credit-card fa-1x me-1"
                style={{ color: "rgb(0 137 123)" }}
              ></i>
              <h5 className="fw-bolder">Payment Methods</h5>
            </div>
            <p className="w-100 " style={{ color: "gray" }}>
              Get access to whichever payment method you’re most comfortable
              with.
            </p>
          </div>
          <div className="col-md-3">
            <div className="d-flex aline-items-center">
              <i
                class="fa-solid fa-building-shield fa-1x me-1"
                style={{ color: "rgb(0 137 123)" }}
              ></i>
              <h5 className="fw-bolder">Return Policy</h5>
            </div>
            <p className="w-100 " style={{ color: "gray" }}>
              We have an easy return policy for the products that you purchase.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-5 m-auto w-75 mt-4">
        <div className="my-10">
          <h1
            className="text-center text-5xl md:text-6xl   w-[80%] md:w-[50%] mb-3 mx-auto text-gray tit"
            style={{ fontSize: "60px", width: "80%", fontWeight: "1000" }}
          >
            Latest News & Updates
          </h1>
          <p
            className="text-center text-5xl md:text-6xl   w-[80%] md:w-[50%] mb-3 mx-auto text-gray tit2"
            style={{ width: "60%", fontWeight: "1000", color: "gray" }}
          >
            Learn about all the latest updates & news about us, interior
            decorations, home & office furnishings, and so much more..
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={k1} alt="img" className="w-75 h-50 ms-5"></img>
            <p className="text-center fw-bolder">Duramo 10 Running</p>
            <p className="text-center" style={{ color: "gray" }}>
              Men's Fashion
            </p>
            <p className="text-center">
              <span>3.0</span>
              <i style={{ color: "orange" }} class="fa-solid fa-star"></i>
            </p>
          </div>
          <div className="col-md-4">
            <img src={k2} alt="img" className="w-75 h-50 ms-5"></img>
            <p className="text-center fw-bolder">Hoops 3.0 Lowg</p>
            <p className="text-center" style={{ color: "gray" }}>
              Men's Fashion
            </p>
            <p className="text-center">
              <span>4.0</span>
              <i style={{ color: "orange" }} class="fa-solid fa-star"></i>
            </p>
          </div>
          <div className="col-md-4">
            <img src={k3} alt="img" className="w-75 h-50 ms-5"></img>
            <p className="text-center fw-bolder">Galaxy 6 Running</p>
            <p className="text-center" style={{ color: "gray" }}>
              Men's Fashion
            </p>
            <p className="text-center">
              <span>5</span>
              <i style={{ color: "orange" }} class="fa-solid fa-star"></i>
            </p>
          </div>
        </div>
      </div>
      <div className="container px-5 m-auto w-77  my-5">
        <div className="my-10">
          <h1
            className="text-center text-5xl md:text-6xl   w-[80%] md:w-[50%] mb-3 mx-auto text-gray tit"
            style={{ fontSize: "60px", width: "70%", fontWeight: "1000" }}
          >
            Sign Up For Our Newsletter
          </h1>
          <p
            className="text-center text-5xl md:text-6xl   w-[80%] md:w-[50%] mb-3 mx-auto text-gray tit2"
            style={{ width: "70%", fontWeight: "1000", color: "gray" }}
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
            className="form-control w-100 mb-2 rounded-4 tit4"
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
