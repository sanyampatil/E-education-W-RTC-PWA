 import { toast } from 'react-hot-toast'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../helpers/axiosinstance.js'

const initialState = {
  adminIslogin: localStorage.getItem('adminIslogin') || false,
  role: localStorage.getItem('role') || '',
  data: localStorage.getItem('data') || {}
}

export const createStudentAccount = createAsyncThunk('/student/signup', async data => {
  try {
    const config = {
      headers: {
        'content-Type': 'application/json'
      }
    }

    const res = axiosInstance.post('/student/register', data, config)
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

export const loginStudentAccount = createAsyncThunk('/student/Login', async data => {
  try {
    const config = {
      headers: {
        'content-Type': 'application/json'
      }
    }

    const res = axiosInstance.post('/student/login', data, config)
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

export const logoutStudentAccount = createAsyncThunk('/student/logout', async () => {
  try {
    const config = {
      headers: {
        'content-Type': 'application/json'
      }
    }

    const res = axiosInstance.get('/student/logout')
    toast.promise(res, {
      loading: 'Wait! logout in progress...',
      success: data => {
        return data?.data?.message
      },
      error: 'Failed to log out'
    })
    return (await res).data
  } catch (error) {
    toast.error(error?.response?.data?.message)
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginStudentAccount.fulfilled, (state, action) => {
        localStorage.setItem('data', JSON.stringify(action?.payload?.user))
        localStorage.setItem('adminIslogin', true)
        localStorage.setItem('role', action?.payload?.user?.role)
        state.adminIslogin = true
        state.data = action?.payload?.user
        state.role = action?.payload?.user?.role
      })

      .addCase(logoutStudentAccount.fulfilled, state => {
        localStorage.clear()
        state.data = {}
        state.adminIslogin = false
        state.role = ''
      })
  }
})

export default authSlice.reducer
