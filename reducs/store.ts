import { combineReducers, configureStore } from "@reduxjs/toolkit";

import employeeReducer from './reducers/EmployeeSlice'
import authReducer from './reducers/AuthorizationSlice'
import locationReducer from './reducers/LocationSlice'

const rootReducer = combineReducers({
    employeeReducer,
    authReducer,
    locationReducer
})

export const setupStore = ()=>{
    return configureStore({
        reducer:rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export  type AppDispatch = AppStore['dispatch']