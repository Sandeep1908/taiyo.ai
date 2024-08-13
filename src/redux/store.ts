import { configureStore } from "@reduxjs/toolkit";
import ContactReducer from '../redux/features/contact/contactSlice'


export const store= configureStore({
    reducer:{
       contacts:ContactReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch
export type AppStore = typeof store