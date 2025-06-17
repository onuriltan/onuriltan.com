"use client";

import { createContext, ReactElement, useEffect, useState } from "react";

const ThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

export function ThemeContextProvider(props: ThemePropsInterface): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    localStorage.setItem("theme", hour > 18 || hour < 7 ? "light" : "dark");
    const r = document.querySelector(":root") as HTMLElement;
    const currentTheme = localStorage.getItem("theme");
    if (r) {
      if (currentTheme === "dark") {
        setIsDarkTheme(false);
        localStorage.setItem("theme", "light");
        r.style.setProperty("--background-color", "245, 222, 179");
        r.style.setProperty("--foreground-color", "0, 0, 0");
        r.style.setProperty("--foreground-color-secondary", "128, 0, 128");
        r.style.setProperty("--foreground-color-third", "245, 222, 179");
      } else {
        setIsDarkTheme(true);
        localStorage.setItem("theme", "dark");
        r.style.setProperty("--background-color", "36, 52, 71");
        r.style.setProperty("--foreground-color", "255, 255, 255");
        r.style.setProperty("--foreground-color-secondary", "238, 206, 26");
        r.style.setProperty("--foreground-color-third", "0, 0, 0");
      }
    }
  }, []);

  const toggleThemeHandler = () => {
    const r = document.querySelector(":root") as HTMLElement;
    const currentTheme = localStorage.getItem("theme");
    if (r) {
      if (currentTheme === "dark") {
        setIsDarkTheme(false);
        localStorage.setItem("theme", "light");
        r.style.setProperty("--background-color", "245, 222, 179");
        r.style.setProperty("--foreground-color", "0, 0, 0");
        r.style.setProperty("--foreground-color-secondary", "128, 0, 128");
      } else {
        setIsDarkTheme(true);
        localStorage.setItem("theme", "dark");
        r.style.setProperty("--background-color", "36, 52, 71");
        r.style.setProperty("--foreground-color", "255, 255, 255");
        r.style.setProperty("--foreground-color-secondary", "238, 206, 26");
      }
    }
  };

  return <ThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>{props.children}</ThemeContext.Provider>;
}

export default ThemeContext;
