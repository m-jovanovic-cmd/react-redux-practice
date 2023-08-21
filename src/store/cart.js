import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0 }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
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