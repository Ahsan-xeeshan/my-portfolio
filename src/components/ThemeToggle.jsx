import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <motion.button
      type="button"
      onClick={() => setDarkMode((previous) => !previous)}
      aria-label={
        darkMode
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.94,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className="
        group
        relative
        flex
        h-10
        w-10
        cursor-pointer
        items-center
        justify-center
        overflow-hidden
        rounded-lg
        border
        border-border
        bg-surface
        text-text-secondary
        shadow-sm
        transition-all
        duration-300
        hover:border-accent/50
        hover:bg-surface-hover
        hover:text-accent
        hover:shadow-[0_0_18px_rgba(124,58,237,0.18)]
      "
    >
      {/* Hover glow */}
      <motion.span
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-lg
          bg-accent/10
        "
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileHover={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
      />

      <AnimatePresence
        mode="wait"
        initial={false}
      >
        {darkMode ? (
          <motion.svg
            key="sun"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="relative z-10 h-5 w-5"
            initial={{
              opacity: 0,
              rotate: -90,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            whileHover={{
              rotate: 25,
              scale: 1.12,
            }}
            exit={{
              opacity: 0,
              rotate: 90,
              scale: 0.7,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06"
            />

            <circle
              cx="12"
              cy="12"
              r="3.5"
            />
          </motion.svg>
        ) : (
          <motion.svg
            key="moon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="relative z-10 h-5 w-5"
            initial={{
              opacity: 0,
              rotate: 90,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            whileHover={{
              rotate: -20,
              scale: 1.12,
            }}
            exit={{
              opacity: 0,
              rotate: -90,
              scale: 0.7,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;