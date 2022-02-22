import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100; // stripe api requires price value in cents.
    const publishableKey = 'pk_test_51KVZ0zGn3yl40VcyylpBregNNQ1bwCRD7FyRkijbl4672zUxPbQGJhBNuwYAakpqXcn9B36SoS4BQcY9LsHxS0tD00QSkvFW5j';


    /* 
    A function that takes the token and logs it out since application is not going to process the payment. Usually this would be passed to the backend and it will create the charge.
    */
const onToken = token => { 
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Window Shopper Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;