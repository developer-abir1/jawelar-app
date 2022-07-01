import React from 'react';
import './discount.css'
const Discount = () => {
    return (
        <section className="discount-section mt-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
                    <div>
                        <h6 className="text-capitalize text-warning">Exclusive Sale on daimond</h6>
                        <h1 className="text-white text-uppercase">Classic gold jewelerry</h1>
                        <h5 className="my-4  text-capitalize text-white">get up to 20% off Available</h5>
                        <button className="btn btn-warning  text-white">Shop Now</button>
                    </div>
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </section>
    );
};

export default Discount;