import { createSlice } from "@reduxjs/toolkit";

export const photoSlice = createSlice({
  name: "photos",
  initialState: {
    photo: [],
    photoDetail: {},
  },
  reducers: {
    setPhoto: (state, action) => {
      state.photo = action.payload;
    },
    setPhotoDetail: (state, action) => {
      state.photoDetail = action.payload;
    },
  },
});
export const {
setPhoto,
setPhotoDetail
}=photoSlice.actions
export default photoSlice.reducer
