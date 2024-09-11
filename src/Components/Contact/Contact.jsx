import React, { useEffect } from 'react'
import LineBlue from '../LineBlue/LineBlue'

export default function Contact() {

    useEffect(function(){
        const inputs = document.querySelectorAll("input");
        const labels = document.querySelectorAll("label");
        const form = document.querySelector("form");

        function changeLabels(e){
            e.preventDefault();
            for (let i = 0; i < inputs.length; i++) {

                inputs[i].addEventListener("keyup",function(e){
                    if (e.target.value == "") {
                        // console.log("faddyyyy");
                        for (let i = 0; i < labels.length; i++) {
                            if (labels[i].htmlFor == inputs[i].name) {
                                labels[i].classList.remove("top-0");
                            }
                        }
                    }
                    else {
                        // console.log("malyaan");
                        if (labels[i].htmlFor == inputs[i].name) {
                            labels[i].classList.add("top-0");
                        }
                    }
                });
            }
        }
        form.addEventListener("click",changeLabels);

        return function(){
            form.removeEventListener("click",changeLabels);
        }
    } , []);


    return <>
        <section className="contact py-5 mt-5">
            <div className="container">
                <div className="row pt-5">
                    <h2 className="text-center fs-1 fw-bolder main-color">CONATCT SECTION</h2>
                    <LineBlue />

                    <div className="col-12">
                        <form className='w-75 mx-auto p-5'>
                            <label htmlFor="name" className='position-relative tx-second-color'>userName: </label>
                            <input id='name' name='name' type="text" placeholder='User Name' className ="w-100 border-bottom p-3 position-relative" />

                            <label htmlFor="age" className='position-relative tx-second-color'>userAge: </label>
                            <input id='age' name='age' type="number" placeholder='User Age' className ="w-100 border-bottom p-3 position-relative" />

                            <label htmlFor="email" className='position-relative tx-second-color'>userEmail: </label>
                            <input id='email' name='email' type="email" placeholder='User Email' className ="w-100 border-bottom p-3 position-relative" />

                            <label htmlFor="pass" className='position-relative tx-second-color'>userPassword: </label>
                            <input id='pass' name='pass' type="password" placeholder='User Password' className ="w-100 border-bottom p-3 position-relative" />

                            <button type='submit'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
    </section>
    </>
}
