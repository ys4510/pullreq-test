import { FC } from "react";
// import {  useAppDispatch } from "../../../app/hooks";
import TodoItem from "./TodoItem";
import { selectTodos } from "../utils/selectTodos";

const TodoList: FC = () => {
  const todos = selectTodos();

  return (
    <div>
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
          {todos.length ? (
            todos.map((todo, index) => <TodoItem key={index} todo={todo} />)
          ) : (
            <tr>
              <td colSpan={9}>{"No Data"}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
