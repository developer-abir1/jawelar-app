import React from 'react';
import data from '../../../utility/data';
import ProductItems from '../productItems/ProductItems';

const Products = () => {
    return (
        <section>
            <div className="px-4 py-4">
                <h2 className="     border-end border-info border-2 " style={{ width: '200px' }} > Hot Product:</h2>
            </div>
            <div className="row g-4  row-cols-1 row-cols-sm-2   row-cols-md-3  row-cols-lg-4">
                {
                    data.products.map(pd => <ProductItems key={pd.id} pd={pd} />)
                }
            </div>
        </section>
    );
};

export default Products;