import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaLongArrowAltUp } from "react-icons/fa";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { TbDatabaseFilled } from "react-icons/tb";
import { FaBook } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

const suggestions = [
  {
    key: "about",
    label: "About Me",
    icon: PiBookmarkSimpleFill,
    iconClass: "text-blue-400",
    color: "#60a5fa",
  },
  {
    key: "skills",
    label: "Skills",
    icon: IoSettingsSharp,
    iconClass: "text-green-300",
    color: "#86efac",
  },
  {
    key: "projects",
    label: "Projects",
    icon: TbDatabaseFilled,
    iconClass: "text-yellow-300",
    color: "#fde047",
  },
  {
    key: "education",
    label: "Education",
    icon: FaBook,
    iconClass: "text-purple-400",
    color: "#c084fc",
  },
  {
    key: "contact",
    label: "Contact",
    icon: FaEnvelope,
    iconClass: "text-orange-500",
    color: "#f97316",
  },
];

const suggestionContainer = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },

  exit: {
    opacity: 0,

    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const suggestionItem = {
  hidden: {
    opacity: 0,
    y: 8,
    scale: 0.94,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
    y: -6,
    scale: 0.94,

    transition: {
      duration: 0.2,
    },
  },
};

const CommandBar = ({
  onSendMessage,
  isTyping = false,
  isChatStarted = false,
  isSuggestionTyping = false,
}) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isTyping || !input.trim()) return;

    onSendMessage(input);

    setInput("");
  };

  const handleSuggestionClick = (topic) => {
    if (isTyping) return;

    const questions = {
      about: "Tell me about yourself",
      skills: "What are your skills?",
      projects: "Show me your projects",
      education: "What's your educational background?",
      contact: "How can I reach you?",
    };

    onSendMessage(questions[topic], topic);
  };

  return (
    <motion.div
      layout
      transition={{
        layout: {
          duration: 0.35,
          ease: "easeOut",
        },
      }}
      className="
        mx-auto
        max-w-4xl
        rounded-3xl
        border
        border-border
        bg-background
        p-5
        shadow-soft-2
      "
    >
      {/* INPUT */}

      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-4">
          <motion.input
            layout
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isTyping}
            className="
              flex-1
              bg-transparent
              px-2
              font-open-sans
              text-text-primary
              outline-none
              placeholder:font-open-sans
              placeholder:text-text-muted
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
            placeholder={
              isTyping
                ? "Assistant is typing..."
                : isChatStarted
                  ? "Ask another question..."
                  : "Try about, skills, or projects..."
            }
          />

          {/* Send button */}

          <motion.button
            type="submit"
            disabled={isTyping || !input.trim()}
            whileHover={
              !isTyping && input.trim()
                ? {
                    scale: 1.06,
                  }
                : {}
            }
            whileTap={
              !isTyping && input.trim()
                ? {
                    scale: 0.94,
                  }
                : {}
            }
            className="
              relative
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              overflow-hidden
              rounded-full
              bg-(--accent)
              text-white
              transition-opacity
              duration-300
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <motion.span
              className="
                absolute
                inset-0
                bg-white/10
              "
              initial={{
                x: "-100%",
              }}
              animate={{
                x: "100%",
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />

            <AnimatePresence initial={false}>
              {isTyping && !isSuggestionTyping ? (
                <motion.span
                  key="loading"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 360,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    opacity: {
                      duration: 0.2,
                    },
                    rotate: {
                      duration: 0.9,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  className="
                    relative
                    z-10
                    block
                    h-4
                    w-4
                    rounded-full
                    border-2
                    border-white/30
                    border-t-white
                  "
                />
              ) : (
                <motion.span
                  key="arrow"
                  initial={{
                    opacity: 0,
                    y: 3,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -3,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="relative z-10"
                >
                  <FaLongArrowAltUp />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </form>

      {/* SUGGESTIONS */}

      <motion.div
        layout
        variants={suggestionContainer}
        initial="hidden"
        animate="visible"
        className="
          mt-4
          flex
          flex-wrap
          gap-3
          font-open-sans
        "
      >
        {suggestions.map((suggestion) => {
          const Icon = suggestion.icon;

          return (
            <motion.button
              key={suggestion.key}
              type="button"
              variants={suggestionItem}
              disabled={isTyping}
              onClick={() =>
                handleSuggestionClick(suggestion.key)
              }
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              style={{
                "--suggestion-color": suggestion.color,
              }}
              className="
                group
                relative
                flex
                cursor-pointer
                items-center
                gap-2
                overflow-hidden
                rounded-full
                border
                border-border
                bg-surface
                px-3
                py-2
                text-sm
                text-text-secondary
                transition-all
                duration-300

                hover:border-(--accent)/40
                hover:bg-surface-hover
                hover:text-text-primary

                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {/* Animated border glow */}

              <motion.span
                variants={{
                  rest: {
                    opacity: 0,
                  },

                  hover: {
                    opacity: 1,
                  },
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-full
                "
                style={{
                  border:
                    "1px solid var(--suggestion-color)",

                  boxShadow:
                    "0 0 18px color-mix(in srgb, var(--suggestion-color) 25%, transparent)",
                }}
              />

              {/* Soft colored background */}

              <motion.span
                variants={{
                  rest: {
                    opacity: 0,
                    scale: 0.8,
                  },

                  hover: {
                    opacity: 1,
                    scale: 1,
                  },
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-full
                "
                style={{
                  background:
                    "radial-gradient(circle at center, color-mix(in srgb, var(--suggestion-color) 10%, transparent), transparent 70%)",
                }}
              />

              {/* Moving shimmer */}

              <motion.span
                variants={{
                  rest: {
                    x: "-120%",
                    opacity: 0,
                  },

                  hover: {
                    x: "120%",
                    opacity: 1,
                  },
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  w-1/3
                  skew-x-[-20deg]
                  bg-linear-to-r
                  from-transparent
                  via-(--text-primary)/10
                  to-transparent
                "
              />

              {/* Icon */}

              <motion.span
                variants={{
                  rest: {
                    scale: 1,
                    rotate: 0,
                  },

                  hover: {
                    scale: 1.12,
                    rotate: 4,
                  },

                  tap: {
                    scale: 0.9,
                  },
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
                className={`relative z-10 ${suggestion.iconClass}`}
              >
                <Icon />
              </motion.span>

              {/* Label */}

              <motion.span
                variants={{
                  rest: {
                    x: 0,
                  },

                  hover: {
                    x: 1,
                  },
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  relative
                  z-10
                  text-text-secondary
                  transition-colors
                  duration-300
                  group-hover:text-text-primary
                "
              >
                {suggestion.label}
              </motion.span>
            </motion.button>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default CommandBar;