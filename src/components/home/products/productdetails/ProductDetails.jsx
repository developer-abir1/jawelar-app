import React from 'react';
import Layout from './../../../layout/Layout';
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const { prodId } = useParams()


    return (
        <Layout>
            <h1>Produt detikes {prodId}</h1>
        </Layout>
    );
};

export default ProductDetails;