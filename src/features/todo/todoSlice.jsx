import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random(),
        text: action.payload,
      };
      state.push(todo);
    },
    removeToDo: (state, action) => {
      state = state.filter((e) => e.id !== action.payload.id);
      return state;
    },
    removeAllToDo: (state) => {
      state = [];
      return state;
    },
  },
});

export const { addTodo, removeToDo, removeAllToDo } = todoSlice.actions;

export default todoSlice.reducer;
