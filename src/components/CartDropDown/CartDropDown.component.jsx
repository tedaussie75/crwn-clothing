import React from 'react';

import './CartDropDown.style.scss';

import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

import CustomButton from '../CustomButton/CustomButton.component';
import {EmptyCartMessage} from '../EmptyCartMessage/EmptyCartMessage.component';
import CartItem from '../CartItem/CartItem.component';
import { withRouter} from 'react-router-dom';
import { displayCartDropdown } from "../../redux/cart/cart.actions";


const CartDropDown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            !cartItems.length ? <EmptyCartMessage/> : cartItems.map( (item, key) => <CartItem item={item} key={key}/>)
        }
            
            <CustomButton value="Go To Checkout" onClick={()=>
            {
                history.push("/checkout");
                dispatch(displayCartDropdown(cartItems));
            }}/>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));