import { combineReducers, configureStore } from "@reduxjs/toolkit";

import employeeReducer from './reducers/EmployeeSlice'

const rootReducer = combineReducers({
    employeeReducer
})

export const setupStore = ()=>{
    return configureStore({
        reducer:rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export  type AppDispatch = AppStore['dispatch']