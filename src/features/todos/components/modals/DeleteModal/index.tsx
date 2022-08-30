import { FC } from "react";
import styles from "./index.module.css";

const DeleteModal: FC = () => {
  return (
    <div className={styles.modal}>
      <p>{"削除しますか？"}</p>
      <div>
        <button>いいえ</button>
        <button>削除</button>
      </div>
    </div>
  );
};

export default DeleteModal;
