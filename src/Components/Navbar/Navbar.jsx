import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    // Change Navbar
    function changeNavbar (){
        const navbar = document.querySelector(".navbar");
        if (window.scrollY >= navbar.scrollHeight) {
            navbar.classList.remove("py-4");
        }
        else {
            navbar.classList.add("py-4");
        }
    }

    useEffect(function(){
        // ComponentDidMount
        window.addEventListener("scroll", changeNavbar);

        // ComponentWillUnmount
        return function() {
            window.removeEventListener("scroll", changeNavbar);
        }
    } , []);

    return <>
        <nav className="navbar navbar-expand-lg fixed-top py-4">
            <div className="container">
                <NavLink className="navbar-brand text-uppercase fs-2 fw-bolder" to="/">start framework</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars text-white fs-4"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link text-uppercase fw-bold ms-3 px-2" to="/about">about</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-uppercase fw-bold ms-3 px-2" to="/portfolio">portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-uppercase fw-bold ms-3 px-2" to="/contact">contact</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
}