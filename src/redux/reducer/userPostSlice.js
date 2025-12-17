import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    postDetails: {},
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPostDetails: (state, action) => {
      state.postDetails = action.payload;
    },
  },
});

export const { setPosts, setPostDetails } = postSlice.actions;
export default postSlice.reducer;
