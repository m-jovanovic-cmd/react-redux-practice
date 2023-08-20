import { createSlice } from "@reduxjs/toolkit";

const DUMMY_DATA = [ 
    { title: 'Lamp', price: 6.00, id: 'm1', description: 'A shining ray of hope.' }, 
    { title: 'Wooddesk', price: 28.99, id: 'm2', description: 'Stable like your grandfathers stable.' } 
];

const initialState = { items: DUMMY_DATA }

const availableItemsSlice = createSlice({
    name: 'availableItems',
    initialState,
    reducers: {
    }
});

export const availableItemsActions = availableItemsSlice.actions;
export default availableItemsSlice.reducer;