import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authStatus: false,
    data: null,
    token: null,
}

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.authStatus = true;
            // const userData = action.payload;
            // delete userData.token;
            state.data = action.payload;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.authStatus = false;
            state.data = null;
            state.token = null;
        }
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer