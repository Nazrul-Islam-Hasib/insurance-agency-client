import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import OrderItem from './OrderItem/OrderItem';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="container-fluid row">
            <div className="col-md-2 pl-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <div className="container mt-5">
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Service</th>
                                <th scope="col">price</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(pd => <OrderItem key={pd._id} order={pd}></OrderItem>)
                            }
                        </tbody>
                    </table>

                </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;