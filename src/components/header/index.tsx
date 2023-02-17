import styles from "./index.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  findIconDefinition,
} from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";

const Header = () => {
  const router = useRouter();

  const githubIcon: IconDefinition = findIconDefinition({
    prefix: "fas",
    iconName: "bars",
  });

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.hamburger}>
          <FontAwesomeIcon icon={githubIcon} />
        </span>
        <ul className={styles.links}>
          <li
            className={classNames(
              styles.link,
              router.pathname == "/" ? styles.activelink : ""
            )}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={classNames(
              styles.link,
              router.pathname == "/freelance" ? styles.activelink : ""
            )}
          >
            <Link href="/freelance">Freealance Work</Link>
          </li>
          <li
            className={classNames(
              styles.link,
              router.pathname == "/corporate" ? styles.activelink : ""
            )}
          >
            <Link href="/corporate">Corporate Work</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
