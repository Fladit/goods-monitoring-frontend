import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { IResponseProductsByCategory } from '../../app/entities/Product';
import { PageInitSuccess } from '../actions/PageInitSuccess';
import type { Store } from '../types/store';

const initialState: { productsInfo: IResponseProductsByCategory } = {
  productsInfo: {
    category: {} as unknown as IResponseProductsByCategory['category'],
    productGroups: [],
  },
};

export const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(PageInitSuccess, (state, action: PayloadAction<Store>) => {
      return { ...state, productsInfo: action.payload.productsInfo };
    });
  },

});
