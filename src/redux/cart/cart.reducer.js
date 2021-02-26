import {cartActionsType} from '../cart/cart.type';
import {addItemToCart, clearItemFromCart,removeItemFromCart} from './cart.utils';
const INITIAL_STATE = {
    cartDropdownVisible : false,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    const {cartDropdownVisible,cartItems} = state;
    switch (action.type) {
        case cartActionsType.DISPLAY_CART_DROPDOWN:
            return {
                ...state,
                cartDropdownVisible: !cartDropdownVisible
            }
        case cartActionsType.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(cartItems, action.payload)
            }
        case cartActionsType.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(cartItems, action.payload)
            }
        case cartActionsType.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: clearItemFromCart(cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;