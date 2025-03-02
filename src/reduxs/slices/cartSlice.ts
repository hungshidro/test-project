import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {ICartProduct, IProductData} from 'interfaces';

export interface CartState {
  cartProducts: ICartProduct[];
}

const initialState: CartState = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setCartData: (state, action: PayloadAction<ICartProduct[]>) => {
      state.cartProducts = action.payload;
    },
    addProductToCart: (state, action: PayloadAction<IProductData>) => {
      const product = action.payload;
      const index = state.cartProducts.findIndex(
        item => item.product.id === product.id,
      );
      if (index !== -1) {
        state.cartProducts[index].quantity++;
      } else {
        state.cartProducts.push({
          product,
          quantity: 1,
          id: Math.random() * 1000,
          price: product.price,
        });
      }
    },
    removeProductFormCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const index = state.cartProducts.findIndex(item => item.id === id);
      if (index !== -1) {
        state.cartProducts.splice(index, 1);
      }
    },
    updateCartQuantity: (
      state,
      action: PayloadAction<{id: number; quantity: number}>,
    ) => {
      const {id, quantity} = action.payload;
      const index = state.cartProducts.findIndex(item => item.id === id);
      if (index !== -1) {
        state.cartProducts[index].quantity = quantity;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCartData,
  addProductToCart,
  removeProductFormCart,
  updateCartQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
