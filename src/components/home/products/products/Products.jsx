import React, { useEffect, useState } from 'react';
import data from '../../../utility/data';
import ProductItems from './../productItems/ProductItems';

const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/43ed4fca-282a-42f7-a6ea-9c3f4c75b372')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCard = (product) => {
        const newCard = [...cart, product]
        setCart(newCard)

    }


    return (
        <section className="container">
            <div className="px-4 py-4">
                <h2 className="     border-end border-info border-2 " style={{ width: '200px' }} > Hot Product:</h2>
            </div>
            <div className="row g-4  row-cols-1 row-cols-sm-2   row-cols-md-3  row-cols-lg-4">
                {
                    products.slice(0, 8).map(pd => <ProductItems key={pd.id} pd={pd} handleAddToCard={handleAddToCard} cart={cart} />)
                }
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-warning my-3 py-3">Show All Products</button>
            </div>
        </section>
    );
};

export default Products;