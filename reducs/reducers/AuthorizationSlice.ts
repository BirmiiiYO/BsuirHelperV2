import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface authState {
    authActive:boolean

}

const initialState:authState = {
   authActive: false
}

export const authSlice = createSlice({
    name:'authorization',
    initialState,
    reducers:{
        setActiveAuth(state, action: PayloadAction<boolean>){
            state.authActive= action.payload
        }
    },
})


export default authSlice.reducer; 