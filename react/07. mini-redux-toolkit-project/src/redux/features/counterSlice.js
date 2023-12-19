import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incrementNum: (state, action) => {
            // state.count += 1
            // console.log("action >>", action);
            state.count += action.payload;
        },
        decrementNum: (state, action) => {
            state.count -= 1
        }
    }
});

export const { incrementNum, decrementNum } = counterSlice.actions

export default counterSlice.reducer;