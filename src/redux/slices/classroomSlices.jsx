import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import axiosInstance from '../../helpers/axiosinstance'

const initialState = {
  DoutData: '',
  data: ''
}

export const sendDout = createAsyncThunk('/fill-doubt', async data => {
  try {
    const config = {
      headers: {
        'content-Type': 'application/json'
      }
    }

    const res = axiosInstance.post('/admin/Doubt/ask-Dout', data, config)
    toast.promise(res, {
      loading: 'Wait! send your Doubt',

      success: data => {
        return data?.data?.message
      },
      error: 'Failed to send Doubt'
    })
    console.log("|classrommm", data)
    return (await res).data
  } catch (error) {
    toast.error(error?.response?.data?.message)
  }
})

const classroomSlices = createSlice({
  name: 'Doubt',

  initialState,
  reducers: {}
})

export default classroomSlices.reducer
