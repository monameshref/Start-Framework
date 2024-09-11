import React from "react";
import Line from "../Line/Line";

export default function About() {
  return (
    <>
      <section className="second-color text-white py-5">
        <div className="container pt-5">
          <div className="row pt-5 mt-5">
            <div className="main-title">
              <h2 className="text-center fs-1 fw-bolder">ABOUT COMPONENT</h2>
              <Line />
            </div>

            <div className="col-md-6">
              <p className="p-4">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>

            <div className="col-md-6">
              <p className="p-4">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
