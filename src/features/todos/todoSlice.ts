import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { TodoId, Todo, TodoInput } from "../../app/types";

export type TodoState = {
  todos: Todo[];
};

const initialState: TodoState = {
  todos: [
    {
      id: "123",
      title: "aaa",
      body: "aaa",
      status: "pending",
      createdAt: "",
      updatedAt: "",
      deletedAt: "",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<TodoInput>) => {
      console.log('hey you', action.payload.title, action.payload.body);
    },
    update: (state) => {},
    restore: (state) => {},
  },
});

export const { create, update, restore } = todoSlice.actions;
export default todoSlice.reducer;
