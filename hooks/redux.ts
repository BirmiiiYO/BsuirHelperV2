import { RootState } from '../reducs/store';
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch } from "../reducs/store";
import { useSelector } from 'react-redux';

export const useAppDispatch =()=> useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;