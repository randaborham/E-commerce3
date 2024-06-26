import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo--.png";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { UseCard1, Usecard, deletcard, getcard, updatacard } from "../Usecart";
export default function Nav() {
  let { data, isError, isFetching, isLoading, error } = Usecard(
    "getcard",
    getcard
  );
  let navigat = useNavigate();
  let { Usertoken, setUsertoken, setisopen, login } = useContext(UserContext);
  function logout() {
    localStorage.removeItem("userToken");
    setUsertoken(null);
    navigat("/");
  }
  return (
    <div className="w-75 m-auto mt-4">
      <nav
        className="navbar navbar-expand-lg  p-2 rounded-5 shadow "
        style={{ backgroundColor: "#dfe8ef" }}
      >
        <div className="container">
          <Link className="navbar-brand" to="">
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bolder">
              {Usertoken !== null ? (
                <>
                  {" "}
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="Home"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="Product"
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="Categories"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="Brands"
                    >
                      Contact
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li
                className="nav-item position-relative"
                data-bs-toggle={Usertoken == null ? "modal" : ""}
                data-bs-target="#exampleModal"
                onClick={() => {
                  setisopen(true);
                }}
              >
                <Link className="nav-link" to="/Carts">
                  <i
                    className="fa-solid fa-cart-shopping mx-2  fa-1x"
                    style={{ marginTop: "15px" }}
                  ></i>
                </Link>
                <span
                  className="cart position-absolute text-white  d-flex justify-content-center align-items-center"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    right: "0",
                    top: "-5px",
                    backgroundColor: "rgb(0 137 123",
                  }}
                >
                  {data?.data.numOfCartItems}
                </span>
              </li>
              {Usertoken !== null ? (
                <>
                  <li className="nav-item fw-bold">
                    <span
                      className="nav-link cursor-pointer mt-2 "
                      aria-current="page"
                      onClick={() => logout()}
                    >
                      Logout
                    </span>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li className="nav-item mt-2 fw-bold">
                    <Link className="nav-link" aria-current="page" to="/">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item mt-2 fw-bold">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="Signup"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="modal fade"
        id="exampleModal"
        // tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <h5 className="fw-blod" style={{ fontWeight: "bold" }}>
                Please, Sign in to your account
              </h5>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn bg-main text-white">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
