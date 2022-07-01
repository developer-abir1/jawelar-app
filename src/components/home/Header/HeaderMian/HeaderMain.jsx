import React from 'react';
import banner from '../../../../images/image/woman.png';
import "./headerMin.css";
import product from '../../../../images/products/daimons-items.png'

const HeaderMain = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active carouselItem"  >
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6  d-flex justify-content-center align-items-center flex-column  " style={{ height: "500px" }}>


                            <div className="px-4 ">
                                <h4 className="fs-4 text-center text-muted text-uppercase"> Family Jewelery Collection</h4>
                                <p className="  text-secondary text-center my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                            </div>

                            <div className="d-flex  justify-content-between ">

                                <button className=' btn btn-warning   text-white fw-bold  '>Shop Now</button>
                            </div>

                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
                <div className="carousel-item carouselItem1 ">
                    <div className="row" >
                        <div className="col-md-6  d-flex justify-content-center align-items-center flex-column  " style={{ height: "500px" }} >
                            <h2 className="text-uppercase text-muted">Daimonds Jewelery collection</h2>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, velit!</p>
                            <div className="d-flex  justify-content-between align-items-center">

                                <button className=' btn  btn-warning text-white    text-uppercase'>Shop Now</button>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="carousel-item carouselItem2">
                    <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: "500px" }}>
                        <h2 className="text-uppercase text-white">Grace Desinger Jewelery</h2>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <div>
                            <button className="btn  btn-warning text-white   text-uppercase">Shop Now</button>

                        </div>
                    </div>
                </div>
            </div>



            <button className="carousel-control-prev   bg-black  " style={{ height: "60px ", width: "60px", marginTop: "220px" }} type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>



            <button className="carousel-control-next    bg-black " style={{ height: "60px ", width: "60px", marginTop: "220px" }} type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>


        </div >
    );
};

export default HeaderMain;