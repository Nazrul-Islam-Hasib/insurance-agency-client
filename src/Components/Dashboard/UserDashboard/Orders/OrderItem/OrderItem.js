import React, { useContext } from 'react';
import { LoggedInContext } from '../../../../../App';

const OrderItem = (props) => {
    const { name, price, email, service, status } = props.order;
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext);
    if(loggedInUser.email === email){
        return (
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{service}</td>
                <td>{price}$</td>
                <td>{status}</td>
            </tr>
        );
    }
    else{
        return (
            <tr></tr>
        );
    }
    
};

export default OrderItem;