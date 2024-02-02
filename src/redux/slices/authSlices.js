import { toast } from 'react-hot-toast'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../helpers/axiosinstance.js'
const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') || false,
  role: localStorage.getItem('role') || "",
  data: localStorage.getItem('data') || {}
};

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

export const logoutAccount = createAsyncThunk('/logout', async () => {
  try {
     const config = {
      headers: {
        'content-Type': 'application/json'
      }
    }

    const res = axiosInstance.get('/logout')
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
      .addCase(loginAccount.fulfilled, (state, action) => {
        localStorage.setItem('data', JSON.stringify(action?.payload?.user))
        localStorage.setItem('isLoggedIn', true)
        localStorage.setItem('role', action?.payload?.user?.role)
        state.isLoggedIn = true
        state.data = action?.payload?.user
        state.role = action?.payload?.user?.role
      })

      .addCase(logoutAccount.fulfilled, state => {
        localStorage.clear()
        state.data = {}
        state.isLoggedIn = false
        state.role = ''
      })
  }
})

export default authSlice.reducer
