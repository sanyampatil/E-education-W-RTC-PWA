import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import axiosInstance from '../../helpers/axiosinstance'
import { BsCloudFog } from 'react-icons/bs'

const initialState = {
  AllStudentData:
    localStorage.getItem('AllStudentData') != undefined
      ? JSON.parse(localStorage.getItem('AllStudentData'))
      : {}
  // AdminAllDout: [],
  // data: ''
}

export const AdminfetchAllStudent = createAsyncThunk(
  '/admin-dashboard/view-Student',
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
    builder

      .addCase(AdminfetchAllStudent.fulfilled, (state, action) => {
        localStorage.setItem('AllStudentData', JSON.stringify(action?.payload?.student))
        
        state.AllStudentData = action?.payload?.student
        console.log("adadaa",state.AllStudentData)
      })

      
  }
})

export default dashboardSlice.reducer
