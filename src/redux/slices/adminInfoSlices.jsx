import axiosInstance from '../../helpers/axiosinstance.js'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
  data:
    localStorage.getItem('Infodata') != undefined
      ? JSON.parse(localStorage.getItem('Infodata'))
      : {}
}

export const createAdmininfo = createAsyncThunk(    
  '/admin/login',
  async data => {
    try {
      
      const res = axiosInstance.post('/admin/me/details', data)

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
    builder.addCase(createAdmininfo.fulfilled, (state, action) => {
      console.log('state', state)
      console.log('action', action)
      state.data = action?.payload?.adminDetails

      localStorage.setItem('Infodata', JSON.stringify(action?.payload?.adminDetails))
      console.log('DATA__',state.data)

      // localStorage.setItem('adminIslogin', true)
      // // localStorage.setItem('role', action?.payload?.admin?.role)
    })
  }
})
export default adminInfoSlice.reducer
// const adminInfoSlice = createSlice({
//   name: 'adminInfo',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder.addCase(createAdmininfo.fulfilled, (state, action) => {
//       localStorage.setItem(
//         'data',
//         JSON.stringify(action?.payload?.adminDetails)
//       )
//       console.log('data from admininfoSlice:>>', data)
//       state.data = action?.payload?.adminDetails
//     })
//   }
// })
// export default adminInfoSlice.reducer
