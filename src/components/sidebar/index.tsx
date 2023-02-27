import styles from "./index.module.css";

import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import {
  IconDefinition,
  findIconDefinition,
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  open: boolean;
  onClose: () => void;
};

const CloseIcon: IconDefinition = findIconDefinition({
  prefix: "fas",
  iconName: "close",
});

const Sidebar = ({ open, onClose }: Props) => {
  const router = useRouter();

  return (
    <div className={`${open && styles.open} ${styles.container}`}>
      <span className={styles.closebtn} onClick={onClose}>
        <FontAwesomeIcon icon={CloseIcon} />
      </span>
      <ul className={styles.links}>
        <li
          className={classNames(
            router.pathname == "/" ? styles.activelink : styles.link
          )}
        >
          <Link href="/" onClick={onClose}>
            Home
          </Link>
        </li>
        <li
          className={classNames(
            router.pathname == "/work" ? styles.activelink : styles.link
          )}
        >
          <Link href="/work" onClick={onClose}>
            Work
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
