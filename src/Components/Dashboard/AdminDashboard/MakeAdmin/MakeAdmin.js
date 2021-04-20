import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    //Send data to server
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            email: data.email,
        }
        const url = 'http://localhost:5000/addAdmin';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    };
    return (
        <div className="container-fluid row">
            <div className="col-md-2 pl-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <div className="container mt-5">
                    <form onSubmit={handleSubmit(onSubmit)} className="text-center product-form">
                        <p>Add new Admin</p>
                        <input {...register("name")} type="text" placeholder="Name" className="form-control" />
                        <br />
                        <input {...register("email")} type="email" placeholder="Eamil" className="form-control" />
                        <br />
                        <input type="submit" className="btn btn-color mt-4" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;