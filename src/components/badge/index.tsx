import { FC } from "react";
import styles from "./index.module.scss";

type Props = {
  text: string;
};

const Badge: FC<Props> = ({ text }) => {
  return <span className={styles.container}>{text}</span>;
};

export default Badge;
