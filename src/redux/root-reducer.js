import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import menuItemsReducer from './itemsInfos/itemsInfos.reducer';
import shopInfosReducer from './shopInfos/shopInfos.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    items: menuItemsReducer,
    shopInfos: shopInfosReducer
})

export default persistReducer(persistConfig, rootReducer)