import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { TodoId, Todo, TodoInput } from "../../app/types";
import { v4 as uuid4 } from "uuid";
import getCurrentDateTime from "./utils/getCurrentDateTime";

export type TodoState = {
  todos: Todo[];
};

const initialState: TodoState = {
  todos: [
    {
      id: uuid4(),
      title: "aaa",
      body: "aaa",
      status: "pending",
      createdAt: getCurrentDateTime(),
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
      console.log("hey you", action.payload.title, action.payload.body);
      const newTodo: Todo = {
        id: uuid4(),
        title: action.payload.title,
        body: action.payload.body,
        status: "waiting",
        createdAt: getCurrentDateTime(),
        updatedAt: "",
        deletedAt: "",
      };
      state.todos.push(newTodo);
    },
    update: (state) => {},
    restore: (state) => {},
  },
});

export const { create, update, restore } = todoSlice.actions;
export default todoSlice.reducer;
