"use client";

import AppConfig from "@config/index";
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
        r.style.setProperty("--background-color", AppConfig.theme.light.backgroundColor);
        r.style.setProperty("--foreground-color", AppConfig.theme.light.foregroundColor);
        r.style.setProperty("--foreground-color-secondary", AppConfig.theme.light.foregroundSecondaryColor);
        r.style.setProperty("--mode", "light");
      } else {
        setIsDarkTheme(true);
        localStorage.setItem("theme", "dark");
        r.style.setProperty("--background-color", AppConfig.theme.dark.backgroundColor);
        r.style.setProperty("--foreground-color", AppConfig.theme.dark.foregroundColor);
        r.style.setProperty("--foreground-color-secondary", AppConfig.theme.dark.foregroundSecondaryColor);
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
