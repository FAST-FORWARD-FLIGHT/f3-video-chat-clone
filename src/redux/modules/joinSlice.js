// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//     error: null,
//     isLogin: false,
// };

// //join
// export const __getJoin = createAsyncThunk(
//     "join",
//     async (payload, thunkAPI) => {
//         try {
            
//         } catch (err) {
//             console.log(err)
//         }
//     });


// //slice
// export const joinSlice = createSlice({
//     name: "join",
//     initialState,
//     reducers: {},

//     extraReducers: (builder) => {
//         builder

//             //로그인 
//             .addCase(__getJoin.fulfilled, (state, action) => {
//                 state.isPost = action
//                 state.isLogin = true;
//             })
//             .addCase(__getJoin.rejected, (state, action) => {
//                 state.isLogin = false;
//             })
//             .addCase(__getJoin.pending, (state, action) => {
//                 state.isLogin = false;
//             })
            
//     },
// });


// export const { join } = joinSlice.actions;
// export default joinSlice.reducer;