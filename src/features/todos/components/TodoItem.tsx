import { FC } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { Todo, TodoUpdate } from "../types";
import { update, remove, restore } from "../todoSlice";
import getCurrentDateTime from "../utils/getCurrentDateTime";

type Props = {
  key: number;
  todo: Todo;
};

const TodoItem: FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const handleOnClickUpdate = () => {
    dispatch(update({...todo, updatedAt: getCurrentDateTime()}));
  };

  const handleOnClickDelete = () => {
    dispatch(remove(todo.id));
  }
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.body}</td>
      <td>{todo.status}</td>
      <td>{todo.createdAt}</td>
      <td>{todo.updatedAt ? todo.updatedAt : "なし" }</td>
      <td>{todo.deletedAt? todo.deletedAt : "なし" }</td>
      <td>
        <button onClick={handleOnClickUpdate} disabled={todo.deletedAt ? true : false}>更新</button>
      </td>
      <td>{
        todo.deletedAt 
        ?
        <button onClick={() => dispatch(restore(todo.id))}>削除取消</button>
        :
        <button onClick={() => dispatch(remove(todo.id))}>削除</button>

        }
      </td>
    </tr>
  );
};

export default TodoItem;
