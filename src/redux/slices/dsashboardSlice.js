import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import axiosInstance from '../../helpers/axiosinstance'
import { BsCloudFog } from 'react-icons/bs'

const initialState = {
  studentData: []
  // AdminAllDout: [],
  // data: ''
}

export const AdminfetchAllStudent = createAsyncThunk(
  '/admin-dashboard',
  async () => {
    try {
      const res = axiosInstance.get('/admin-dashboard/all-student')

      console.log('aalo')
      toast.promise(res, {
        loading: 'Wait! to load your doubts',

        success: data => {
          return data?.data?.message
        },
        error: 'Failed to load your doubts'
      })
      return (await res).data 
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }
)

const dashboardSlice = createSlice({
  name: 'Doubt',

  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(AdminfetchAllStudent.fulfilled, (state, action) => {
      localStorage.setItem(
        'studentData',
        JSON.stringify(action?.payload?.student)
      )
      state.studentData = action?.payload?.student
    })
  }
})

export default dashboardSlice.reducer
