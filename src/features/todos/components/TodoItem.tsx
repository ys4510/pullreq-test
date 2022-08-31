import { FC } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { Todo, TodoId } from "../types";
import {
  toggleShowConfirmModal,
  toggleShowUpdateModal,
  setSelectedTodId,
  changeClickedButton,
} from "../todoSlice";
import getTodoStatusValue from '../utils/getTodoStatusValue'
type Props = {
  key: number;
  todo: Todo;
};

const TodoItem: FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const handleOnClickUpdate = () => {
    dispatch(setSelectedTodId(todo.id));
    dispatch(toggleShowUpdateModal());
    dispatch(changeClickedButton("update"));
  };

  const handleOnClickDelete = (id: TodoId) => {
    dispatch(setSelectedTodId(todo.id));
    dispatch(toggleShowConfirmModal());
    dispatch(changeClickedButton("delete"));
  };

  const handleOnClickRestore = (id: TodoId) => {
    dispatch(setSelectedTodId(todo.id));
    dispatch(toggleShowConfirmModal());
    dispatch(changeClickedButton("restore"));
  };

  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.body}</td>
      <td>{getTodoStatusValue(todo.status)}</td>
      <td>{todo.createdAt}</td>
      <td>{todo.updatedAt ? todo.updatedAt : "なし"}</td>
      <td>{todo.deletedAt ? todo.deletedAt : "なし"}</td>
      <td>
        <button
          onClick={handleOnClickUpdate}
          disabled={todo.deletedAt ? true : false}
        >
          更新
        </button>
      </td>
      <td>
        {todo.deletedAt ? (
          <button onClick={() => handleOnClickRestore(todo.id)}>
            削除取消
          </button>
        ) : (
          <button onClick={() => handleOnClickDelete(todo.id)}>削除</button>
        )}
      </td>
    </tr>
  );
};

export default TodoItem;
