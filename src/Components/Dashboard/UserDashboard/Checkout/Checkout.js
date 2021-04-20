import React, { useContext, useEffect, useState } from 'react';
import { serviceContext, LoggedInContext, paymentContext } from '../../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './Checkout.css';
import Sidebar from '../../Sidebar/Sidebar';

const Checkout = () => {
    const [selectedService, setSelectedService] = useContext(serviceContext);
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext);
    const [payment, setPayment] = useContext(paymentContext);

    

    const handleSubmit = () => {
        if (payment.id) {
            console.log(selectedService)
            console.log(loggedInUser)
            console.log(payment);
            const orderData = {
                name: loggedInUser.name,
                email: loggedInUser.email,
                service: selectedService.name,
                price: selectedService.price,
                paymentId: payment.id,
                status: 'pending'
            }
            const url = 'https://insurance-agency-server.herokuapp.com/addOrder';
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderData)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }

    if (selectedService.name !== undefined) {
        return (
            <div className="container-fluid row">
                <div className="col-md-2 pl-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 justify-content-center align-items-center">
                    <div className="container mt-5">
                        <div className="checkout-form">
                            <h2>Customer details</h2>
                            <p>{loggedInUser.name}</p>
                            <p> {loggedInUser.email}</p>
                            <h2>Service details</h2>
                            <p>Name: {selectedService.name}</p>
                            <p>price: {selectedService.price}$</p>
                            <p>{selectedService.desc}</p>
                            <ProcessPayment></ProcessPayment>
                        </div>
                        <br />
                        <button className="btn btn-color" onClick={handleSubmit}>Submit Order</button>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="container-fluid row">
                <div className="col-md-2 pl-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 justify-content-center align-items-center">
                    <div className="container mt-5">
                        <div className="checkout-form">
                            <p>Select a service for checkout</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
};

export default Checkout;