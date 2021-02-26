import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import CrwnLogo from '../../img/crown.svg';

const StripeCheckoutButton = ({price}) => {
    const stripePrice = price * 100;
    const stripeKey = "pk_test_51IP6ZCJCUQcTHgIVu7LHq4YpxaANDwP3iTEXsYS24i3abGPSmmfe2x42VttUD9xFlwugGFwsrvxDU3HGaIWKTWVi00aONx8Ggk";
    const onToken = token => {
        console.log(token);
        alert("Payment successful !");
    }
    return(

        <StripeCheckout 
        label="Pay Now"
        name="CRWN Clothing Ltd." // the pop-in header title
        shippingAddress
        billingAddress
        image={CrwnLogo}
        description={`Your total is $${price}`}
        amount={stripePrice}
        token={onToken}
        stripeKey={stripeKey}
        locale="auto"
        currency="USD"
        allowRememberMe
        />
    )
}

export default StripeCheckoutButton;