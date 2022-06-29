import React from 'react';
import banner from '../../../../images/image/woman.png';
import "./headerMin.css";
import product from '../../../../images/products/daimons-items.png'

const HeaderMain = () => {
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active carouselItem"  >
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6  d-flex justify-content-center align-items-center flex-column  " style={{ height: "500px" }}>


                            <div className="px-4 ">
                                <h4 className="fs-4 text-center text-muted text-uppercase">Most Popular Collection</h4>
                                <p className=" text-muted text-center my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi soluta, consequatur </p>
                            </div>

                            <div className="d-flex  justify-content-between align-items-center">
                                <button className='btn btn-primary'>Get Booking</button>
                                <button className=' btn btn-outline-warning  ms-4 '>Buy Now</button>
                            </div>

                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
                <div class="carousel-item carouselItem1 ">
                    <div className="row" >
                        <div className="col-md-6  d-flex justify-content-center align-items-center flex-column  " style={{ height: "500px" }} >
                            <h2 className="text-uppercase text-muted">Our Bast collection</h2>
                            <div className="d-flex  justify-content-between align-items-center">
                                <button className='btn btn-primary'>  Booking</button>
                                <button className=' btn btn-outline-success  ms-4 '>Buy Now</button>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="carousel-item carouselItem2">
                    <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: "500px" }}>
                        <h2 className="text-uppercase text-white">Wadding our most common effect</h2>
                        <div>
                            <button className="btn btn-close-white">Book Now</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeaderMain;