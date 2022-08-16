import { GetLocation, ILocation } from './../../models/Location';
import axios from "axios";
import { IEmployee } from "../../models/Employee";
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

export const fetchLocation = createAsyncThunk(
    'locations/getAll',
    async (_, thunkApi)=>{
        try {
            const response = await axios.get<GetLocation>("http://localhost:3004/locations")
            return response.data
        } catch (e){
            return thunkApi.rejectWithValue("Не удалось загрузить данные")
        }
    }
)