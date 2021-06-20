import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
// const dispatch = useDispatch()
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        // token: JSON.parse(localStorage.getItem('token')),
        // token: '',
        token: JSON.parse(localStorage.getItem('token')),
        userlogged: JSON.parse(localStorage.getItem('userlogged')),
    },
    reducers: {
        tokenreciever: (state, action) => {
            // state.token = action.payload.token;
            state.token = localStorage.setItem('token', JSON.stringify(action.payload.token));
            // state.userlogged = action.payload.userlogged;
            state.userlogged = localStorage.setItem('userlogged', JSON.stringify(action.payload.userlogged));
        },
        logout: (state) => {
            localStorage.removeItem('token')
            localStorage.removeItem('userlogged')
            state.token = ""
            state.userlogged = ""
        }
    },
})

export const { tokenreciever, logout } = authSlice.actions

export default authSlice.reducer