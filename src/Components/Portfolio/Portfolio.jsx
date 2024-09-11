import React, { useEffect } from "react";
import Item from "../Item/Item";

import img1 from "../../assets/images/poert1.png";
import img2 from "../../assets/images/port2.png";
import img3 from "../../assets/images/port3.png";
import LineBlue from "../LineBlue/LineBlue";

export default function Portfolio() {
    const images = [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img1 },
        { img: img2 },
        { img: img3 },
    ];

    useEffect(function () {
        // componentDidMount
        const figcaption = document.querySelectorAll("figcaption");
        const imgs = Array.from(document.querySelectorAll("figure img"));
        const modal = document.querySelector(".modal");
        const modalImg = document.querySelector(".modal img");

        let curentIndex = 0;
        function displayModel() {
            for (let i = 0; i < figcaption.length; i++) {
                figcaption[i].addEventListener("click", function () {
                const clickedImage = imgs[i];
                const imageUrl = clickedImage.getAttribute("src");

                curentIndex = imgs.indexOf(clickedImage);

                modal.classList.remove("d-none");
                modalImg.setAttribute("src", imageUrl);

                    modal.addEventListener("click", function (e) {
                        if (e.target === modal) {
                            modal.classList.add("d-none");
                        }
                    });
                });
            }
        }

        for (let i = 0; i < figcaption.length; i++) {
        figcaption[i].addEventListener("click", displayModel);
        }

        // componentWillUnmount
        return function () {
            for (let i = 0; i < figcaption.length; i++) {
                figcaption[i].removeEventListener("click", displayModel);
            }
        };
    }, []);

    return (
        <>
        <section className="portfolio">
            <div className="container py-5 mt-5 ">
            <div className="row pt-5">
                <h2 className="text-center fs-1 fw-bolder text-uppercase main-color">
                portfolio component
                </h2>
                <LineBlue />
                {images.map(function (image, index) {
                return <Item key={index} images={image} />;
                })}
            </div>
            </div>
        </section>
        </>
    );
}
