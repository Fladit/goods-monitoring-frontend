import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface User {
    name: string;
}

const initialState: {user: null | User} = {
    user: {
        name: 'Eugene'
    }
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        login(state, action: PayloadAction<User>) {
            state.user = action.payload;
        },
        logout(state) {
            state.user = null;
        }
    }
})