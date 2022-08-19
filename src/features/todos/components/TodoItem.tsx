import { FC } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { Todo, TodoUpdate } from "../types";
import { update, remove } from "../todoSlice";
import getCurrentDateTime from "../utils/getCurrentDateTime";

type Props = {
  key: number;
  todo: Todo;
};

const TodoItem: FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const handleOnClickUpdate = () => {
    console.log(todo.title);
    dispatch(update({...todo, updatedAt: getCurrentDateTime()}));
  };

  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.body}</td>
      <td>{todo.status}</td>
      <td>{todo.createdAt}</td>
      <td>{todo.updatedAt}</td>
      <td>{todo.deletedAt}</td>
      <td>
        <button onClick={handleOnClickUpdate}>更新</button>
      </td>
      <td>
        <button onClick={() => dispatch(remove(todo.id))}>削除</button>
      </td>
    </tr>
  );
};

export default TodoItem;
