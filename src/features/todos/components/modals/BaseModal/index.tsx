import { FC, ReactNode } from "react";
import styles from "./index.module.css";

type Props = {
  children: ReactNode;
  isModalOpen: boolean;
};

const BaseModal: FC<Props> = ({ children, isModalOpen }) => {
  if (!isModalOpen) return (<></>);
  return (
    <div className={styles.modal}>
      <div>{children}</div>
    </div>
  );
};

export default BaseModal;
