import React from 'react';
import './DeleteService.css';

const DeleteService = (props) => {
    const { name, price, imageUrl, _id, desc } = props.service;
    
    const deleteservice = (id) => {
        const url = `http://localhost:5000/delete/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data === true) {
                // window.location.reload(true);
                console.log(data, 'Deleted successfully!')
            } else {
                console.log(data, 'Not deleted!')
            }
        })
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{price}$</td>
            <td>{desc}</td>
            <td>
                <img className="serviceImg" src={imageUrl} alt="img"/>
                <button className="btn btn-sm btn-danger ml-2" onClick={()=> {deleteservice(_id)}}>Delete</button>
            </td>
        </tr>
    );
};

export default DeleteService;