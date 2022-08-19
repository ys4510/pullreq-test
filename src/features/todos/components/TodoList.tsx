import { FC } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { update, remove } from "../todoSlice";
import TodoItem from "./TodoItem";

const TodoList: FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  return (
    <div>
      <hr />
      <label>
        <span>閲覧フラグ：</span>
        <select name="viewFlag" defaultValue={"explanation"}>
          <option value={"explanation"} disabled>
            -- 選択してください --
          </option>
          <option value={"all"}>全て（削除済みを除く）</option>
          <option value={"updated"}>更新済み（削除済みを除く）</option>
          <option value={"deleted"}>削除済み</option>
        </select>
      </label>
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
