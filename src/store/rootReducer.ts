import { combineReducers } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { authSlice } from "./slices/auth"
import { authAPI } from "../services/auth"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    [authAPI.reducerPath]: authAPI.reducer
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)



