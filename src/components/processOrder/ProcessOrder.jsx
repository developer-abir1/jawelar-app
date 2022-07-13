import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import { deleteItem, getStoreCart } from '../utility/localStorege';
import useProduct from '../utility/useProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'
const ProcessOrder = () => {
    const [products,] = useProduct();
    const [cart, setCart] = useState([]);
    console.log(cart)



    useEffect(() => {
        if (products.length)
        {
            const saveCart = getStoreCart()
            const storedCart = []
            for (const key in saveCart)
            {

                const addedProduct = products.find(pd => pd._id === key)
                if (addedProduct)
                {
                    const quantity = saveCart[key]
                    addedProduct.quantity = quantity

                }
                storedCart.push(addedProduct)

            }
            setCart(storedCart)

        }
    }, [products])

    const handleDelete = id => {
        const rest = cart.filter(pd => pd._id !== id)
        setCart(rest)
        deleteItem(id)

    }
    let totalQuantity = 0;
    let grandTotalQuantity = 0;
    for (const prod of cart)
    {
        if (!prod.totalQuantity)
        {
            totalQuantity = totalQuantity + prod.quantity
        }

        grandTotalQuantity += prod.price * prod.quantity

    }
    return (
        <Layout>
            {cart.length === 0 ? <h4 className="text-center  text-muted">Shopping Cart
                Cart is empty. Go shopping</h4>
                :
                <div className="row ">
                    <div className="col-md-8">
                        <table class="table">
                            <thead>


                                <tr >

                                    <th scope="col">Sr</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Image </th>
                                    <th scope="col">Action</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    cart.map((pd, index) =>
                                        <tr key={index}>
                                            <th scope="row"> {index + 1}</th>
                                            <td>{pd?.name}</td>
                                            <td>
                                                {pd.quantity}
                                            </td>
                                            <td>$ {pd?.price}</td>
                                            <td> <img width="40" src={pd?.image} alt="" srcset="" /></td>
                                            <td><button class="btn btn-danger" onClick={() => handleDelete(pd._id)}><FontAwesomeIcon icon={faTrash} />   </button></td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>


                    </div>
                    <div className="col-md-4">
                        <div className="card border-1  px-4 py-4 border-gary">
                            <h4>Totoal Items: {totalQuantity}</h4>
                            <h4>Grand Total: $ {grandTotalQuantity}</h4>

                            <button className="btn btn-warning">Prossces Order</button>
                        </div>
                    </div>
                </div>
            }
        </Layout>
    );
};

export default ProcessOrder;