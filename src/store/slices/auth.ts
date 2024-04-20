import { createSlice } from '@reduxjs/toolkit'
import { authState } from '../../utils/interfaces'
import { produce } from 'immer'


const initialState: authState = {
    email: '',
    token: 'ads'
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            const updatedState = produce(state, (draftState: authState) => {
                draftState.email = action.payload.email
                draftState.token = action.payload.token
            })
            return updatedState
        },
    }
})

export const { loginUser } = authSlice.actions