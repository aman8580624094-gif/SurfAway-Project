import { createSlice } from "@reduxjs/toolkit";
// step 1: create the slice
export const newUserSlice = createSlice({
  name: "users",
  initialState:{
    users : [],
    userDetails: {},
  },
  //functions to update the state or actions
  reducers:{
    setUsers : (state , action)=>{
        state.users = action.payload
    },
    setUserDetails:(state , action)=>{
        state.userDetails = action.payload
    }
  }
});
export const {
    setUsers,
    setUserDetails
} = newUserSlice.actions
export default newUserSlice.reducer