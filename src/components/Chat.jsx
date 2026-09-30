import { useEffect, useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import avatar from "../assets/avatar-me.jpg";

import TypingIndicator from "./TypingIndicator";

import TypewriterText from "./TypewriterText";

import { topics } from "../data/qaData";

import TopicContent from "./TopicContent";

const Chat = ({ messages = [], isTyping = false }) => {
  const chatContainerRef = useRef(null);
  const bottomRef = useRef(null);

  // Track which assistant messages have finished typing
  const [completedMessages, setCompletedMessages] = useState({});

  // Automatically scroll to newest content
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isTyping, completedMessages]);

  const handleIntroComplete = (messageId) => {
    // Small pause after the topic/intro finishes
    setTimeout(() => {
      setCompletedMessages((previous) => ({
        ...previous,
        [messageId]: true,
      }));
    }, 500);
  };

  return (
    <div
      ref={chatContainerRef}
      className="h-full overflow-y-auto pr-2 scrollbar-hide"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-2 pb-8 pt-4">
        <AnimatePresence initial={false}>
          {messages.map((message) => {
            const isUser = message.role === "user";

            const topicData =
              !isUser && message.topic ? topics[message.topic] : null;

            const introFinished = completedMessages[message.id] === true;

            return (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`flex w-full items-start gap-3 ${
                  isUser ? "justify-end" : "justify-start"
                }`}
              >
                {/* Assistant avatar */}
                {!isUser && (
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white/5">
                    <img
                      src={avatar}
                      alt="Nazmul Ahsan"
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}

                {/* Message */}
                <div
                  className={`max-w-[75%] ${
                    isUser ? "flex flex-col items-end" : ""
                  }`}
                >
                  {isUser ? (
                    /* User message */
                    <div className="rounded-2xl rounded-tr-md bg-(--accent) px-5 py-3 text-white shadow-soft-2">
                      <p className="font-open-sans text-sm leading-7">
                        {message.text}
                      </p>
                    </div>
                  ) : (
                    /* Assistant message */
                    <div className="pt-1">
                      {/* STEP 1
                          Topic / intro types completely first
                      */}
                      <TypewriterText
                        text={message.text}
                        speed={55}
                        onComplete={() => handleIntroComplete(message.id)}
                      />

                      {/* STEP 2
                          Only starts AFTER intro is completely finished
                      */}
                      <AnimatePresence>
                        {topicData && introFinished && (
                          <motion.div
                            key={`topic-${message.id}`}
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
                              ease: "easeOut",
                            }}
                          >
                            <TopicContent topicData={topicData} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* Typing indicator */}
          {isTyping && <TypingIndicator />}
        </AnimatePresence>

        <div ref={bottomRef} className="h-px w-full" />
      </div>
    </div>
  );
};

export default Chat;
