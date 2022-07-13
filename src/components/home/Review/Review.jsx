import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Rating from 'react-rating';


const Review = () => {
    return (
        <div className="container">
            <h2 className="text-capitalize text-center my-5 py-5">Our Happy Clients</h2>
            <Swiper
                spaceBetween={50}
                slidesPerView={2}


                className="my-5"
            >
                <SwiperSlide>

                    <div className="card" >
                        <div className="d-flex justify-content-center "  >
                            <img style={{ width: "100px ", height: "100px", borderRadius: "50px", }} src="https://img.freepik.com/free-photo/happy-female-professional-glasses-suit-holding-tablet-making-winner-gesture-while-two-businessmen-working-glass-wall-copy-space-communication-concept_74855-14248.jpg?t=st=1656639692~exp=1656640292~hmac=ae3fdce47773a326183a87504530d847b19c14d6331bbd97a7bc4f5632b20fed&w=740" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Jarin Afroxe</h5>
                            <h6 className="card-title font-monospace">Nokia , Software Development</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            <Rating

                                emptySymbol="fa fa-star-o fa-2x"
                                fullSymbol="fa fa-star fa-2x"
                                emptySymbol="fa fa-star-o fa-2x"

                                readonly
                            />
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="card" >
                        <div className="d-flex justify-content-center "  >
                            <img style={{ width: "100px ", height: "100px", borderRadius: "50px", }} src="https://img.freepik.com/free-photo/happy-female-professional-glasses-suit-holding-tablet-making-winner-gesture-while-two-businessmen-working-glass-wall-copy-space-communication-concept_74855-14248.jpg?t=st=1656639692~exp=1656640292~hmac=ae3fdce47773a326183a87504530d847b19c14d6331bbd97a7bc4f5632b20fed&w=740" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Jarin Afroxe</h5>
                            <h6 className="card-title font-monospace">Nokia , Software Development</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            <Rating

                                emptySymbol="fa fa-star-o fa-2x"
                                fullSymbol="fa fa-star fa-2x"
                                emptySymbol="fa fa-star-o fa-2x"

                                readonly
                            />
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="card" >
                        <div className="d-flex justify-content-center "  >
                            <img style={{ width: "100px ", height: "100px", borderRadius: "50px", }} src="https://img.freepik.com/free-photo/happy-female-professional-glasses-suit-holding-tablet-making-winner-gesture-while-two-businessmen-working-glass-wall-copy-space-communication-concept_74855-14248.jpg?t=st=1656639692~exp=1656640292~hmac=ae3fdce47773a326183a87504530d847b19c14d6331bbd97a7bc4f5632b20fed&w=740" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Jarin Afroxe</h5>
                            <h6 className="card-title font-monospace">Nokia , Software Development</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Rating

                                emptySymbol="fa fa-star-o fa-2x"
                                fullSymbol="fa fa-star fa-2x"
                                emptySymbol="fa fa-star-o fa-2x"

                                readonly

                            />
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="card" >
                        <div className="d-flex justify-content-center "  >
                            <img style={{ width: "100px ", height: "100px", borderRadius: "50px", }} src="https://img.freepik.com/free-photo/happy-female-professional-glasses-suit-holding-tablet-making-winner-gesture-while-two-businessmen-working-glass-wall-copy-space-communication-concept_74855-14248.jpg?t=st=1656639692~exp=1656640292~hmac=ae3fdce47773a326183a87504530d847b19c14d6331bbd97a7bc4f5632b20fed&w=740" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Jarin Afroxe</h5>
                            <h6 className="card-title font-monospace">Nokia , Software Development</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            <Rating

                                fullSymbol="fa fa-star fa-2x"
                                emptySymbol="fa fa-star-o fa-2x"
                                initialRating={4}
                                style={{ color: 'green' }}
                                readonly
                            />
                        </div>


                    </div>
                </SwiperSlide>


            </Swiper>
        </div >
    );
};

export default Review;