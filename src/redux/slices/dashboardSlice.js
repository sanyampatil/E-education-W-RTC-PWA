import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import axiosInstance from '../../helpers/axiosinstance'
import { BsCloudFog } from 'react-icons/bs'

const initialState = {
  AllStudentData:
    localStorage.getItem('AllStudentData') != undefined
      ? JSON.parse(localStorage.getItem('AllStudentData'))
      : {},
  // AdminAllDout: [],
  // data: ''
  ScheduleData:
    localStorage.getItem('ScheduleData') != undefined
      ? JSON.parse(localStorage.getItem('ScheduleData'))
      : {}
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

// AdminCreateSchedule

export const AdminCreateSchedule = createAsyncThunk(
  '/admin-dashboard/create-schedule',
  async data => {
    console.log('jbffbj')
    try {
      const config = {
        headers: {
          'content-Type': 'application/json'
        }
      }

      const res = axiosInstance.post(
        '/admin-dashboard/create-schedule',
        data,
        config
      )
      toast.promise(res, {
        loading: 'Wait! create schedule',

        success: data => {
          return data?.data?.message
        },
        error: 'Failed to send Doubt'
      })
      console.log('|classrommm', data)
      return (await res).data
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }
)

// /all-schedule

export const fetchAllSchedule = createAsyncThunk(
  '/admin-dashboard/all-schedule',
  async () => {
    try {
      const res = axiosInstance.get('/admin-dashboard/all-schedule')

      console.log('aalo')
      toast.promise(res, {
        loading: 'Wait! to load schedule',

        success: data => {
          return data?.data?.massege
        },
        error: 'Failed to load your doubts'
      })
      return (await res).data
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }
)

export const fetchAllAdmins = createAsyncThunk(
  '/admin-dashboard/all-schedule',
  async () => {
    try {
      const res = axiosInstance.get('/admin-dashboard/all-admins')

      console.log('aalo')
      toast.promise(res, {
        loading: 'Wait! to load admins ',

        success: data => {
          return data?.data?.massege
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
        localStorage.setItem(
          'AllStudentData',
          JSON.stringify(action?.payload?.student)
        )

        state.AllStudentData = action?.payload?.student
        console.log('adadaa', state.AllStudentData)
      })

      .addCase(fetchAllSchedule.fulfilled, (state, action) => {
        localStorage.setItem(
          'ScheduleData',
          JSON.stringify(action?.payload?.allschedule)
        )

        state.ScheduleData = action?.payload?.allschedule

        console.log('adadaa', state.ScheduleData)
      })
  }
})

export default dashboardSlice.reducer
