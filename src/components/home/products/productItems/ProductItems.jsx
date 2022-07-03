import React, { useEffect, useState } from 'react';
import './productItems.css';
import { Link } from 'react-router-dom'
import { addToCard, } from '../../../utility/localStorege';
const ProductItems = ({ pd }) => {
    const [cart, setCart] = useState([])
    const { name, image, price, _id } = pd;


    const handleAddToCard = (pd) => {

        let newCart = [];
        const exists = cart.find(product => product._id === pd._id);
        if (!exists)
        {
            pd.quantity = 1;
            newCart = [...cart, pd];
        }
        else
        {
            const rest = cart.filter(product => product._id !== pd._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }


        setCart(newCart)
        addToCard(pd._id)

    }
    return (
        <div className='col'>
            <div className="card p-2">
                <Link to={`/productDetails/${_id}`} style={{ textDecoration: "none" }}>
                    <img style={{ height: "300px" }} src={image} className="card-img-top  " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fs-4  text-info text-capitalize text-center">{name}</h5>
                        <p className="card-text text-muted text-justify text-center">This is a longer card with supporting text below as a natural lead-in to additional content </p>
                    </div>
                </Link>
                <div className=" d-flex justify-content-between cardPrice">
                    <span className="fs-3 fw-bold cardPrice">
                        ${price}
                    </span>
                    <button className="addTOCard  " onClick={() => handleAddToCard(pd)} >Add To Card</button>

                </div>
            </div>
        </div>

    );
};

export default ProductItems;