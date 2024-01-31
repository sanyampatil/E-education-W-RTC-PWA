import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'
import axiosInstance from '../../helpers/axiosinstance'
import axios from 'axios'

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') || false,
  role: localStorage.getItem('role') || '',
  data: localStorage.getItem('data') || {}  
}

export const createAccount = createAsyncThunk('/signup', async data => {
  console.log("fromdata from authSlice :",data)
  try {
    const response = await axiosInstance.post(
      'http://localhost:7861/api/v1/admin/register',
      data
    )
    try { 
      toast.promise(response, {
        loading: 'Wait to register',  
        success: data => {
          return data.data.msg
        },
        error: 'failed to create account'
      })
    } catch (error) {}
  } catch (error) {}
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
})

export default authSlice.reducer
