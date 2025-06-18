"use client";

import React, { createContext, ReactElement, useState } from "react";
type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme | undefined;
  isDarkTheme: boolean | undefined;
  toggleThemeHandler: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: undefined,
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

export function ThemeContextProvider(props: ThemePropsInterface): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | undefined>();

  React.useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const isDarkMode = rootStyles.getPropertyValue("--mode").trim() === "dark";
    setIsDarkTheme(isDarkMode);
  }, []);

  const toggleThemeHandler = () => {
    const r = document.querySelector(":root") as HTMLElement;
    const rootStyles = getComputedStyle(document.documentElement);
    const isDarkMode = rootStyles.getPropertyValue("--mode").trim() === "dark";

    if (r) {
      if (isDarkMode) {
        setIsDarkTheme(false);
        localStorage.setItem("theme", "light");
        r.style.setProperty("--background-color", "245, 222, 179");
        r.style.setProperty("--foreground-color", "0, 0, 0");
        r.style.setProperty("--foreground-color-secondary", "128, 0, 128");
        r.style.setProperty("--mode", "light");
      } else {
        setIsDarkTheme(true);
        localStorage.setItem("theme", "dark");
        r.style.setProperty("--background-color", "36, 52, 71");
        r.style.setProperty("--foreground-color", "255, 255, 255");
        r.style.setProperty("--foreground-color-secondary", "238, 206, 26");
        r.style.setProperty("--mode", "dark");
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
