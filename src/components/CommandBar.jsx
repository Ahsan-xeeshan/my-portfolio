import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaLongArrowAltUp } from "react-icons/fa";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { TbDatabaseFilled } from "react-icons/tb";
import { FaBook } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FiPlus, FiX } from "react-icons/fi";

const suggestions = [
  {
    key: "about",
    label: "About Me",
    description: "Learn more about me",
    icon: PiBookmarkSimpleFill,
    iconClass: "text-blue-400",
    color: "#60a5fa",
  },
  {
    key: "skills",
    label: "Skills",
    description: "Explore my technical skills",
    icon: IoSettingsSharp,
    iconClass: "text-green-300",
    color: "#86efac",
  },
  {
    key: "projects",
    label: "Projects",
    description: "View my featured projects",
    icon: TbDatabaseFilled,
    iconClass: "text-yellow-300",
    color: "#fde047",
  },
  {
    key: "education",
    label: "Education",
    description: "My education & background",
    icon: FaBook,
    iconClass: "text-purple-400",
    color: "#c084fc",
  },
  {
    key: "contact",
    label: "Contact",
    description: "Let's get in touch",
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
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },

  exit: {
    opacity: 0,

    transition: {
      staggerChildren: 0.035,
      staggerDirection: -1,
    },
  },
};

const suggestionItem = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.95,
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
    y: -8,
    scale: 0.95,

    transition: {
      duration: 0.18,
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
  const [showSuggestions, setShowSuggestions] = useState(false);

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

    setShowSuggestions(false);
  };

  const closeSuggestions = () => {
    setShowSuggestions(false);
  };

  return (
    <>
      {/* ================================================================ */}
      {/* MOBILE BACKDROP                                                  */}
      {/* ================================================================ */}

      <AnimatePresence>
        {showSuggestions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeSuggestions}
            className="
              fixed
              inset-0
              z-90
              bg-black/30
              backdrop-blur-md
              md:hidden
            "
          />
        )}
      </AnimatePresence>

      {/* ================================================================ */}
      {/* COMMAND BAR                                                       */}
      {/* ================================================================ */}

      <motion.div
        layout
        transition={{
          layout: {
            duration: 0.35,
            ease: "easeOut",
          },
        }}
        className="
  relative
  z-95
  mx-auto
  max-w-4xl
  rounded-3xl
  border
  border-border
  bg-background
  p-3
  shadow-soft-2
