import { createSlice } from "@reduxjs/toolkit";

export const registerSlices = createSlice({
  name: "registerSlice",
  initialState:{
   admineRegister:true,
   studentRegister:false
  },
  reducers: {
    admineRegisterReducers: (state) => {
      return state.admineRegister = true;
    }, 

    studentRegister: (state) => {
     return (state = state);
   }
 },
});

export const { admineRegisterReducers,studentRegister } = registerSlices.actions;
export default registerSlices.reducer; 