import React from "react";
import imgHome from "../../assets/images/avataaars.svg";
import Line from "../Line/Line";

export default function Home() {
  return (
    <>
      <header>
        <div className="container pt-5">
          <figure className="pt-5 mt-5">
            <img src={imgHome} alt="human" />
          </figure>

          <div className="main-title d-flex justify-content-center align-items-center flex-column text-white py-4">
            <h2 className="fs-1 fw-bolder">START FRAMEWORK</h2>
            <Line />
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </header>
    </>
  );
}
