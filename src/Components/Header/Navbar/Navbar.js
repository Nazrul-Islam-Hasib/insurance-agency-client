import React, { useContext } from 'react';
import {
    Link
} from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link to="/" className="nav-link secondary-color"><h2>Insurance Agency</h2></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Our Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Testimonial</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard"><button className="btn btn-color">Dashboard</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;