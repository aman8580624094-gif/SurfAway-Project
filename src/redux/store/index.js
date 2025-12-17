import { configureStore } from "@reduxjs/toolkit";
import { newUserSlice } from "../reducer/newUserSlice";
import { postSlice } from "../reducer/userPostSlice";
import { todoSlice } from "../reducer/userToDoSlice";
import { newCommentSlice } from "../reducer/commentsSlice";
import { photoSlice } from "../reducer/photosSlice";
import { authSlice } from "../reducer/authSlice";

const Store = configureStore({
  reducer: {
    users: newUserSlice.reducer,
    posts: postSlice.reducer,
    todo: todoSlice.reducer,
    comment: newCommentSlice.reducer,
    photos: photoSlice.reducer,
    auth: authSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default Store;
