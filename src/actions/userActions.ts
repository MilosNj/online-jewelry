import axios, { AxiosError } from 'axios'
import { Dispatch } from 'react'

import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT
} from '../constants/userConstants'

export const login =
    (email: string, password: string) => async (dispatch: Dispatch<any>) => {
        try {
            dispatch({
                type: USER_LOGIN_REQUEST
            })

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const { data } = await axios.post(
                '/users/signin',
                { email, password },
                config
            )

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data
            })

            localStorage.setItem('userInfo', JSON.stringify(data))
        } catch (error) {
            const err = error as AxiosError

            dispatch({ type: USER_LOGIN_FAIL, payload: err.message })
        }
    }

export const logout = () => async (dispatch: Dispatch<any>) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
}
