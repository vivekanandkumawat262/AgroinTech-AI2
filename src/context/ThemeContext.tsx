// src/context/ThemeContext.tsx

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import type { ReactNode } from "react";

type ThemeType =
  | "light"
  | "dark";

interface ThemeContextType {
  theme: ThemeType;

  toggleTheme: () => void;

  setTheme: (
    theme: ThemeType
  ) => void;
}

const ThemeContext =
  createContext<
    ThemeContextType | null
  >(null);

interface Props {
  children: ReactNode;
}

export function ThemeProvider({
  children,
}: Props) {

  const [
    theme,
    setThemeState,
  ] = useState<ThemeType>(
    "light"
  );

  useEffect(() => {

    if (
      typeof window ===
      "undefined"
    )
      return;

    const saved =
      localStorage.getItem(
        "theme"
      );

    const currentTheme: ThemeType =
      saved === "dark"
        ? "dark"
        : "light";

    document.documentElement
      .classList.remove(
        "light",
        "dark"
      );

    document.documentElement
      .classList.add(
        currentTheme
      );

    setThemeState(
      currentTheme
    );

  }, []);

  function setTheme(
    value: ThemeType
  ) {

    document.documentElement
      .classList.remove(
        "light",
        "dark"
      );

    document.documentElement
      .classList.add(
        value
      );

    localStorage.setItem(
      "theme",
      value
    );

    setThemeState(
      value
    );
  }

  function toggleTheme() {

    setTheme(
      theme === "light"
        ? "dark"
        : "light"
    );

  }

  const value =
    useMemo(
      () => ({
        theme,
        toggleTheme,
        setTheme,
      }),
      [theme]
    );

  return (
    <ThemeContext.Provider
      value={value}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {

  const context =
    useContext(
      ThemeContext
    );

  if (!context) {

    throw new Error(
      "useThemeContext must be used inside ThemeProvider"
    );

  }

  return context;
}