import { FC } from "react";
import styles from "./index.module.css";
import { remove, toggleShowConfirmModal } from "../../../todoSlice";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";

const DeleteModal: FC = () => {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state)=> state.todos.selectedTodoId);
  console.log('id===', id)

  return (
    <div className={styles.modalWindow}>
      <p>{"削除しますか？"}</p>
      <div>
        <button onClick={() => dispatch(toggleShowConfirmModal())}>
          いいえ
        </button>
        <button onClick={()=> {
          dispatch(remove(id));
          dispatch(toggleShowConfirmModal());
        }}>削除</button>
      </div>
    </div>
  );
};

export default DeleteModal;
