import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface authState {
    authActive:boolean,
    isAuth:boolean

}

const initialState:authState = {
   authActive: false,
   isAuth:false
}

export const authSlice = createSlice({
    name:'authorization',
    initialState,
    reducers:{
        setActiveAuthForm(state, action: PayloadAction<boolean>){
            state.authActive= action.payload
        },
        setAuthorization(state, action:PayloadAction<boolean>){
            state.isAuth= action.payload
        }
    },
})


export default authSlice.reducer; 