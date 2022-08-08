import { AppDispatch } from "../store";
import axios from "axios";
import { IEmployee } from "../../models/Employee";
import { employeeSlice } from "./EmployeeSlice";

export const getEmployee =()=> async (dispatch:AppDispatch)=>{
    try
    {
        dispatch(employeeSlice.actions.employeeGetting())
        const response = await axios.get<IEmployee[]>("https://iis.bsuir.by/api/v1/employees/all")
        dispatch(employeeSlice.actions.employeeGettingSuccess(response.data))
    } catch (e){
        dispatch(employeeSlice.actions.employeeGettingError(e.message))
    }
}