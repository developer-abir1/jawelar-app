import React from 'react';
import './productItems.css'
const ProductItems = ({ pd }) => {
    console.log(pd)
    const { name, image, price } = pd
    return (
        <div className='cols'>
            <div class="card">
                <img style={{ height: "300px" }} src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title fs-4  text-info text-capitalize text-center">{name}</h5>
                    <p class="card-text text-muted text-justify text-center">This is a longer card with supporting text below as a natural lead-in to additional content </p>
                    <div className=" d-flex justify-content-between">
                        <span className="fs-3 fw-bold">
                            ${price}
                        </span>
                        <button className="addTOCard">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductItems;