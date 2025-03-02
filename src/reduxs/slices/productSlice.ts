import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {IProductData} from 'interfaces';

export interface ProductState {
  products: IProductData[];
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductData: (state, action: PayloadAction<IProductData[]>) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setProductData} = productSlice.actions;

export default productSlice.reducer;
