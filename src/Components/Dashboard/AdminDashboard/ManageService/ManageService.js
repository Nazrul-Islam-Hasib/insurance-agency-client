import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import DeleteService from './DeleteService/DeleteService';

const ManageService = () => {
    const [service, setservice] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setservice(data))
    }, [])
    return (
        <div className="container-fluid row">
            <div className="col-md-4 pl-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
                <div className="row mt-3">
                    <h4>All services</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Desc</th>
                                <th scope="col">Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                service.map(pd => <DeleteService key={pd._id} service={pd}></DeleteService>)
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default ManageService;