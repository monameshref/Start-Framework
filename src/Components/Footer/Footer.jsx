import React from 'react'

export default function Footer() {
    return <>

    <footer>
        <div className="container p-5">
            <div className="row py-3">
                <div className="col-md-4 pb-4">
                    <div className="item">
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>

                <div className="col-md-4 pb-4">
                    <div className="item">
                        <h3>AROUND THE WEB</h3>
                        <div className="icons">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-solid fa-globe"></i>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 pb-4">
                    <div className="item">
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>
        <div className = "footer-body">
            <p>Copyright © Your Website 2021</p>
        </div>
    </footer>
    </>
}
