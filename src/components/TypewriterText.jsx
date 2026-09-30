import { useEffect, useRef, useState } from "react";

const TypewriterText = ({
  text = "",
  speed = 65,
  delay = 0,
  className = "",
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const onCompleteRef = useRef(onComplete);

  // Always keep the latest callback
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let interval = null;
    let timeout = null;
    let index = 0;
    let completed = false;
    const startTyping = () => {
      setDisplayedText("");
      // Empty text
      if (!text) {
        if (!completed) {
          completed = true;
          onCompleteRef.current?.();
        }
        return;
      }
      // Show the first character immediately
      index = 1;
      setDisplayedText(text.slice(0, index));
      interval = setInterval(() => {
        index += 1;
        setDisplayedText(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(interval);
          interval = null;
          if (!completed) {
            completed = true;
            onCompleteRef.current?.();
          }
        }
      }, speed);
    };
    if (delay > 0) {
      timeout = setTimeout(startTyping, delay);
    } else {
      startTyping();
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [text, speed, delay]);
  return <span className={className}> {displayedText} </span>;
};
export default TypewriterText;
