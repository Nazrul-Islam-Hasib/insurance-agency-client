import React from 'react';
import { Link } from "react-router-dom";
import './ServiceItem.css';

const ServiceItem = (props) => {
    const {name, price, imageUrl,desc} = props.service;
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card text-center mb-3 mt-3">
                <img src={imageUrl} alt="Card-img" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-text">price: {price}$</h5>
                    <p>{desc}</p>
                    <Link to="/checkout">
                        <button className="btn btn-sm btn-color" onClick={() =>{ props.handleService(props.service)}}>
                            Buy now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;