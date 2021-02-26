import React from 'react';

import './Checkout.style.scss';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.component';
import {EmptyCartMessage} from '../../components/EmptyCartMessage/EmptyCartMessage.component';
import StripeCheckoutButton from '../../components/Stripe-button/Stripe-button.component';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

const CheckoutPage = ({cartItems, cartTotal}) => {
    return(

    !cartItems.length ? <EmptyCartMessage/>
    :
    
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        }
        <div className="total"> 
            <span>Total: ${cartTotal}</span>
        </div>
        <span className="stripe-fake-payment-infos" style={{color: 'red', textAlign: 'center', marginBottom: "20px"}}>
            * Please use the following test credit card for payments*
            <br/>
            4242 4242 4242 4242 -- Exp: 01/25 -- CVV: 123
        </span>
        <StripeCheckoutButton price={cartTotal}/>
    </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);