import  { FC } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { update , remove} from "../todoSlice";
import TodoItem from "./TodoItem";

const TodoList: FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  return (
    <div>
      <hr />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>本文</th>
            <th>ステータス</th>
            <th>作成日時</th>
            <th>更新日時</th>
            <th>削除日時</th>
            <th>更新ボタン</th>
            <th>削除ボタン</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
           <TodoItem key={index} todo={todo} />
          ))}

        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
