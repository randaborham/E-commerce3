import React from "react";
import { Helmet } from "react-helmet";

export default function Brands() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div
        className="header position-relative d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="text  ">
          <h4
            className="text-white fw-bolder mt-lg-5"
            style={{ fontSize: "60px" }}
          >
            Contact
          </h4>
        </div>
      </div>

      <section style={{ marginTop: "-120px", position: "relative" }}>
        <iframe
          title="map"
          width="100%"
          // style="filter: grayscale(0) contrast(1.1) opacity(0.3);
          style={{
            height: "100vh",
            filter: "grayscale(0)  contrast(0.5) opacity(5.4)",
          }}
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <div
          className="form "
          style={{
            position: "absolute",
            width: "25%",
            backgroundColor: "black",
            top: "10%",
            right: "10px",
            borderRadius: "20px",
            color: "white",
            padding: "30px",
          }}
        >
          <div className="container">
            <h2 class="text-white text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p class="leading-relaxed mb-5">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autocomplete="on"
                class="w-full bg-gray-800 form-control rounded border border-gray-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-gray-800 rounded form-control border border-gray-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                class="text-white bg-teal-700 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg fw-bold text-center w-100"
                style={{ backgroundColor: "rgb(0 137 123)" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
