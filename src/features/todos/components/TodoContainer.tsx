import { type FC, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { fetchTodosAsync } from "../todoSlice";
import BaseModal from "./modals/BaseModal";
import DeleteModal from "./modals/DeleteModal";

const TodoContainer: FC = () => {
  const isFetching = useAppSelector((state) => state.todos.isFetching);
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, []);

  if (isFetching) return <div style={{ textAlign: "left" }}>loading...</div>;

  return (
    <>
      <BaseModal isModalOpen={isModalOpen}>
        <DeleteModal />
      </BaseModal>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default TodoContainer;
