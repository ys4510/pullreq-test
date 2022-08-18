import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { create } from "../todoSlice"; 

const TodoForm: FC = () => {
  const [titleInput, setTitleInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");
  const dispatch = useAppDispatch();

  const handleOnCreate = () => {
    dispatch(create({title:titleInput, body: bodyInput}));
    
  };

  return (
    <div id="todoForm">
      <div>
        
      <label>
        <span>タイトル：</span>
        <input
          type="text"
          onChange={(e) => setTitleInput(e.target.value)}
        ></input>
      </label>
      <label>
        <span>本文：</span>
        <input
          type="text"
          onChange={(e) => setBodyInput(e.target.value)}
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
