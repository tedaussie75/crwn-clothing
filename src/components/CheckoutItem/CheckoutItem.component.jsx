import React from 'react';

import './CheckoutItem.style.scss';
import {connect} from 'react-redux';
import {clearItemFromCart,removeItem,addItem} from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, clearItemFromCart,removeItemFromCart,addItemFromCart}) => {
    const {imageUrl, price, name, quantity} = cartItem;
    return(
        <div className='checkout-item'>
            <div className='image-container'>
            <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>removeItemFromCart(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>addItemFromCart(cartItem)}>&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={()=>clearItemFromCart(cartItem)}>&#10005;</div>
        </div> 
    )
}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    removeItemFromCart: item => dispatch(removeItem(item)),
    addItemFromCart: item => dispatch(addItem(item)),
})

export default connect(null,mapDispatchToProps)(CheckoutItem);

