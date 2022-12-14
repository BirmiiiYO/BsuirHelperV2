import { ILocation } from './../../models/Location';
import { fetchLocation} from './ActionCreators';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface LocationState {
    locations:ILocation[];
    isLoading:boolean;
    Error:string;
    activeBuild?:number | null;
}

const initialState:LocationState = {
    locations:[],
    isLoading: false,
    Error:'',
    activeBuild:null
}

export const locationSlice = createSlice({
    name:'location',
    initialState,
    reducers:{  },
    extraReducers:{
        [fetchLocation.pending.type]:(state)=>{
            state.isLoading = true;
        },
        [fetchLocation.fulfilled.type]:(state,  action: PayloadAction<ILocation[]>)=>{
            state.isLoading = false;
            state.Error = '';
            state.locations = action.payload
        },
        [fetchLocation.rejected.type]:(state, action: PayloadAction<string>)=>{
            state.isLoading = false;
            state.Error = action.payload
        },
    }
})

export default locationSlice.reducer;