"use client";

import { createContext, ReactElement, useState } from "react";
type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  isDarkTheme: boolean;
  toggleThemeHandler: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

export function ThemeContextProvider(props: ThemePropsInterface): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

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

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler, theme: isDarkTheme ? "dark" : "light" }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
