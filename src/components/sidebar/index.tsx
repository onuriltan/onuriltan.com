import styles from "./index.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {
  open: boolean;
  onClose: () => void;
};

const Sidebar = ({ open, onClose }: Props) => {
  const pathname = usePathname();

  return (
    <div className={`${open && styles.open} ${styles.container}`}>
      <span className={styles.closebtn} onClick={onClose}>
        <FontAwesomeIcon icon={faXmark} />
      </span>
      <ul className={styles.links}>
        <li className={classNames(pathname == "/" ? styles.activelink : styles.link)}>
          <Link href="/" onClick={onClose}>
            Home
          </Link>
        </li>
        <li className={classNames(pathname == "/work" ? styles.activelink : styles.link)}>
          <Link href="/work" onClick={onClose}>
            Work
          </Link>
        </li>
        <li className={classNames(pathname == "/blog" ? styles.activelink : styles.link)}>
          <Link href="/blog" onClick={onClose}>
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
