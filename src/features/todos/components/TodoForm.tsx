import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { create } from "../todoSlice";

const TodoForm: FC = () => {
  const [titleInput, setTitleInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");
  const dispatch = useAppDispatch();

  const handleOnCreate = () => {
    const activeElement = document.activeElement;
    // activeElement.blur();

    try {
      if (!titleInput || !bodyInput) {
        throw new Error("タイトルと本文の両方を入力してください");
      }
      dispatch(create({ title: titleInput, body: bodyInput }));
      setTitleInput("");
      setBodyInput("");
    } catch (Error) {
      alert(Error);
    }
  };

  return (
    <div id="todoForm">
      <div>
        <label>
          <span>タイトル：</span>
          <input
            type="text"
            onChange={(e) => setTitleInput(e.target.value)}
            value={titleInput}
          ></input>
        </label>
        <label>
          <span>本文：</span>
          <input
            type="text"
            onChange={(e) => setBodyInput(e.target.value)}
            value={bodyInput}
          ></input>
        </label>
      </div>
      <button id="btnSubmit" onClick={handleOnCreate}>
        作成
      </button>
    </div>
  );
};

export default TodoForm;
