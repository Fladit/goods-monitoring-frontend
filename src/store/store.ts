import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice";

export const createStore = () => {
    return configureStore({reducer: {[userSlice.name]: userSlice.reducer}})
}

export type AppStore = ReturnType<typeof createStore>
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];