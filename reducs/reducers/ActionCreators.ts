
import axios from "axios";
import { IEmployee } from "../../models/Employee";
import { employeeSlice } from "./EmployeeSlice";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getEmployees = createAsyncThunk(
    'employees/getAll',
    async (_, thunkApi)=>{
        try {
            const response = await axios.get<IEmployee[]>("https://iis.bsuir.by/api/v1/employees/all")
            return response.data
        } catch (e){
            return thunkApi.rejectWithValue("Не удалось загрузить преподавателей")
        }
    }
)