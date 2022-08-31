import { FC } from "react";
import styles from "./index.module.css";
import { useAppSelector } from "../../../../../app/hooks";
import DeleteModal from "../DeleteModal";
import UpdateModal from "../UpdateModal"

const BaseModal: FC = () => {
  const showComfirmModal = useAppSelector(
    (state) => state.todos.showComfirmModal
  );
  const showUpdateModal = useAppSelector(
    (state) => state.todos.showUpdateModal
  );

  const TSX = showComfirmModal ? <DeleteModal /> : showUpdateModal ? <UpdateModal /> : '';
  return (
    <div className={styles.modal}>
      {TSX}
    </div>
  );
};

export default BaseModal;
