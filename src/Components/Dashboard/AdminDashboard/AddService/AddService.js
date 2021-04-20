import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../../Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(null);
    //Send data to server
    const onSubmit = data => {
        if(imageUrl!== null){
            const eventData = {
                name: data.service_name,
                desc: data.service_desc,
                price: data.service_price,
                imageUrl: imageUrl
            }
            const url = 'https://insurance-agency-server.herokuapp.com/addService';
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
        }

    };

    //Upload image to Imgaebb
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'c2e96acee378eb368b0c3c66a15a78a2');
        imageData.append('image', event.target.files[0]);

        fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: imageData
        })
            .then(response => response.json())
            .then(data => {
                setImageUrl(data.data.display_url);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className="container-fluid row">
            <div className="col-md-2 pl-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <div className="container mt-5">
                    <form onSubmit={handleSubmit(onSubmit)} className="text-center product-form">
                        <p>Add new services</p>
                        <input {...register("service_name")} type="text" placeholder="Add service" className="form-control" />
                        <br />
                        <input {...register("service_price")} type="number" placeholder="Add price" className="form-control" />
                        <br />
                        <textarea {...register("service_desc")} type="text" placeholder="Description" className="form-control" />
                        <br />
                        <input type="file" onChange={handleImageUpload} />
                        <br />
                        <input type="submit" className="btn btn-color mt-4" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;