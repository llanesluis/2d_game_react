import { useEffect, useState } from "react";
import { animate, Easing, useMotionValue } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  delimiter?: "" | " ";
  duration?: number;
  ease?: Easing;
};

export function useAnimatedText({
  text,
  delimiter = "",
  duration = 3,
  ease = "linear",
}: AnimatedTextProps) {
  const animatedCursor = useMotionValue(0);
  const [cursor, setCursor] = useState(0);
  const [prevText, setPrevText] = useState(text);
  const [isSameText, setIsSameText] = useState(true);

  if (prevText !== text) {
    setPrevText(text);
    setIsSameText(text.startsWith(prevText));

    if (!text.startsWith(prevText)) {
      setCursor(0);
    }
  }

  useEffect(() => {
    if (!isSameText) {
      animatedCursor.jump(0);
    }

    const controls = animate(animatedCursor, text.split(delimiter).length, {
      duration,
      ease,
      onUpdate(latest) {
        setCursor(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [animatedCursor, delimiter, duration, ease, isSameText, text]);

  return text.split(delimiter).slice(0, cursor).join(delimiter);
}
