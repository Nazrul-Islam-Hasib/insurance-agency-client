import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../../Sidebar/Sidebar';

const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            desc: data.review,
        }
        const url = 'https://insurance-agency-server.herokuapp.com/addReview';
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
                        <p>Add review</p>
                        <input {...register("name")} type="text" placeholder="Company name" className="form-control" />
                        <br />
                        <textarea {...register("review")} type="text" placeholder="Review" className="form-control" />
                        <br />
                        <input type="submit" className="btn btn-color mt-4" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;