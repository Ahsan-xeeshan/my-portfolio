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
    <div className="absolute top-32 -right-54 flex flex-col items-center justify-center gap-5">
      <motion.button
        type="button"
        onClick={handleMoreAboutMe}
        disabled={isTyping}
        whileHover={!isTyping ? { scale: 1.03 } : {}}
        whileTap={!isTyping ? { scale: 0.97 } : {}}
        className="group relative flex cursor-pointer items-center justify-center gap-2 rounded-l-3xl rounded-tr-3xl bg-(--accent) px-10 py-3.5 text-lg font-medium text-white shadow-xl transition-all duration-300 hover:bg-(--accent)/40 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-50"
      >
        More About Me
      </motion.button>

      <motion.button
        type="button"
        onClick={handleSeeMyWork}
        disabled={isTyping}
        whileHover={!isTyping ? { scale: 1.03 } : {}}
        whileTap={!isTyping ? { scale: 0.97 } : {}}
        className="group relative flex cursor-pointer items-center justify-center gap-2 rounded-l-3xl rounded-tr-3xl border-2 border-(--accent) px-10 py-3.5 text-lg font-medium text-(--accent) shadow-xl transition-all duration-300 hover:bg-(--accent) hover:text-white hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-50"
      >
        See My Work
      </motion.button>
    </div>
  );
};

export default CommentButton;