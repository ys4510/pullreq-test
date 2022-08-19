import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { TodoId, Todo, TodoInput } from "./types";
import { v4 as uuid4 } from "uuid";
import getCurrentDateTime from "./utils/getCurrentDateTime";

export type TodoState = {
  todos: Todo[];
};

const initialState: TodoState = {
  todos: [
    {
      id: uuid4(),
      title: "AAA",
      body: "AAAAAAAAA",
      status: "waiting",
      createdAt: getCurrentDateTime(),
      updatedAt: "",
      deletedAt: "",
    },
    {
      id: uuid4(),
      title: "BBB",
      body: "BBBBBBB",
      status: "waiting",
      createdAt: getCurrentDateTime(),
      updatedAt: "",
      deletedAt: "",
    },
    {
      id: uuid4(),
      title: "CCC",
      body: "CCCCCCC",
      status: "waiting",
      createdAt: getCurrentDateTime(),
      updatedAt: "",
      deletedAt: "",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<TodoInput>) => {
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
    update: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(todo => action.payload.id === todo.id)
      state.todos[index] = action.payload;
    },
    remove: (state, action: PayloadAction<TodoId>) => {
      console.log("remove", action.payload);
      console.log(state.todos);
    },
    restore: (state) => {},
  },
});

export const { create, update, remove, restore } = todoSlice.actions;
export default todoSlice.reducer;
