import { type FC, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { fetchTodosAsync } from "../todoSlice";
import BaseModal from "./modals/BaseModal";
import ViewFlagSelector from "./ViewFlagSelector";

const TodoContainer: FC = () => {
  const isFetching = useAppSelector((state) => state.todos.isFetching);
  const showComfirmModal = useAppSelector(
    (state) => state.todos.showComfirmModal
  );
  const showUpdateModal = useAppSelector(
    (state) => state.todos.showUpdateModal
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, []);

  if (isFetching)
    return (
      <div
        style={{
          textAlign: "left",
          fontFamily: "cursive",
          fontSize: "2rem",
          margin: "30px",
        }}
      >
        loading...
      </div>
    );

  return (
    <>
      {showComfirmModal || showUpdateModal ? <BaseModal /> : ""}
      <h2 className="appName">To Do App</h2>
      <TodoForm />
      <ViewFlagSelector />
      <TodoList />
    </>
  );
};

export default TodoContainer;
