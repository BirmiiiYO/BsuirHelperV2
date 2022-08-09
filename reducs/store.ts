import { combineReducers, configureStore } from "@reduxjs/toolkit";

import employeeReducer from './reducers/EmployeeSlice'
import UrlReducer from "./reducers/UrlSlice"


const rootReducer = combineReducers({
    employeeReducer,
    UrlReducer
})

export const setupStore = ()=>{
    return configureStore({
        reducer:rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export  type AppDispatch = AppStore['dispatch']