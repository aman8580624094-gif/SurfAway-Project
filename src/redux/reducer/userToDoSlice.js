import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    todoDetails: {},
  },
  reducers: {
    setTodo: (state, action) => {
      state.todos = action.payload;
    },
    setToDoDetails: (state, action) => {
      state.todoDetails = action.payload;
    },
  },
});

export const { setTodo, setToDoDetails } = todoSlice.actions;
export default todoSlice.reducer;