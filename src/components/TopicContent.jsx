import { useState } from "react";
import { motion } from "framer-motion";
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
} from "react-icons/fa";
import TypewriterText from "./TypewriterText";
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
};
const TopicContent = ({ topicData }) => {
  const [completedCount, setCompletedCount] = useState(0);
  if (!topicData) return null;
  const items = topicData.list
    ? topicData.list.map((item) => ({ type: "list", ...item }))
    : (topicData.chips || []).map((chip) => ({ type: "chip", text: chip }));
  if (!items.length) return null;
  const handleItemComplete = () => {
    setTimeout(() => {
      setCompletedCount((previous) => previous + 1);
    }, 180);
  };
  return (
    <div className="mt-5">
      {" "}
      {/* ========================= LIST ========================== */}{" "}
      {topicData.list && (
        <div className="space-y-2">
          {" "}
          {items.map((item, index) => {
            if (index > completedCount) {
              return null;
            }
            const Icon = iconMap[item.icon] || FaCheck;
            const isCurrent = index === completedCount;
            return (
              <motion.div
                key={`${item.text}-${index}`}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex items-start gap-3"
              >
                {" "}
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-(--accent)">
                  {" "}
                  <Icon className="text-sm" />{" "}
                </span>{" "}
                <p className="font-open-sans text-sm leading-6 text-base-content/80">
                  {" "}
                  {isCurrent ? (
                    <TypewriterText
                      key={`list-${index}`}
                      text={item.text}
                      speed={22}
                      onComplete={handleItemComplete}
                    />
                  ) : (
                    item.text
                  )}{" "}
                </p>{" "}
              </motion.div>
            );
          })}{" "}
        </div>
      )}{" "}
      {/* ========================= CHIPS ========================== */}{" "}
      {topicData.chips && (
        <div className="flex flex-wrap gap-x-2 gap-y-2">
          {" "}
          {items.map((item, index) => {
            if (index > completedCount) {
              return null;
            }
            const isCurrent = index === completedCount;
            const isLast = index === items.length - 1;
            return (
              <motion.span
                key={`${item.text}-${index}`}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="font-open-sans text-sm text-base-content/75"
              >
                {" "}
                {isCurrent ? (
                  <TypewriterText
                    key={`chip-${index}`}
                    text={item.text}
                    speed={18}
                    onComplete={handleItemComplete}
                  />
                ) : (
                  item.text
                )}{" "}
                {!isLast && (
                  <span className="ml-2 text-base-content/30"> · </span>
                )}{" "}
              </motion.span>
            );
          })}{" "}
        </div>
      )}{" "}
    </div>
  );
};
export default TopicContent;
