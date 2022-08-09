import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface UrlState {
    activeUrl:string

}

const initialState:UrlState = {
   activeUrl:''
}

export const urlSlice = createSlice({
    name:'url',
    initialState,
    reducers:{
        setActiveUrl(state, action: PayloadAction<string>){
            state.activeUrl= action.payload
        }
    },
})

export default urlSlice.reducer;