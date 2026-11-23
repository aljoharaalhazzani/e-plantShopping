import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, { payload: plant }) => {
      const item = state.items.find(({ name }) => name === plant.name);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...plant, quantity: 1 });
      }
    },
    removeItem: (state, { payload: name }) => {
      state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, { payload: { name, quantity } }) => {
      const item = state.items.find(item => item.name === name);
      if (item && Number.isInteger(quantity) && quantity > 0) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
