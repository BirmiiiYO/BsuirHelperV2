import { GetLocation, ILocation } from './../../models/Location';
import axios from 'axios';
import { IEmployee } from '../../models/Employee';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getEmployees = createAsyncThunk('employees/getAll', async (_, thunkApi) => {
  try {
    const response = await axios.get<IEmployee[]>(
      `${process.env.NEXT_PUBLIC_BSUIR_API_key}/employees/all`,
    );
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue('Не удалось загрузить преподавателей');
  }
});

export const fetchLocation = createAsyncThunk('locations/getAll', async (_, thunkApi) => {
  try {
    const response = await axios.get<GetLocation>(`${process.env.NEXT_PUBLIC_HOST_API}/locations`);
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue('Не удалось загрузить данные');
  }
});
