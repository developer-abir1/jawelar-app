import React from 'react';
import Layout from '../../layout/Layout';
import DeliveryDetails from '../deliveryDetails/DeliveryDetails';
import Discount from '../discount/Discount';
import HeaderMain from '../Header/HeaderMian/HeaderMain';
import OtherCompny from '../otherCompny/OtherCompny';
import ProductInfo from '../productInfo/ProductInfo';
import Products from '../products/products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <Layout>
            <HeaderMain />
            <DeliveryDetails />
            <ProductInfo />

            <Products />
            <Discount />
            <OtherCompny />
            <Review />

        </Layout>
    );
};

export default Home;