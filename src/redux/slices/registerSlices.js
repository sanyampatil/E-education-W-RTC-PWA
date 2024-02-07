import { createSlice } from "@reduxjs/toolkit";

export const registerSlices = createSlice({
  name: "registerSlice",
  initialState:{
   admineRegister:true,
   studentRegister:false
  },
  reducers: {
    admineRegister: (state) => {
      return (state = state);
    },

    studentRegister: (state) => {
     return (state = state);
   }
 },
});

export const { admineRegister,studentRegister } = registerSlices.actions;
export default registerSlices.reducer; 