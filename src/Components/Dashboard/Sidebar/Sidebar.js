import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import {
    Link
} from "react-router-dom";
import { LoggedInContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext);
    const [admin, setAdmin] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/admin')
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [])
    // console.log(admin);
    const adminFound = admin.find(element => element.email === loggedInUser.email);
    // console.log(adminFound.email);
    if (adminFound !== undefined && adminFound.email) {
        return (
            <div className="sidebar bg-color">
                <div className="user-role text-center">
                    <h6>Welcome <span>{loggedInUser.name}</span></h6>
                    <p>Role: Admin</p>
                </div>
                <ul className="mt-5">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/orderlist" className="nav-link">OrderList</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/addservice" className="nav-link">Add Service</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/makeadmin" className="nav-link">Make Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/manageservice" className="nav-link">Manage Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/orders" className="nav-link">Orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/checkout" className="nav-link">Checkout</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/review" className="nav-link">Give review</Link>
                    </li>
                </ul>
            </div>
        );
    }
    else {
        return (
            <div className="sidebar bg-color-alt">
                <div className="user-role text-center">
                    <h6>Welcome <span>{loggedInUser.name}</span></h6>
                    <p>Role: User</p>
                </div>
                <ul className="mt-5">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/orders" className="nav-link">Orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/checkout" className="nav-link">Checkout</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/review" className="nav-link">Give review</Link>
                    </li>
                </ul>
            </div>
        );
    }

};

export default Sidebar;