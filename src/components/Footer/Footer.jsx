import { Link } from "react-router-dom";
import logo from "../../assets/logo--.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div div style={{ backgroundColor: "#dfe8ef" }}>
      <div className="container pt-5">
        <div className="row g-5">
          <div className="col-md-4">
            <div className="content">
              <a
                href="###"
                className="flex items-center md:justify-start justify-center text-white"
              >
                <img src={logo} alt="" />
              </a>
              <p
                className="mt-4 text-base text-gray "
                style={{ color: "rgb(100 100 100 / 1))" }}
              >
                Our goal is to create insightful and content that you can put to
                work in personal and professional life.
              </p>
              <div className="my-4 py-4 flex justify-center md:justify-start items-center gap-3">
                <FaFacebookF
                  className="  text-center ms-3"
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "rgb(0 137 123",
                  }}
                />

                <FaInstagram
                  className="  text-center ms-3
                  "
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "rgb(0 137 123",
                  }}
                />

                <FaTwitter
                  className="ms-3"
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "rgb(0 137 123",
                  }}
                />

                <FaLinkedinIn
                  className="ms-3"
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "rgb(0 137 123",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="content ms-lg-5">
              <h2 className="fw-bolder">Quick Link</h2>
              <nav className="list-none mb-10 flex flex-col gap-1">
                <li className="mb-2">
                  <Link className="text-gray-600 font-semibold hover:text-teal-700 transition-all duration-300 list-none">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-gray-600 font-semibold hover:text-teal-700 transition-all duration-300">
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-gray-600 font-semibold hover:text-teal-700 transition-all duration-300">
                    Shop
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-gray-600 font-semibold hover:text-teal-700 transition-all duration-300">
                    Contact
                  </Link>
                </li>
              </nav>
            </div>
          </div>
          <div className="col-md-4">
            <div className="content">
              <h2 className="title-font text-2xl font-bold text-gray-800 tracking-widest  mb-3 fw-bolder">
                Information
              </h2>
              <Link>
                <p className="text-gray-600 font-semibold hover:text-teal-700 transition-all duration-300">
                  <span className="text-teal-700 font-bold">Address:</span>{" "}
                  Middletown, Egypt
                </p>
              </Link>
              <Link>
                <p className="text-gray-600 font-semibold hover:text-teal-700 transition-all duration-300">
                  <span className="text-teal-700 font-bold">phone:</span>{" "}
                  01147998560
                </p>
              </Link>
              <Link>
                <p className="text-gray-600 font-semibold hover:text-teal-700 transition-all duration-300">
                  <span className="text-teal-700 font-bold">Hours:</span>{" "}
                  9:00am-8:00 M-F
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
