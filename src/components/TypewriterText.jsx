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

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let interval;
    let timeout;
    let index = 0;
    let completed = false;

    const finish = () => {
      if (!completed) {
        completed = true;
        onCompleteRef.current?.();
      }
    };

    const startTyping = () => {
      setDisplayedText("");

      if (!text) {
        finish();
        return;
      }

      // Show first character immediately
      index = 1;
      setDisplayedText(text.slice(0, index));

      interval = setInterval(() => {
        index += 1;

        setDisplayedText(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(interval);
          interval = null;
          finish();
        }
      }, speed);
    };

    if (delay > 0) {
      timeout = setTimeout(startTyping, delay);
    } else {
      startTyping();
    }

    return () => {
      if (timeout) clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayedText}
    </span>
  );
};

export default TypewriterText;