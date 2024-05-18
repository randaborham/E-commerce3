import React, { useState } from "react";
import Useproduct, { getApi } from "../Useproduct";
import Loading from "../Home/Loading";
import { Link } from "react-router-dom";
import { Addtocard, Addtowish, UseCard1 } from "../Usecart";
import { Helmet } from "react-helmet";
export default function Product() {
  let { data, isFetching, isLoading, error, isError } = Useproduct(
    "product",
    getApi
  );
  let [searched, setsearched] = useState([]);
  function search(e) {
    let term = e.target.value;
    // console.log(term);
    let newarray = data?.data?.data.filter((ele) =>
      ele.title.toLowerCase().trim().includes(term.toLowerCase().trim())
    );
    setsearched(newarray);
  }
  if (isLoading) return <Loading></Loading>;
  if (isError) return <h2>{error.message}</h2>;
  return (
    <>
      <div className="header position-absolute d-flex align-items-center justify-content-center">
        <div className="text  ">
          <h4
            className="text-white fw-bolder mt-lg-5"
            style={{ fontSize: "60px" }}
          >
            Shop
          </h4>
          <p className="text-white fw-bolder fs-6 text-center">Home * Shop</p>
        </div>
      </div>
      <div className="container ">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Shop</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <input
          className="form-control  rounded-5 w-50  bg-white p-2 shadow-sm  inp "
          style={{ color: "rgb(0 137 123)", margin: "430px auto 0 auto" }}
          type="text"
          onChange={search}
          placeholder="Search for product...."
        ></input>
        <div className="inp2 ">
          <div className="row ">
            {searched.length
              ? searched?.map((prod) => (
                  <Producte prod={prod} key={prod._id}></Producte>
                ))
              : data?.data?.data.map((prod) => (
                  <Producte prod={prod} key={prod._id}></Producte>
                ))}
          </div>
        </div>
        <div className="container px-5 m-auto w-75 my-5">
          <div className="my-10">
            <h1
              className="text-center text-5xl md:text-6xl   w-[80%] md:w-[50%] mb-3 mx-auto text-gray tit"
              style={{ fontSize: "50px", width: "80%", fontWeight: "1000" }}
            >
              Sign Up For Our Newsletter
            </h1>
            <p
              className="text-center text-5xl md:text-6xl   w-[80%] md:w-[50%] mb-3 mx-auto text-gray tit2 "
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
              className="form-control w-100 rounded-4 tit4 mb-2"
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
    </>
  );
}
function Producte({ prod }) {
  let [heart, setheart] = useState(false);
  let { mutate } = UseCard1(Addtocard);
  let { mutate: mutate1, data } = UseCard1(Addtowish);

  return (
    <div className="col-md-3">
      <div className="product cursor-pointer p-2">
        <Link
          to={`/ProductDetails/${prod._id}`}
          style={{ textDecoration: "none", textDecorationStyle: "none" }}
          className="text-black"
        >
          {" "}
          <img src={prod.imageCover} className="w-100 mb-2" alt="" />
          <div className="text-center">
            <h6 className="fw-bolder">{prod.title.split("").splice(0, 20)}</h6>
            <p style={{ color: "gray" }}>{prod.category.name}</p>

            <div className="box ">
              <span className="fw-bolder"> ${prod.price} </span>
            </div>
          </div>
        </Link>
        <button
          className="btn w-100 btn-brd"
          onClick={() => {
            mutate(prod._id);
          }}
        >
          <i class="fa-solid fa-basket-shopping" style={{ color: "white" }}></i>
        </button>
      </div>
    </div>
  );
}
