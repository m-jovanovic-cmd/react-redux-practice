import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart';
import availableItemsReducer from './availableItems';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        availableItems: availableItemsReducer
    }
});

export default store;