"use client";

import AppConfig from "@config/index";
import React, { createContext, ReactElement, useEffect, useState } from "react";

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
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | undefined>(undefined);

  const applyTheme = (theme: Theme) => {
    const r = document.documentElement;
    const themeConfig = AppConfig.theme[theme];

    if (!themeConfig) return;

    r.style.setProperty("--background-color", themeConfig.backgroundColor);
    r.style.setProperty("--foreground-color", themeConfig.foregroundColor);
    r.style.setProperty("--foreground-color-secondary", themeConfig.foregroundSecondaryColor);
    r.style.setProperty("--foreground-color-third", themeConfig.foregroundTertiaryColor);
    r.style.setProperty("--mode", theme);

    r.setAttribute("data-theme", theme);
    setIsDarkTheme(theme === "dark");
  };

  useEffect(() => {
    // Read initial theme from server-rendered :root variable
    const rootStyles = getComputedStyle(document.documentElement);
    const mode = rootStyles.getPropertyValue("--mode").trim() as Theme;
    const initialTheme = mode === "light" ? "light" : "dark";
    applyTheme(initialTheme);
  }, []);

  const toggleThemeHandler = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: isDarkTheme ? "dark" : "light",
        isDarkTheme,
        toggleThemeHandler,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
