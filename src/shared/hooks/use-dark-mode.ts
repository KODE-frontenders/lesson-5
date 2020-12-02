import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";
type ThemeHook = () => [ThemeMode, () => void, boolean];

export const useDarkMode: ThemeHook = () => {
  const [theme, setTheme] = useState("light" as ThemeMode);
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode as ThemeMode);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme as ThemeMode);
    } else {
      setMode("light");
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
