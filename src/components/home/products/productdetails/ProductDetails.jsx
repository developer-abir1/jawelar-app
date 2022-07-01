import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { addToCard, deleteItem, getStoreCart } from '../../../utility/localStorege';
import useProduct from '../../../utility/useProduct';
import Layout from './../../../layout/Layout';

const ProductDetails = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useState([])
    const { prodId } = useParams()


    useEffect(() => {

        if (products.length)
        {
            const saveCart = getStoreCart()
            const storedCart = []
            for (const key in saveCart)
            {
                console.log("key", saveCart[key])
                const addedProduct = products.find(pd => pd._id === key)
                if (addedProduct)
                {
                    const quantity = saveCart[key]
                    addedProduct.quantity = quantity
                    console.log("quantity", quantity)
                }
                storedCart.push(addedProduct)

            }
            setCart(storedCart)

        }
    }, [products])



    const product = products.find(pd => pd._id === prodId)

    // console.log(product)
    // const product = data.products.map(pd => pd.id === prodId);
    // console.log("get the product", data.products.map(pd => console.log(pd)))

    const handleAddToCard = (pd) => {

        const newCard = [...cart, pd]
        setCart(newCard)
        addToCard(pd._id)
    }
    // price    
    let total = 0;
    for (const prod of cart)
    {
        total = total + prod.price

    }

    return (
        <Layout>

            <div className="row container-fluid">
                <div className="col-md-6">
                    <img style={{ height: '100%', width: '100%' }} src={product?.image} alt="" />
                </div>
                <div className="col-md-3 mt-3">
                    <h4>NAME:{product?.name}</h4>
                    <h6> <span className=' text-uppercase'>Discription:</span>  <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, qui. Error voluptatem, exercitationem minus molestias eius excepturi fugit! Ducimus quis omnis debitis libero earum laboriosam atque totam dolorem voluptate dolores.</small></h6>
                    <p className="fs-2 fw-bold">${product?.price}</p>
                    <div>
                        <button className=' addTOCard' onClick={() => handleAddToCard(product)}>Add To Card</button>

                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className="card py-4 p-2 ">

                        <div className="d-flex justify-content-between mb-4"> <span>Subtotal ( {cart.length} Items):</span>  <span>${total}</span></div>
                        <Link to="/prosscesOrder">   <button className='btn btn-warning  w-full ' > Check out   </button> </Link>

                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetails;