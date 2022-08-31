import React, { FC, useState } from "react";
import styles from "./index.module.css";
import { toggleShowUpdateModal, update } from "../../../todoSlice";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import getCurrentDateTime from "../../../utils/getCurrentDateTime";
import {TodoStatus} from '../../../types';

const UpdateModal: FC = () => {
  const dispatch = useAppDispatch();
  const todoId = useAppSelector((state) => state.todos.selectedTodoId);
  const index = useAppSelector((state) =>
    state.todos.todos.findIndex((todo) => todo.id === todoId)
  );
  const todo = useAppSelector((state) => state.todos.todos[index]);

  const [newTitle, setNewTitle] = useState(todo.title);
  const [newBody, setNewBody] = useState(todo.body);
  const [newStatus, setNewStatus] = useState(todo.status);

  const onChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStatus = e.target.value as TodoStatus;
    setNewStatus(selectedStatus);
  };

  const onClickOK = () => {
    dispatch(
      update({
        ...todo,
        title: newTitle,
        body: newBody,
        status: newStatus,
        updatedAt: getCurrentDateTime(),
      })
    );
    dispatch(toggleShowUpdateModal());
  };
  return (
    <div className={styles.modalWindow}>
      <p>{"更新しますか？"}</p>
      <label>
        <span>タイトル：</span>
        <input
          className="inputBox"
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        ></input>
      </label>
      <label>
        <span>本文：</span>
        <input
          className="inputBox"
          type="text"
          value={newBody}
          onChange={(e) => setNewBody(e.target.value)}
        ></input>
      </label>
      <label>
        <span>ステータス：</span>

        <select
          className="selectList"
          name="viewFlag"
          defaultValue={newStatus}
          onChange={(e)=>onChangeStatus(e)}
        >
          <option value={"waiting"}>未着手</option>
          <option value={"working"}>着手中</option>
          <option value={"pending"}>保留中</option>
          <option value={"discontinued"}>中止</option>
          <option value={"completed"}>完了</option>
        </select>
      </label>
      <div>
        <button onClick={() => dispatch(toggleShowUpdateModal())}>
          いいえ
        </button>
        <button onClick={onClickOK}>更新</button>
      </div>
    </div>
  );
};

export default UpdateModal;
