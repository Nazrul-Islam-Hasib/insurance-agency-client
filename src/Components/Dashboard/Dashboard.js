import React from 'react';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="container-fluid row">
            <div className="col-md-4 pl-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
                <div className="container mt-5">
                    <h2>Dashboard</h2>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;