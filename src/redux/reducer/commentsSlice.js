import { createSlice } from "@reduxjs/toolkit";
export const newCommentSlice = createSlice({
    name : "comment",
    initialState:{
        comments:[],
        commentDetail:{}
    },
    reducers:{
        setComments:(state , action)=>{
        state.comments = action.payload
        },
        setCommentDetail:(state , action)=>{
            state.commentDetail = action.payload
        }
    }
});
export const {
    setComments,
    setCommentDetail
}= newCommentSlice.actions
export default newCommentSlice.reducer