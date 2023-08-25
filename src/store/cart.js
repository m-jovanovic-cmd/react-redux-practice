import { createSlice } from "@reduxjs/toolkit";

import { uiActions } from "./ui";

const initialShit = 

export const fetchCartData = () => {
    return async (dispatch) => {
        const sendFirst = async () => {
            await fetch()
        }
        const fetchData = async () => {
            const response = await fetch('https://custom-react-hooks-chapter15-default-rtdb.europe-west1.firebasedatabase.app/cart.json', { 
                method: 'PUT',
                body: JSON.stringify(initialShit),
            });

            if (!response.ok) {
                throw new Error("Could not fetch cart data!");
            }

            const data = await response.json();
            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData));

        } catch(error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed!'
            }));
        }
    };
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: { 
        items: [], 
        totalQuantity: 0 
    },
    reducers: {
        replaceCart(state, action) {
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
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

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }));

        const sendRequest = async () => {
            const response = await fetch('https://custom-react-hooks-chapter15-default-rtdb.europe-west1.firebasedatabase.app/cart.json', { 
                method: 'PUT',
                body: JSON.stringify(cart),
            });
    
            if (!response.ok) {
                throw new Error('Error encountered!');
            }
        };

        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Send cart data successfully!'
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }));
        };
    };
};


export const cartActions = cartSlice.actions;
export default cartSlice.reducer;