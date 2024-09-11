import React from 'react'

import notfound from "../../assets/images/notfound.jpeg"

export default function Notfound() {
    return <>
        <div className="notfound py-5 mt-5">
            <figcaption className='d-flex justify-content-center align-items-center'>
                <img src={notfound} className='w-50' alt="notfound-image" />
            </figcaption>
        </div>
    </>
}
