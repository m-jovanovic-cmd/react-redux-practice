import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: true, items: [], totalQuantity: 0 }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart;
        },
        addItem(state, action) {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            if(itemIndex === -1) {
                state.items.push({...action.payload, quantity: 1})
            } else {
                state.items[itemIndex].quantity++;
            }
            state.totalQuantity++;
        },
        removeItem(state, action) {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            if(state.items[itemIndex].quantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload.id);
            } else {
                state.items[itemIndex].quantity--;
            }
            state.totalQuantity--;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;