import React from 'react';
import Layout from '../../layout/Layout';
import HeaderMain from '../Header/HeaderMian/HeaderMain';
import Products from '../products/products/Products';

const Home = () => {
    return (
        <Layout>
            <HeaderMain />
            <Products />
        </Layout>
    );
};

export default Home;