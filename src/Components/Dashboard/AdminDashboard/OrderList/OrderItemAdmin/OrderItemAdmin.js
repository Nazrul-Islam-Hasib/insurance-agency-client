import React, { useState } from 'react';

const OrderItemAdmin = (props) => {
    const { name, price, email, service, status, _id } = props.order;
    const [updatedStatus, setUpdatedStatus] = useState('');
    const updateOrder = (id) => {
        const url = `http://localhost:5000/update/${id}`
        const updateData = { updatedStatus}
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data === true) {
                    console.log(data, 'updated successfully!')
                } else {
                    console.log(data, 'Not updated!')
                }
            })
    }
    const handleSelect = (e) =>{
        setUpdatedStatus(e.target.value);
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{service}</td>
            <td>{price}$</td>
            <td>
                <select onChange={handleSelect}>
                    <option value={status}>{status}</option>
                    <option value="On Going">On Going</option>
                    <option value="approved">Approved</option>
                </select>
                <button className="btn btn-sm btn-danger ml-2" onClick={() => { updateOrder(_id) }}>Update</button>
            </td>
        </tr>
    );
};

export default OrderItemAdmin;