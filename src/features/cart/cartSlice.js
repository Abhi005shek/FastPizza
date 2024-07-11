import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    // {
    //   pizzaId: 12,
    //   name: "Panner Pizza",
    //   quantity: 2,
    //   unitPrice: 10,
    //   totalPrice: 20,
    // },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  clearCart,
  addItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  deleteItem,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getPizzaQuantity = (state) => {
  return state.cart.cart.reduce((acc, item) => item.quantity + acc, 0);
};

export const getPizzaTotalPrice = (state) => {
  return state.cart.cart.reduce((acc, item) => item.totalPrice + acc, 0);
};

export const getCurrentQuantityById = (id) => (state) => {
  return state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
};
