import { FC } from "react";
import styles from "./index.module.css";
import { remove, restore, toggleShowConfirmModal } from "../../../todoSlice";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";

const ConfirmModal: FC = () => {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.todos.selectedTodoId);
  const btnType = useAppSelector((state) => state.todos.clickedButton);

  if (btnType === "delete") {
    return (
      <div className={styles.modalWindow}>
        <p>{"削除しますか？"}</p>
        <div>
          <button onClick={() => dispatch(toggleShowConfirmModal())}>
            いいえ
          </button>
          <button
            onClick={() => {
              dispatch(remove(id));
              dispatch(toggleShowConfirmModal());
            }}
          >
            削除
          </button>
        </div>
      </div>
    );
  }

  if(btnType==='restore') {
    return (
      <div className={styles.modalWindow}>
        <p>{"削除を取り消しますか？"}</p>
        <div>
          <button onClick={() => dispatch(toggleShowConfirmModal())}>
            いいえ
          </button>
          <button
            onClick={() => {
              dispatch(restore(id));
              dispatch(toggleShowConfirmModal());
            }}
          >
            削除取消し
          </button>
        </div>
      </div>
    );
  }
  return <></>;
};

export default ConfirmModal;
