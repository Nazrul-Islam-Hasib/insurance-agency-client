import React from 'react';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div className="bg-color">
            <Navbar></Navbar>
            <div className="container section-pad">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2>Get all your insurance at <span className="secondary-color">Insurance Agency</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur rem nemo quidem nisi esse numquam laboriosam atque</p>
                        <button className="btn btn-color">INSURE NOW</button>
                    </div>
                    <div className="col-md-6">
                        <div>
                        <img src="https://cdn.pixabay.com/photo/2016/07/17/08/37/coins-1523383__340.jpg" alt="img" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;