import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import { authAPI } from '../services/auth'
import { persistedReducer } from './rootReducer'

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(authAPI.middleware)
})
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch