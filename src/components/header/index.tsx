import styles from "./index.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  findIconDefinition,
} from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import { useContext } from "react";
import ThemeContext from "@/store/ThemeContext";

const Header = () => {
  const router = useRouter();

  const githubIcon: IconDefinition = findIconDefinition({
    prefix: "fas",
    iconName: "bars",
  });
  const sunIcon: IconDefinition = findIconDefinition({
    prefix: "fas",
    iconName: "sun",
  });
  const moonIcon: IconDefinition = findIconDefinition({
    prefix: "fas",
    iconName: "moon",
  });

  const themeCtx = useContext(ThemeContext);

  const toggleThemeHandler = () => {
    themeCtx.toggleThemeHandler();
  };

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
        <div className={styles.sun_btn} onClick={toggleThemeHandler}>
          <span className={styles.sun_icon}>
            <FontAwesomeIcon icon={themeCtx.isDarkTheme ? moonIcon : sunIcon} />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
