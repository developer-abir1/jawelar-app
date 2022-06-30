import React from 'react';
import ring from "../../../images/image/ring.png";
import model from "../../../images/image/our-model.png";
import nakles from "../../../images/products/nakles-items.png";
import daimons from "../../../images/products/daimons-items.png";
const ProductInfo = () => {
    return (
        <section className="container">
            <div className="row row-cols-2  g-4 text-center">
                <div className="col">
                    <div className="card  bg-light ">
                        <div className="row  d-flex justify-content-center align-items-center">
                            <div className="col-md-6">
                                <img style={{ height: "180px", width: "100%" }} src={ring} alt="" />
                            </div>
                            <div className="col-md-6  ">
                                <p className="text-uppercase  text-secondary">Beautiful</p>
                                <h4>
                                    <span>Wedding</span>
                                    <span>
                                        Ring
                                    </span>

                                </h4>
                                <p>Shop Now</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="row  d-flex justify-content-center align-items-center">
                            <div className="col-md-6">
                                <img style={{ height: "180px", width: "100%" }} src={model} alt="" />
                            </div>
                            <div className="col-md-6">
                                <p className="text-uppercase  text-secondary">Beautiful</p>
                                <h4>
                                    <span>Wedding</span>
                                    <span>
                                        Ring
                                    </span>

                                </h4>
                                <p>Shop Now</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="row  d-flex justify-content-center align-items-center">
                            <div className="col-md-6">
                                <img className="zoom" style={{ height: "180px", width: "100%" }} src={daimons} alt="" />
                            </div>
                            <div className="col-md-6">
                                <p className="text-uppercase  text-secondary">Beautiful</p>
                                <h4>
                                    <span>Wedding</span>
                                    <span>
                                        Ring
                                    </span>

                                </h4>
                                <p>Shop Now</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card   ">
                        <div className="row  d-flex justify-content-center align-items-center">
                            <div className="col-md-6">
                                <img style={{ height: "180px", width: "100%" }} src={nakles} alt="" />
                            </div>
                            <div className="col-md-6">
                                <p className="text-uppercase  text-secondary">Beautiful</p>
                                <h4>
                                    <span>Wedding</span>
                                    <span>
                                        Ring
                                    </span>

                                </h4>
                                <p>Shop Now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductInfo;