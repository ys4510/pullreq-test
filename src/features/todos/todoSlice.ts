import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { TodoId, Todo } from "../../app/types";

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
    create: (state) => {},
    update: (state) => {},
    restore: (state) => {},
  },
});

export const {create, update, restore } = todoSlice.actions;
export default todoSlice.reducer;