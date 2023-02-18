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
  const sunIcon: IconDefinition = findIconDefinition({
    prefix: "fas",
    iconName: "sun",
  });

  const switchTheme = () => {
    const r = document.querySelector(":root") as HTMLElement;
    const currentTheme = localStorage.getItem("theme");
    if (r && currentTheme) {
      if (currentTheme === "dark") {
        localStorage.setItem("theme", "light");
        r.style.setProperty("--background-color", "245, 222, 179");
        r.style.setProperty("--foreground-color", "0, 0, 0");
        r.style.setProperty("--foreground-color-secondary", "128, 0, 128");
      } else {
        localStorage.setItem("theme", "dark");
        r.style.setProperty("--background-color", "36, 52, 71");
        r.style.setProperty("--foreground-color", "255, 255, 255");
        r.style.setProperty("--foreground-color-secondary", "238, 206, 26");
      }
    }
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
        <div className={styles.sun_btn} onClick={switchTheme}>
          <span className={styles.sun_icon}>
            <FontAwesomeIcon icon={sunIcon} />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
