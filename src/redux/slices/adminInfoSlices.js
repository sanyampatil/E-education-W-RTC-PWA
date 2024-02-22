import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosinstance";
import toast from "react-hot-toast";

const initialState ={

}

export const createAdmininfo = createAsyncThunk('/admin-me', async (data) => {
 try {

   const res = axiosInstance.post('/me/details', data)

   toast.promise(res, {
     loading: 'Wait! creating your profile',
     success: data => { 
       return data?.data?.message
     },
     error: 'Failed to create profile'
   })
   console.log(data)
   return (await res).data
 } catch (error) {
   toast.error(error?.response?.data?.message)
 }
})
const adminInfoSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {}

})
export default adminInfoSlice.reducer
