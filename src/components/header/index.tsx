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

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const getTime = () => {
    const shouldAddZero = new Date().getMinutes() < 10;
    return `${new Date().getHours()}${":"}${
      shouldAddZero ? "0" : ""
    }${new Date().getMinutes()}`;
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.hamburger}>
            <FontAwesomeIcon icon={githubIcon} />
          </span>
        </div>
        <div className={styles.middle}>
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
                router.pathname == "/work" ? styles.activelink : ""
              )}
            >
              <Link href="/work">Work</Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <button className={styles.right_item} onClick={toggleThemeHandler}>
            <div className={styles.sun_btn}>
              <span className={styles.sun_icon}>
                <FontAwesomeIcon
                  icon={themeCtx.isDarkTheme ? moonIcon : sunIcon}
                />
              </span>
            </div>
            <div className={styles.timezone}>
              <div> {timezone}</div>
              <div>{getTime()}</div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
