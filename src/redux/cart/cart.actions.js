import {cartActionsType} from './cart.type';
export const displayCartDropdown = () => ({
    type: cartActionsType.DISPLAY_CART_DROPDOWN
})
export const addItem = item => ({
    type: cartActionsType.ADD_ITEM,
    payload: item
})
export const removeItem = item => ({
    type: cartActionsType.REMOVE_ITEM,
    payload: item
})
export const clearItemFromCart = item => ({
    type: cartActionsType.CLEAR_ITEM_FROM_CART,
    payload: item
})