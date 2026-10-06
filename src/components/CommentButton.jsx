import { motion } from "framer-motion";

const CommentButton = ({ onSendMessage, isTyping = false }) => {
  const handleMoreAboutMe = () => {
    if (isTyping) return;

    onSendMessage("Tell me about yourself", "about");
  };

  const handleSeeMyWork = () => {
    if (isTyping) return;

    onSendMessage("Show me your projects", "projects");
  };

  return (
    <>
      {/* =========================
          Mobile Buttons
      ========================== */}

      <div
        className="
    flex
    w-full
    flex-col
    items-center
    justify-center
    gap-3
    md:hidden
  "
      >
        {/* More About Me */}

        <motion.button
          type="button"
          onClick={handleMoreAboutMe}
          disabled={isTyping}
          whileHover={!isTyping ? { scale: 1.02 } : {}}
          whileTap={!isTyping ? { scale: 0.97 } : {}}
          className="
            group
            relative
            flex
            w-full
            max-w-64
            cursor-pointer
            items-center
            justify-center
            overflow-hidden
            rounded-l-3xl
            rounded-tr-3xl
            bg-(--accent)
            px-6
            py-3
            text-base
            font-medium
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:bg-(--accent-hover)
            hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          <span
            className="
              pointer-events-none
              absolute
              inset-y-0
              -left-full
              w-1/2
              rotate-12
              bg-white/15
              blur-md
              transition-all
              duration-700
              group-hover:left-[120%]
            "
          />

          <span className="relative z-10">More About Me</span>
        </motion.button>

        {/* See My Work */}

        <motion.button
          type="button"
          onClick={handleSeeMyWork}
          disabled={isTyping}
          whileHover={!isTyping ? { scale: 1.02 } : {}}
          whileTap={!isTyping ? { scale: 0.97 } : {}}
          className="
            group
            relative
            flex
            w-full
            max-w-64
            cursor-pointer
            items-center
            justify-center
            overflow-hidden
            rounded-l-3xl
            rounded-tr-3xl
            border-2
            border-(--accent)
            bg-transparent
            px-6
            py-3
            text-base
            font-medium
            text-(--accent)
            shadow-lg
            transition-all
            duration-300
            hover:bg-(--accent)/5
            hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          <span
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-l-3xl
              rounded-tr-3xl
              border-2
              border-(--accent)
              opacity-0
              transition-all
              duration-300
              group-hover:opacity-100
              group-hover:shadow-[0_0_12px_var(--accent),0_0_24px_var(--accent)]
            "
          />

          <span
            className="
              pointer-events-none
              absolute
              inset-0
              bg-(--accent)/0
              transition-all
              duration-300
              group-hover:bg-(--accent)/5
            "
          />

          <span className="relative z-10">See My Work</span>
        </motion.button>
      </div>

      {/* =========================
          Desktop Buttons
      ========================== */}

      <div
        className="
          absolute
          -right-54
          top-32
          hidden
          flex-col
          items-center
          justify-center
          gap-5
          md:flex
        "
      >
        {/* More About Me */}

        <motion.button
          type="button"
          onClick={handleMoreAboutMe}
          disabled={isTyping}
          whileHover={!isTyping ? { scale: 1.03 } : {}}
          whileTap={!isTyping ? { scale: 0.97 } : {}}
          className="
            group
            relative
            flex
            cursor-pointer
            items-center
            justify-center
            gap-2
            overflow-hidden
            rounded-l-3xl
            rounded-tr-3xl
            bg-(--accent)
            px-10
            py-3.5
            text-lg
            font-medium
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:bg-(--accent-hover)
            hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          <span
            className="
              pointer-events-none
              absolute
              inset-y-0
              -left-full
              w-1/2
              rotate-12
              bg-white/15
              blur-md
              transition-all
              duration-700
              group-hover:left-[120%]
            "
          />

          <span className="relative z-10">More About Me</span>
        </motion.button>

        {/* See My Work */}

        <motion.button
          type="button"
          onClick={handleSeeMyWork}
          disabled={isTyping}
          whileHover={!isTyping ? { scale: 1.03 } : {}}
          whileTap={!isTyping ? { scale: 0.97 } : {}}
          className="
            group
            relative
            ml-10
            flex
            cursor-pointer
            items-center
            justify-center
            gap-2
            overflow-hidden
            rounded-l-3xl
            rounded-tr-3xl
            border-2
            border-(--accent)
            bg-transparent
            px-10
            py-3.5
            text-lg
            font-medium
            text-(--accent)
            shadow-xl
            transition-all
            duration-300
            hover:bg-(--accent)/5
            hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          <span
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-l-3xl
              rounded-tr-3xl
              border-2
              border-(--accent)
              opacity-0
              transition-all
              duration-300
              group-hover:opacity-100
              group-hover:shadow-[0_0_12px_var(--accent),0_0_24px_var(--accent)]
            "
          />

          <span
            className="
              pointer-events-none
              absolute
              inset-0
              bg-(--accent)/0
              transition-all
              duration-300
              group-hover:bg-(--accent)/5
            "
          />

          <span className="relative z-10">See My Work</span>
        </motion.button>
      </div>
    </>
  );
};

export default CommentButton;