"
      >
        {/* ============================================================ */}
        {/* MOBILE SUGGESTION MODAL                                      */}
        {/* ============================================================ */}

        <AnimatePresence>
          {showSuggestions && (
            <motion.div
              initial={{
                opacity: 0,
                y: 18,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 15,
                scale: 0.96,
              }}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 28,
              }}
              className="
                absolute
                bottom-[calc(100%+14px)]
                left-1/2
                w-[min(88vw,360px)]
                -translate-x-1/2
                overflow-hidden
                rounded-3xl
                border
                border-border/80
                bg-background/95
                shadow-[0_20px_70px_rgba(0,0,0,0.25)]
                backdrop-blur-2xl
                md:hidden
              "
            >
              {/* ------------------------------------------------------ */}
              {/* GLOW                                                     */}
              {/* ------------------------------------------------------ */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-32
                  w-32
                  rounded-full
                  bg-(--accent)/10
                  blur-3xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -left-16
                  h-36
                  w-36
                  rounded-full
                  bg-purple-500/5
                  blur-3xl
                "
              />

              {/* ------------------------------------------------------ */}
              {/* HEADER                                                    */}
              {/* ------------------------------------------------------ */}

              <div
                className="
                  relative
                  flex
                  items-center
                  justify-between
                  border-b
                  border-border/70
                  px-5
                  py-4
                "
              >
                <div>
                  <p
                    className="
                      font-open-sans
                      text-sm
                      font-semibold
                      text-text-primary
                    "
                  >
                    Explore
                  </p>

                  <p
                    className="
                      mt-0.5
                      font-open-sans
                      text-xs
                      text-text-muted
                    "
                  >
                    Choose a topic to learn more
                  </p>
                </div>

                <motion.button
                  type="button"
                  onClick={closeSuggestions}
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.92,
                  }}
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border
                    bg-surface
                    text-text-muted
                    transition-colors
                    duration-200
                    hover:bg-surface-hover
                    hover:text-text-primary
                  "
                  aria-label="Close suggestions"
                >
                  <FiX size={16} />
                </motion.button>
              </div>

              {/* ------------------------------------------------------ */}
              {/* SUGGESTIONS                                               */}
              {/* ------------------------------------------------------ */}

              <motion.div
                variants={suggestionContainer}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="
                  relative
                  flex
                  flex-col
                  gap-2
                  p-3
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
                      onClick={() => handleSuggestionClick(suggestion.key)}
                      style={{
                        "--suggestion-color": suggestion.color,
                      }}
                      className="
                        group
                        relative
                        flex
                        w-full
                        items-center
                        gap-3.5
                        overflow-hidden
                        rounded-2xl
                        border
                        border-border/70
                        bg-surface/80
                        px-4
                        py-3.5
                        text-left
                        transition-all
                        duration-300

                        hover:border-(--suggestion-color)/40
                        hover:bg-surface-hover

                        active:scale-[0.98]

                        disabled:cursor-not-allowed
                        disabled:opacity-50
                      "
                    >
                      {/* Hover glow */}
                      <span
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          rounded-2xl
                          opacity-0
                          transition-opacity
                          duration-300
                          group-hover:opacity-100
                        "
                        style={{
                          background:
                            "radial-gradient(circle at 20% 50%, color-mix(in srgb, var(--suggestion-color) 14%, transparent), transparent 65%)",
                        }}
                      />

                      {/* Icon */}
                      <motion.span
                        whileHover={{
                          scale: 1.08,
                          rotate: 3,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                        }}
                        className="
                          relative
                          z-10
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-border/70
                          bg-background/80
                        "
                        style={{
                          color: suggestion.color,
                        }}
                      >
                        <Icon size={17} />
                      </motion.span>

                      {/* Text */}
                      <span className="relative z-10 flex-1">
                        <span
                          className="
                            block
                            text-sm
                            font-medium
                            text-text-primary
                          "
                        >
                          {suggestion.label}
                        </span>

                        <span
                          className="
                            mt-0.5
                            block
                            text-[11px]
                            text-text-muted
                          "
                        >
                          {suggestion.description}
                        </span>
                      </span>

                      {/* Arrow */}
                      <motion.span
                        initial={{
                          opacity: 0,
                          x: -4,
                        }}
                        whileHover={{
                          opacity: 1,
                          x: 0,
                        }}
                        className="
                          relative
                          z-10
                          text-text-muted
                        "
                      >
                        <FaLongArrowAltUp className="rotate-45" size={14} />
                      </motion.span>
                    </motion.button>
                  );
                })}
              </motion.div>

              {/* Bottom handle */}
              <div
                className="
                  mx-auto
                  mb-2
                  h-1
                  w-10
                  rounded-full
                  bg-border
                "
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ============================================================ */}
        {/* INPUT                                                         */}
        {/* ============================================================ */}

        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-2.5">
            {/* -------------------------------------------------------- */}
            {/* MOBILE PLUS BUTTON                                        */}
            {/* -------------------------------------------------------- */}

            <motion.button
              type="button"
              disabled={isTyping}
              onClick={() => setShowSuggestions((previous) => !previous)}
              whileHover={
                !isTyping
                  ? {
                      scale: 1.07,
                    }
                  : {}
              }
              whileTap={
                !isTyping
                  ? {
                      scale: 0.92,
                    }
                  : {}
              }
              aria-label={
                showSuggestions ? "Close suggestions" : "Show suggestions"
              }
              className="
                relative
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border
                border-border
                bg-surface/80
                text-text-secondary
                shadow-sm
                backdrop-blur-md
                transition-all
                duration-300

                hover:border-(--accent)/40
                hover:bg-surface-hover
                hover:text-text-primary

                disabled:cursor-not-allowed
                disabled:opacity-40

                md:hidden
              "
            >
              {/* Active glow */}
              <AnimatePresence>
                {showSuggestions && (
                  <motion.span
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-(--accent)/10
                    "
                  />
                )}
              </AnimatePresence>

              {/* Plus / X */}
              <AnimatePresence mode="wait" initial={false}>
                {showSuggestions ? (
                  <motion.span
                    key="close"
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
                    exit={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.7,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="relative z-10"
                  >
                    <FiX size={18} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="plus"
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
                    exit={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.7,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="relative z-10"
                  >
                    <FiPlus size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* -------------------------------------------------------- */}
            {/* INPUT                                                     */}
            {/* -------------------------------------------------------- */}

            <motion.input
              layout
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isTyping}
              className="
                min-w-0
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

            {/* -------------------------------------------------------- */}
            {/* SEND BUTTON                                               */}
            {/* -------------------------------------------------------- */}

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
  h-9
  w-9
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
              {/* Shimmer */}
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

              {/* Loading / Arrow */}
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
                    <FaLongArrowAltUp size={14} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </form>

        {/* ============================================================ */}
        {/* DESKTOP SUGGESTIONS                                           */}
        {/* ============================================================ */}

        <motion.div
          layout
          variants={suggestionContainer}
          initial="hidden"
          animate="visible"
          className="
            mt-4
            hidden
            flex-wrap
            gap-3
            font-open-sans
            md:flex
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
                onClick={() => handleSuggestionClick(suggestion.key)}
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
                {/* Border glow */}
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
                    border: "1px solid var(--suggestion-color)",
                    boxShadow:
                      "0 0 18px color-mix(in srgb, var(--suggestion-color) 25%, transparent)",
                  }}
                />

                {/* Background */}
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

                {/* Shimmer */}
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
    </>
  );
};

export default CommandBar;
