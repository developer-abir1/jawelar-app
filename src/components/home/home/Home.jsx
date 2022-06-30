import React from 'react';
import Layout from '../../layout/Layout';
import DeliveryDetails from '../deliveryDetails/DeliveryDetails';
import HeaderMain from '../Header/HeaderMian/HeaderMain';
import ProductInfo from '../productInfo/ProductInfo';
import Products from '../products/products/Products';

const Home = () => {
    return (
        <Layout>
            <HeaderMain />
            <DeliveryDetails />
            <ProductInfo />
            <Products />
        </Layout>
    );
};

export default Home;