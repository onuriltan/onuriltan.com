"use client";

import AppConfig from "@config/index";
import React, { createContext, ReactElement, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  isDarkTheme: boolean;
  toggleThemeHandler: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children: React.ReactNode;
  initialTheme: Theme;
}

export function ThemeContextProvider(props: ThemePropsInterface): ReactElement {
  const [theme, setTheme] = useState<Theme>(props.initialTheme);

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
    setTheme(theme);
  };

  const toggleThemeHandler = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDarkTheme: theme === "dark",
        toggleThemeHandler,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
