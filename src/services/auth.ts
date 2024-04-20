import { createApi } from '@reduxjs/toolkit/query/react'
import { AUTH_API_ROUTES } from '../utils/constants'
import { baseQuery } from './config/baseQuery'
import { LoginRequest, LoginResponse } from '../utils/interfaces'

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: baseQuery,
    endpoints: (build) => ({
        loginUser: build.mutation<LoginResponse, LoginRequest>({
            query: (data) => ({
                url: AUTH_API_ROUTES.LOGIN,
                method: 'POST',
                body: data,
            }),
            transformResponse: (response: LoginResponse) => response,
        }),
    }),
})

export const { useLoginUserMutation } = authAPI