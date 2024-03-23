import { toast } from 'react-hot-toast'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../helpers/axiosinstance.js'

const initialState = {
  stuIsLogin: localStorage.getItem('studentIslogged') || false,
  role: localStorage.getItem('role') || '',
  userData: localStorage.getItem('data') || {}
}

export const createStudentAccount = createAsyncThunk(
  '/student/register/',
  async data => {
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
  }
)

export const loginStudentAccount = createAsyncThunk(
  '/student/login/',
  async data => {
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
  }
)

export const logoutStudentAccount = createAsyncThunk(
  '/student/logout',
  async () => {
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
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginStudentAccount.fulfilled, (state, action) => {
        localStorage.setItem('userData', JSON.stringify(action?.payload?.user))
        localStorage.setItem('stuIsLogin', true)
        // localStorage.setItem('role', action?.payload?.user?.role)
        state.studentIslogged = true
        state.data = action?.payload
        state.role = action?.payload
      })

      .addCase(logoutStudentAccount.fulfilled, state => {
        localStorage.clear()
        state.data = {}
        state.studentIslogged = false
        state.role = ''
      })
  }
})

export default authSlice.reducer
