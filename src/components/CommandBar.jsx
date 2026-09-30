import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaLongArrowAltUp } from "react-icons/fa";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { TbDatabaseFilled } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

const suggestions = [
  {
    key: "about",
    label: "About Me",
    icon: PiBookmarkSimpleFill,
    iconClass: "text-blue-400",
  },
  {
    key: "skills",
    label: "Skills",
    icon: IoSettingsSharp,
    iconClass: "text-green-300",
  },
  {
    key: "projects",
    label: "Projects",
    icon: TbDatabaseFilled,
    iconClass: "text-yellow-300",
  },
  {
    key: "clients",
    label: "Clients",
    icon: FaUsers,
    iconClass: "text-purple-400",
  },
  {
    key: "contact",
    label: "Contact",
    icon: FaEnvelope,
    iconClass: "text-orange-500",
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

  // Manual input
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isTyping || !input.trim()) return;

    onSendMessage(input);

    setInput("");
  };

  // Suggestion buttons
  const handleSuggestionClick = (topic) => {
    if (isTyping) return;

    const questions = {
      about: "Tell me about yourself",
      skills: "What are your skills?",
      projects: "Show me your projects",
      clients: "Who have you worked with?",
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
      className="mx-auto max-w-4xl rounded-3xl border border-white/6 bg-background p-5 shadow-soft-2"
    >
      {/* Input */}
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-4">
          <motion.input
            layout
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isTyping}
            className="flex-1 bg-transparent px-2 font-open-sans outline-none placeholder:font-open-sans placeholder:text-white/20 disabled:cursor-not-allowed disabled:opacity-50"
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
            className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-(--accent) transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
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
                  className="block h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                />
              ) : (
                <motion.span
                  key="arrow"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <FaLongArrowAltUp />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </form>

      {/* Suggestions */}
      <motion.div
        layout
        variants={suggestionContainer}
        initial="hidden"
        animate="visible"
        className="mt-4 flex flex-wrap gap-3 font-open-sans text-gray-400"
      >
        {suggestions.map((suggestion) => {
          const Icon = suggestion.icon;

          return (
            <motion.button
              key={suggestion.key}
              type="button"
              variants={suggestionItem}
              whileHover={{
                y: -2,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() => handleSuggestionClick(suggestion.key)}
              disabled={isTyping}
              className="flex cursor-pointer items-center gap-2 rounded-full bg-white/6 px-3 py-2 text-sm transition-colors duration-200 hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Icon className={suggestion.iconClass} />

              {suggestion.label}
            </motion.button>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default CommandBar;
