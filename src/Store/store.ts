import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './userDataSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
export const store = configureStore({
    reducer: {
        userData: usersSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;