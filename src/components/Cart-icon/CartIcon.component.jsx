import React from 'react';
import { connect } from 'react-redux';

import {displayCartDropdown} from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../img/shopping-bag.svg';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

import './CartIcon.style.scss';

const CardIcon = ({displayCartDropdown,itemCount}) => (
    <div className="cart-icon" onClick={displayCartDropdown}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    displayCartDropdown: () => dispatch(displayCartDropdown())
})

const mapStateToProps = createStructuredSelector({
    itemCount : selectCartItemsCount
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardIcon);