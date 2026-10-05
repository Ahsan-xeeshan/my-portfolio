import { useEffect, useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import avatar from "../assets/avatar-me.jpg";

import TypingIndicator from "./TypingIndicator";
import TypewriterText from "./TypewriterText";

import { topics } from "../data/qaData";
import TopicContent from "./TopicContent";

const Chat = ({
  messages = [],
  isTyping = false,
  onSendMessage,
}) => {
  const chatContainerRef = useRef(null);
  const bottomRef = useRef(null);
  const contentRef = useRef(null);

  const [completedMessages, setCompletedMessages] = useState({});

  /*
   * Scroll to the bottom
   */
  const scrollToBottom = (behavior = "smooth") => {
    requestAnimationFrame(() => {
      bottomRef.current?.scrollIntoView({
        behavior,
        block: "end",
      });
    });
  };

  /*
   * Scroll whenever messages / typing / typewriter state changes
   */
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, completedMessages]);

  /*
   * Keep latest content visible while
   * TypewriterText / TopicContent changes height.
   */
  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new ResizeObserver(() => {
      scrollToBottom();
    });

    observer.observe(contentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleIntroComplete = (messageId) => {
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
      className="
        h-full
        min-h-0
        w-full
        overflow-y-auto
        scrollbar-hide

        px-0
        sm:pr-2
      "
    >
      <div
        ref={contentRef}
        className="
          mx-auto
          flex
          w-full
          max-w-4xl
          flex-col

          gap-4
          px-1
          pb-20
          pt-3

          min-[400px]:gap-5
          min-[400px]:px-2
          min-[400px]:pb-24
          min-[400px]:pt-4

          sm:gap-6
          sm:pb-32
        "
      >
        <AnimatePresence initial={false}>
          {messages.map((message) => {
            const isUser = message.role === "user";

            const topicData =
              !isUser && message.topic
                ? topics[message.topic]
                : null;

            const introFinished =
              completedMessages[message.id] === true;

            return (
              <motion.div
                key={message.id}
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
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  flex
                  w-full
                  items-start
                  gap-2

                  min-[400px]:gap-3

                  ${
                    isUser
                      ? "justify-end"
                      : "justify-start"
                  }
                `}
              >
                {/* Assistant Avatar */}
                {!isUser && (
                  <div
                    className="
                      h-9
                      w-9
                      shrink-0
                      overflow-hidden
                      rounded-full
                      bg-surface
                      ring-1
                      ring-border

                      min-[400px]:h-10
                      min-[400px]:w-10

                      sm:h-12
                      sm:w-12
                    "
                  >
                    <img
                      src={avatar}
                      alt="Nazmul Ahsan"
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />
                  </div>
                )}

                {/* Message */}
                <div
                  className={`
                    min-w-0
                    max-w-[88%]

                    min-[400px]:max-w-[82%]

                    sm:max-w-[75%]

                    ${
                      isUser
                        ? "flex flex-col items-end"
                        : ""
                    }
                  `}
                >
                  {isUser ? (
                    /* User Message */
                    <div
                      className="
                        rounded-2xl
                        rounded-tr-md
                        bg-(--accent)
                        px-4
                        py-2.5
                        text-white
                        shadow-soft-2

                        min-[400px]:px-5
                        min-[400px]:py-3
                      "
                    >
                      <p
                        className="
                          font-open-sans
                          text-xs
                          leading-6

                          min-[400px]:text-sm
                          min-[400px]:leading-7
                        "
                      >
                        {message.text}
                      </p>
                    </div>
                  ) : (
                    /* Assistant Message */
                    <div
                      className="
                        pt-0.5
                        text-text-primary
                      "
                    >
                      {/* STEP 1 — Intro types first */}
                      <TypewriterText
                        text={message.text}
                        speed={55}
                        onComplete={() =>
                          handleIntroComplete(
                            message.id
                          )
                        }
                      />

                      {/* STEP 2 — Content appears after typing */}
                      <AnimatePresence>
                        {topicData &&
                          introFinished && (
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
                              <TopicContent
                                topicData={topicData}
                                onSendMessage={
                                  onSendMessage
                                }
                              />
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* Typing Indicator */}
          {isTyping && <TypingIndicator />}
        </AnimatePresence>

        {/* Scroll target */}
        <div
          ref={bottomRef}
          className="h-px w-full"
        />
      </div>
    </div>
  );
};

export default Chat;