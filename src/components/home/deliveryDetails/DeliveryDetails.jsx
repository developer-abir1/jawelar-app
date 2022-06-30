import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillAlt, faPaperPlane, faShareFromSquare, faSquare } from '@fortawesome/free-regular-svg-icons';
import "./delivery.css"


const DeliveryDetails = () => {
    return (
        <section className="container  py-5">
            <div className="row">
                <div className="col-md-3 items1">
                    <div className="d-flex   justify-content-center align-items-center    "  >
                        <div>
                            <FontAwesomeIcon icon={faPaperPlane} className="me-4 fs-2 text-danger" />
                        </div>
                        <div>
                            <h6>Free Shipping </h6>
                            <p className="text-secondary">Free Shipping On All us order or oder Above $200</p>

                        </div>
                    </div>
                </div>
                <div className="col-md-3 items2">
                    <div className="d-flex   justify-content-center align-items-center ">
                        <div>
                            <FontAwesomeIcon icon={faSquare} className="me-4 fs-2 text-danger" />
                        </div>
                        <div>
                            <h6> Support 24/7</h6>
                            <p className="text-secondary">  Contact Us 24 Hours A Day, 7 Days A Week</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 items3">
                    <div className="d-flex   justify-content-center align-items-center ">
                        <div>
                            <FontAwesomeIcon icon={faShareFromSquare} className="me-4 fs-2 text-danger" />
                        </div>
                        <div>
                            <h6>  30 Days Return</h6>
                            <p className="text-secondary">Simply Return It Within 30 Days For An Exchange</p>

                        </div>
                    </div>
                </div>
                <div className="col-md-3 items4">
                    <div className="d-flex   justify-content-center align-items-center ">
                        <div>
                            <FontAwesomeIcon icon={faMoneyBillAlt} className="me-4 fs-2 text-danger" />
                        </div>
                        <div>
                            <h6>
                                100% Payment Secure

                            </h6>
                            <p className="text-secondary">  We Ensure Secure Payment With PEV</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeliveryDetails;