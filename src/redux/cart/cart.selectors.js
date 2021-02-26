import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart],
    cart => cart.cartItems
)

export const selectCartHidden = createSelector([selectCart], 
    cart => cart.cartDropdownVisible
)

export const selectCartItemsCount = createSelector(
    [selectCartItems], 
    cartItem => cartItem.reduce((acc,cartItem) => acc + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItem => cartItem.reduce((acc,cartItem) => acc + (cartItem.price * cartItem.quantity), 0)
)