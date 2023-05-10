import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice';
import { productsSlice } from './slices/productsSlice';

export const createStore = (defaultState: any = {}) => {
  return configureStore({ reducer: { [userSlice.name]: userSlice.reducer, [productsSlice.name]: productsSlice.reducer }, preloadedState: defaultState });
};

export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
