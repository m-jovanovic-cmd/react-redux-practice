import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart';
import availableItemsReducer from './availableItems';
import uiReducer from './ui';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        availableItems: availableItemsReducer,
        ui: uiReducer
    }
});

export default store;