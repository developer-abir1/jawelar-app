import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import { getStoreCart } from '../utility/localStorege';

const ProcessOrder = () => {

    useEffect(() => {
        const saveCart = getStoreCart()
        console.log(saveCart)
    }, [])

    return (
        <Layout>
            <h1>This is ProcessOrder</h1>
        </Layout>
    );
};

export default ProcessOrder;