
export default function Item({images}) {
    // console.log(images);

    return <>
        <div className="col-lg-4 col-md-6">
            <figure className='position-relative'>
                <img src={images.img} className='w-100 rounded' alt="image" />
                <figcaption className='position-absolute top-0 start-0 bg-layer w-100 h-100 d-flex justify-content-center align-items-center rounded'>
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                </figcaption>
            </figure>
        </div>

        <div className="modal d-none position-fixed top-0 start-0 w-100 vh-100 d-flex justify-content-center align-items-center bg-black z-index bg-opacity-25  ">
            <div className="boxModal">
                <img src="" className='rounded' alt="image" />
            </div>
        </div>
    </>
}
