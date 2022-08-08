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
    reducers:{
        employeeGetting(state){
            state.isLoading=true;
        },
        employeeGettingSuccess(state, action: PayloadAction<IEmployee[]>){
            state.isLoading=false;
            state.Error = '';
            state.employees = action.payload
        },
        employeeGettingError(state, action: PayloadAction<string>){
            state.isLoading=false;
            state.Error = action.payload
        }
    }
})

export default employeeSlice.reducer;