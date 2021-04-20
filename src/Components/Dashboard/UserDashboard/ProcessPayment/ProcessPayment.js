import React from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './CardForm';

// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Ii4CJC5599VEOtZrygCesGomDOkz7Ajf9cQQMhMGIYzkJMNzslSv3DKnk0bn98ETVz4N1PcotLXz43DABD6iQUO001b5SCMoo');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <CardForm></CardForm>
        </Elements>
    );
};

export default ProcessPayment;