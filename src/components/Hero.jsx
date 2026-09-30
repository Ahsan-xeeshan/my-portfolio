import { useState } from "react";

import CommandBar from "./CommandBar";
import Intro from "./Intro";
import ThemeToggle from "./ThemeToggle";
import Chat from "./Chat";

import { LuMessageCircleMore } from "react-icons/lu";

import { topics, resolveTopic, fallbackAnswer } from "../data/qaData";

const Hero = () => {
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isSuggestionTyping, setIsSuggestionTyping] = useState(false);

  const handleSendMessage = (input, selectedTopic = null) => {
    if (isTyping) return;
    const trimmedInput = input?.trim();
    if (!trimmedInput && !selectedTopic) return;
    const topic = selectedTopic || resolveTopic(trimmedInput);
    const topicData = topic ? topics[topic] : null;
    const userText = trimmedInput || topicData?.question || "Tell me more";
    const userMessage = { id: Date.now(), role: "user", text: userText };
    const assistantMessage = {
      id: Date.now() + 1,
      role: "assistant",
      topic,
      text: topicData?.intro || fallbackAnswer,
    };
    const fromSuggestion = Boolean(selectedTopic);
    setIsSuggestionTyping(fromSuggestion);
    setIsChatStarted(true);
    setMessages((previous) => [...previous, userMessage]);
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setIsSuggestionTyping(false);
        setMessages((previous) => [...previous, assistantMessage]);
      }, 1000);
    }, 500);
  };

  return (
    <section
      className="relative h-screen overflow-hidden bg-hero-background px-7 pb-8 shadow-lg"
      aria-label="Hero"
    >
      {/* Theme toggle */}
      <div className="absolute right-6 top-6 z-40">
        <ThemeToggle />
      </div>

      {/* Main content */}
      <div className="flex h-full flex-col">
        {/* Chat / Intro area */}
        <div className="min-h-0 flex-1">
          {!isChatStarted ? (
            <Intro onSendMessage={handleSendMessage} isTyping={isTyping} />
          ) : (
            <Chat messages={messages} isTyping={isTyping} />
          )}
        </div>

        {/* Bottom area */}
        <div className="relative z-30 shrink-0 pt-4">
          <CommandBar
            onSendMessage={handleSendMessage}
            isTyping={isTyping}
            isChatStarted={isChatStarted}
            isSuggestionTyping={isSuggestionTyping}
          />

          <div className="mt-4 flex justify-center">
            <p className="flex items-center gap-2 text-center font-open-sans text-sm text-text-muted">
              <LuMessageCircleMore className="shrink-0 text-base" />

              <span>
                You can ask me about: age · CV · education · experience · awards
                · hobbies
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
