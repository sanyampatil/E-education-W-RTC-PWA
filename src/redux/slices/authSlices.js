import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

import axiosInstance from '../../helpers/axiosinstance'
const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') || false,
  role: localStorage.getItem('role') || '',
  data:
    localStorage.getItem('data') != undefined
      ? JSON.parse(localStorage.getItem('data'))
      : {}
}

export const createAccount = createAsyncThunk('/signup', async data => {
  try {
    const config = {
      headers: {
        'content-Type': 'application/json'
      }
    }

    const res = axiosInstance.post('/register', data, config)
    toast.promise(res, {
      loading: 'Wait! creating your account',
      success: data => {
        return data?.data?.message
      },
      error: 'Failed to create account'
    })
    console.log(data)
    return (await res).data
  } catch (error) {
    toast.error(error?.response?.data?.message)
  }
})



export const loginAccount = createAsyncThunk('/login', async data => {
  try {
    const config = {
      headers: {
        'content-Type': 'application/json'
      }
    }

    const res = axiosInstance.post('/login', data, config)
    toast.promise(res, {
      loading: 'Wait! creating your account',
      success: data => {
        return data?.data?.message
      },
      error: 'Failed to login'
    })
    console.log(data)
    return (await res).data
  } catch (error) {
    toast.error(error?.response?.data?.message)
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
})

export default authSlice.reducer
