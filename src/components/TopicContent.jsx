import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaStar,
  FaCode,
  FaSmile,
  FaCheck,
  FaBriefcase,
  FaBuilding,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFile,
  FaBook,
  FaAward,
  FaHeart,
  FaCog,
} from "react-icons/fa";

import {
  FaLayerGroup,
  FaCalendarDays,
} from "react-icons/fa6";

import TypewriterText from "./TypewriterText";
import ProjectCard from "./ProjectCard";

import { topics } from "../data/qaData";

const iconMap = {
  star: FaStar,
  code: FaCode,
  smile: FaSmile,
  check: FaCheck,
  briefcase: FaBriefcase,
  building: FaBuilding,
  mail: FaEnvelope,
  linkedin: FaLinkedin,
  github: FaGithub,
  file: FaFile,
  book: FaBook,
  award: FaAward,
  heart: FaHeart,
  gear: FaCog,
  layers: FaLayerGroup,
  calendar: FaCalendarDays,
};

const TopicContent = ({ topicData, onSendMessage }) => {
  const [visibleProjects, setVisibleProjects] = useState(1);

  if (!topicData) return null;

  /*
   * ---------------------------------------------------------
   * DATA
   * ---------------------------------------------------------
   */

  const items =
    topicData.type !== "projects"
      ? topicData.list || []
      : [];

  const projects =
    topicData.type === "projects"
      ? topicData.list || []
      : [];

  const chips = topicData.chips || [];

  const isLastProject =
    visibleProjects >= projects.length;

  /*
   * ---------------------------------------------------------
   * SUGGESTION CLICK
   * ---------------------------------------------------------
   */

  const handleSuggestionClick = (topicKey) => {
    const topic = topics[topicKey];

    if (!topic || !onSendMessage) return;

    onSendMessage(topic.question, topicKey);
  };

  /*
   * ---------------------------------------------------------
   * SUGGESTIONS
   * ---------------------------------------------------------
   */

  const renderSuggestions = () => {
    if (!topicData.suggestions?.length) return null;

    return (
      <motion.div
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.35,
          delay: 0.15,
        }}
        className="mt-4 flex flex-wrap gap-2"
      >
        {topicData.suggestions.map((suggestion) => {
          const suggestionData = topics[suggestion];

          if (!suggestionData) return null;

          return (
            <motion.button
              key={suggestion}
              type="button"
              onClick={() =>
                handleSuggestionClick(suggestion)
              }
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="
                cursor-pointer
                rounded-full
                border
                border-border
                bg-surface
                px-3
                py-1.5
                font-open-sans
                text-[11px]
                text-text-secondary
                transition-all
                duration-300
                hover:border-(--accent)/40
                hover:bg-surface-hover
                hover:text-(--accent)
              "
            >
              {suggestionData.label}
            </motion.button>
          );
        })}
      </motion.div>
    );
  };

  /*
   * ---------------------------------------------------------
   * NEXT PROJECT
   * ---------------------------------------------------------
   */

  const handleNextProject = () => {
    if (!isLastProject) {
      setVisibleProjects(
        (previous) => previous + 1
      );
    }
  };

  return (
    <div className="w-full">

      {/* =====================================================
          NORMAL LIST
      ====================================================== */}

      {topicData.type !== "projects" &&
        items.length > 0 && (
          <div className="mt-4 flex flex-col gap-2">
            {items.map((item, index) => {
              const Icon = iconMap[item.icon];

              /*
               * CV DOWNLOAD
               */

              if (item.type === "download") {
                return (
                  <motion.a
                    key={item.text}
                    href={item.url}
                    download
                    initial={{
                      opacity: 0,
                      y: 6,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      x: 4,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                      inline-flex
                      w-fit
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-border
                      bg-surface
                      px-3
                      py-2
                      font-open-sans
                      text-xs
                      text-text-secondary
                      transition-all
                      duration-300
                      hover:border-(--accent)/40
                      hover:bg-surface-hover
                      hover:text-(--accent)
                    "
                  >
                    {Icon && (
                      <Icon className="text-xs" />
                    )}

                    <span>{item.text}</span>

                    <span className="text-[11px]">
                      ↓
                    </span>
                  </motion.a>
                );
              }

              /*
               * NORMAL LIST ITEM
               */

              return (
                <motion.div
                  key={`${item.text}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 6,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.08,
                  }}
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  {Icon && (
                    <Icon
                      className="
                        shrink-0
                        text-xs
                        text-(--accent)
                      "
                    />
                  )}

                  <TypewriterText
                    text={item.text}
                    speed={35}
                    className="
                      font-open-sans
                      text-xs
                      leading-5
                      text-text-secondary
                    "
                  />
                </motion.div>
              );
            })}
          </div>
        )}

      {/* =====================================================
          CHIPS
          Used by Skills
      ====================================================== */}

      {chips.length > 0 && (
        <motion.div
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.35,
            delay: 0.1,
          }}
          className="
            mt-4
            flex
            flex-wrap
            gap-2
          "
        >
          {chips.map((chip, index) => (
            <motion.span
              key={chip}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.25,
                delay: index * 0.035,
              }}
              className="
                rounded-full
                border
                border-border
                bg-surface
                px-2.5
                py-1
                font-open-sans
                text-[11px]
                text-text-secondary
                transition-all
                duration-300
                hover:border-(--accent)/35
                hover:bg-surface-hover
                hover:text-(--accent)
              "
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>
      )}

      {/* =====================================================
          SUGGESTIONS FOR NORMAL TOPICS
      ====================================================== */}

      {topicData.type !== "projects" &&
        topicData.suggestions?.length > 0 &&
        renderSuggestions()}

      {/* =====================================================
          PROJECT WALKTHROUGH
      ====================================================== */}

      {topicData.type === "projects" &&
        projects.length > 0 && (
          <div className="mt-4 space-y-5">

            <AnimatePresence mode="popLayout">
              {projects
                .slice(0, visibleProjects)
                .map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                  >
                    {/* Project Counter */}

                    <div className="mb-2">
                      <span
                        className="
                          font-open-sans
                          text-[11px]
                          text-text-muted
                        "
                      >
                        Project {index + 1} of{" "}
                        {projects.length}
                      </span>
                    </div>

                    {/* Project Card */}

                    <ProjectCard
                      project={project}
                    />
                  </motion.div>
                ))}
            </AnimatePresence>

            {/* =================================================
                SHOW NEXT PROJECT
            ================================================== */}

            {!isLastProject && (
              <motion.button
                type="button"
                onClick={handleNextProject}
                initial={{
                  opacity: 0,
                  y: 6,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  x: 3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  inline-flex
                  cursor-pointer
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-border
                  bg-surface
                  px-3
                  py-2
                  font-open-sans
                  text-xs
                  text-text-secondary
                  transition-all
                  duration-300
                  hover:border-(--accent)/40
                  hover:bg-surface-hover
                  hover:text-(--accent)
                "
              >
                <span>
                  Show Next Project
                </span>

                <span>→</span>
              </motion.button>
            )}

            {/* =================================================
                FINAL PROJECT SUGGESTIONS
            ================================================== */}

            {isLastProject &&
              topicData.suggestions?.length > 0 &&
              renderSuggestions()}
          </div>
        )}
    </div>
  );
};

export default TopicContent;