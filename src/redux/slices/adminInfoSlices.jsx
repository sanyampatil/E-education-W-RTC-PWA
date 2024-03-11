import axiosInstance from '../../helpers/axiosinstance.js'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
  AdminInfoData: {}
    // localStorage.getItem('Infodata') != undefined
    //   ? JSON.parse(localStorage.getItem('Infodata'))
    //   : {}
}

export const createAdmininfo = createAsyncThunk('/admin/login', async data => {



  try {
    const config = {
      headers: {
        'content-Type': 'application/json'
      }
    }
    const res = axiosInstance.post('/admin/me/details', data,config)

    toast.promise(res, {
      loading: 'Wait! creating',
      success: data => {
        return data?.data?.message
      },
      error: 'Failed to create'
    })
    console.log('data:>', data)

    return (await res).data
  } catch (error) {
    toast.error(error?.response?.data?.message)
  }
})

export const GetAdminInfoData = createAsyncThunk(
  '/admin/profile',
  async data => {
    try {
      const res = axiosInstance.get(`/admin/me/profile/${data}`)

      toast.promise(res, {
        loading: 'Wait! creating',
        success: data => {
          return data?.data?.message
        },
        error: 'Failed to create'
      })
      console.log('data:>', data)

      return (await res).data
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }
)

const adminInfoSlice = createSlice({
  name: 'infoAdmin',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(GetAdminInfoData.fulfilled, (state, action) => {
      // console.log('state', state)
      console.log('action', action)
      state.AdminInfoData = action?.payload?.adminDetails


      localStorage.setItem(
        'Infodata',
        JSON.stringify(action?.payload?.adminDetails
)
      )
      console.log('DATA__', state.data)
    })
  }
})
export default adminInfoSlice.reducer
