import {
  createSlice,
  createAsyncThunk,
  SerializedError,
} from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { TodoId, Todo, TodoInput, ViewFlag } from "./types";
import { v4 as uuid4 } from "uuid";
import getCurrentDateTime from "./utils/getCurrentDateTime";
import { setLocalStorageTodos } from "./localStorage/localStorage";
import { fetchTodos } from "./api/fetchTodos";

export type TodoState = {
  todos: Todo[];
  viewflag: ViewFlag;
  isFetching: boolean;
  error: null | SerializedError;
  showComfirmModal: boolean;
  showUpdateModal: boolean;
  selectedTodoId: TodoId;
};

const initialState: TodoState = {
  todos: [],
  viewflag: "all",
  isFetching: false,
  error: null,
  showUpdateModal: false,
  showComfirmModal: false,
  selectedTodoId: "",
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
      setLocalStorageTodos(state.todos);
    },
    update: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(
        (todo) => action.payload.id === todo.id
      );
      state.todos[index] = action.payload;
      setLocalStorageTodos(state.todos);
    },
    remove: (state, action: PayloadAction<TodoId>) => {
      const index = state.todos.findIndex((todo) => action.payload === todo.id);
      state.todos[index].deletedAt = getCurrentDateTime();
      setLocalStorageTodos(state.todos);
    },
    restore: (state, action: PayloadAction<TodoId>) => {
      const index = state.todos.findIndex((todo) => action.payload === todo.id);
      state.todos[index].deletedAt = "";
      setLocalStorageTodos(state.todos);
    },
    changeViewFlag: (state, action: PayloadAction<ViewFlag>) => {
      state.viewflag = action.payload;
    },
    toggleShowConfirmModal: (state) => {
      console.log("toggleDeleteModal");
      state.showComfirmModal = !state.showComfirmModal;
    },
    toggleShowUpdateModal: (state) => {
      console.log("toggleUpdateModal");
      state.showUpdateModal = !state.showUpdateModal;
    },
    setSelectedTodId: (state, action: PayloadAction<TodoId>) => {
      console.log("setSelectedTodId");
      state.selectedTodoId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosAsync.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(
        fetchTodosAsync.fulfilled,
        (state, action: PayloadAction<Todo[]>) => {
          state.isFetching = false;
          state.error = null;
          state.todos = action.payload;
        }
      )
      .addCase(fetchTodosAsync.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error;
      });
  },
});

export const fetchTodosAsync = createAsyncThunk<Todo[]>(
  `${todoSlice.name}/fetchTodosAsync`,
  async () => {
    const response = await fetchTodos();
    return response.data;
  }
);

export const {
  create,
  update,
  remove,
  restore,
  changeViewFlag,
  toggleShowConfirmModal,
  toggleShowUpdateModal,
  setSelectedTodId,
} = todoSlice.actions;
export default todoSlice.reducer;
