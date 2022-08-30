import { type FC , useEffect} from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import TodoForm from "./TodoForm";
import TodoList from './TodoList'
import { fetchTodosAsync } from "../todoSlice";

const TodoContainer: FC = () => {
  const isFetching = useAppSelector((state) => state.todos.isFetching)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, []);
  
  if (isFetching) return (<div style={{textAlign: 'left'}}>loading...</div>);
 

  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default TodoContainer;
