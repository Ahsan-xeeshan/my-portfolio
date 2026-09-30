import { motion } from "framer-motion";
import avatar from "../assets/avatar-me.jpg";

const TypingIndicator = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 16,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -8,
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex w-full items-start gap-3"
    >
      {/* Avatar */}
      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white/5">
        <img
          src={avatar}
          alt="Nazmul Ahsan"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Typing dots */}
      <div className="pt-5">
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              animate={{
                y: [0, -4, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.15,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 rounded-full bg-white/60"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TypingIndicator;
