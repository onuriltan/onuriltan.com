"use client";

import styles from "./index.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "@/store/ThemeContext";
import Sidebar from "../sidebar";
import { faHamburger, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const getTime = () => {
    const shouldAddZero = new Date().getMinutes() < 10;
    const shouldAddZeroToHours = new Date().getHours() < 10;
    return `${shouldAddZeroToHours ? "0" : ""}${new Date().getHours()}${":"}${shouldAddZero ? "0" : ""}${new Date().getMinutes()}`;
  };

  const pathname = usePathname();
  const [time, setTime] = useState(getTime());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [timezone, setTimezone] = useState("");

  const themeCtx = useContext(ThemeContext);

  const toggleThemeHandler = () => {
    themeCtx.toggleThemeHandler();
  };

  const onHamburgerClick = ({ value }: { value?: boolean }) => {
    setSidebarOpen(value ? value : !sidebarOpen);
  };

  const setTimeZoneCity = () => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const city = timezone.split("/").pop();
    setTimezone(city ? city : timezone);
  };

  useEffect(() => {
    setTimeZoneCity();

    const interval = setInterval(() => {
      setTimeZoneCity();
      setTime(getTime());
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header className={`${styles.header}`}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.hamburger} onClick={() => onHamburgerClick({ value: undefined })}>
            <FontAwesomeIcon icon={faHamburger} />
          </span>
        </div>
        <div className={styles.middle}>
          <ul className={styles.links}>
            <li className={classNames(styles.link, pathname == "/" ? styles.activelink : "")}>
              <Link href="/">Home</Link>
            </li>
            <li className={classNames(styles.link, pathname == "/work" ? styles.activelink : "")}>
              <Link href="/work">Work</Link>
            </li>
            <li className={classNames(styles.link, pathname == "/blog" ? styles.activelink : "")}>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <button className={styles.right_item} onClick={toggleThemeHandler}>
            <div className={styles.sun_btn}>
              <span className={styles.sun_icon}>
                <FontAwesomeIcon icon={themeCtx.isDarkTheme ? faMoon : faSun} />
              </span>
            </div>
            <div className={styles.timezone}>
              <div> {timezone}</div>
              <div>{time}</div>
            </div>
          </button>
        </div>
      </div>
      <Sidebar open={sidebarOpen} onClose={() => onHamburgerClick({ value: false })} />
    </header>
  );
};

export default Header;
