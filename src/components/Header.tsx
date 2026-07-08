"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

type ThemeMode = "system" | "light" | "dark";

export default function Header() {
  const [theme, setTheme] = useState<ThemeMode>("system");
  const [systemIsDark, setSystemIsDark] = useState(false);

  useEffect(() => {
    // 1. Initial load from localStorage
    const savedTheme = localStorage.getItem("color-scheme") as ThemeMode | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }

    // 2. Detect system theme and setup listener
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemIsDark(mediaQuery.matches);

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      setSystemIsDark(e.matches);
      // If we are in system mode, update root attribute to match
      const currentSaved = localStorage.getItem("color-scheme");
      if (!currentSaved || currentSaved === "system") {
        document.documentElement.setAttribute(
          "data-theme",
          e.matches ? "dark" : "light"
        );
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    let nextTheme: ThemeMode = "system";

    if (theme === "system") {
      // Toggle to the opposite of current system theme
      nextTheme = systemIsDark ? "light" : "dark";
    } else {
      // Toggle back to system theme
      nextTheme = "system";
    }

    setTheme(nextTheme);
    localStorage.setItem("color-scheme", nextTheme);

    // Update document element data-theme attribute
    if (nextTheme === "system") {
      document.documentElement.setAttribute(
        "data-theme",
        systemIsDark ? "dark" : "light"
      );
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) meta.setAttribute("content", "light dark");
    } else {
      document.documentElement.setAttribute("data-theme", nextTheme);
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) meta.setAttribute("content", nextTheme);
    }
  };

  // Determine which icon/label to show
  // If we are on system, show system state (following OS). If we are pinned, show pinned state.
  const isPinned = theme !== "system";
  const activeVisualTheme = theme === "system" ? (systemIsDark ? "dark" : "light") : theme;

  return (
    <header className="main-header glass-panel">
      <div className={`container ${styles.header}`}>
        <a href="#hero" className={styles.logo}>
          <span>Enes Bek</span>
          <span className={styles.logoDot}></span>
        </a>

        <nav className={styles.nav}>
          <a href="#projects" className={styles.navLink}>
            Projects
          </a>
          <a href="#experience" className={styles.navLink}>
            Experience
          </a>
          <a href="#skills" className={styles.navLink}>
            Skills
          </a>
          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
        </nav>

        <div className={styles.actions}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={
              isPinned
                ? "Switch to system theme preference"
                : "Switch to opposite of system theme"
            }
            title={
              isPinned
                ? `Pinned: ${activeVisualTheme} (click to follow system)`
                : `Following system: ${activeVisualTheme} (click to override)`
            }
          >
            {isPinned ? (
              // Pinned mode icon (Sun or Moon depending on active)
              activeVisualTheme === "dark" ? (
                <svg
                  className={styles.toggleIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  className={styles.toggleIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z"
                  />
                </svg>
              )
            ) : (
              // System mode icon (Monitor)
              <svg
                className={styles.toggleIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            )}
          </button>

          <a href="#contact" className="btn btn-primary" style={{ paddingBlock: "0.5rem" }}>
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}
