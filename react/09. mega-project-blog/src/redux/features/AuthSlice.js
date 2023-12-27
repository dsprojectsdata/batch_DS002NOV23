import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authStatus: false,
    data: null
}

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.authStatus = true;
            state.data = action.payload
        },
        logout: (state) => {
            state.authStatus = false;
            state.data = null;
        }
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer