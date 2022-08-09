import { getEmployees } from './ActionCreators';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEmployee } from "../../models/Employee";


interface EmployeeState {
    employees:IEmployee[];
    isLoading:boolean;
    Error:string;
}

const initialState:EmployeeState = {
    employees:[],
    isLoading: false,
    Error:'',
}

export const employeeSlice = createSlice({
    name:'employee',
    initialState,
    reducers:{},
    extraReducers:{
        [getEmployees.pending.type]:(state)=>{
            state.isLoading = true;
        },
        [getEmployees.fulfilled.type]:(state,  action: PayloadAction<IEmployee[]>)=>{
            state.isLoading = false;
            state.Error = '';
            state.employees = action.payload
        },
        [getEmployees.rejected.type]:(state, action: PayloadAction<string>)=>{
            state.isLoading = false;
            state.Error = action.payload
        },
    }
})

export default employeeSlice.reducer;