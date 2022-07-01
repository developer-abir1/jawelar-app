import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../../utility/useProduct';
import Layout from './../../../layout/Layout';

const ProductDetails = () => {
    const [proudcts, setProducts] = useProduct();
    const [cart, setCart] = useState([])
    const { prodId } = useParams()




    // useEffect(() => {
    //     fetch('https://mocki.io/v1/43ed4fca-282a-42f7-a6ea-9c3f4c75b372')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])



    const product = proudcts.find(pd => pd._id === prodId)


    // console.log(product)
    // const product = data.products.map(pd => pd.id === prodId);
    // console.log("get the product", data.products.map(pd => console.log(pd)))

    const handleAddToCard = (pd) => {

        const newCard = [...cart, pd]


        setCart(newCard)
    }

    return (
        <Layout>

            <div className="row container-fluid">
                <div className="col-md-6">
                    <img style={{ height: '100%', width: '100%' }} src={product?.image} alt="" />
                </div>
                <div className="col-md-4 mt-3">
                    <h4>NAME:{product?.name}</h4>
                    <h6> <span className=' text-uppercase'>Discription:</span>  <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, qui. Error voluptatem, exercitationem minus molestias eius excepturi fugit! Ducimus quis omnis debitis libero earum laboriosam atque totam dolorem voluptate dolores.</small></h6>
                    <p className="fs-2 fw-bold">${product?.price}</p>
                    <div>
                        <button className=' addTOCard' onClick={() => handleAddToCard(product)}>Add To Card</button>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card py-4 p-2 ">

                        <p>Subtotal ( {cart.length} Items): ${cart.price}</p>
                        <button className='btn btn-warning   ' >Check out</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetails;