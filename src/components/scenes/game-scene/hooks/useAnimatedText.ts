import { useEffect, useState } from "react";
import { animate, Easing, useMotionValue } from "framer-motion";
import useSound from "use-sound";

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
  const [prevText, setPrevText] = useState(() => text);
  const [isSameText, setIsSameText] = useState(true);

  const [playTypingSound] = useSound("/assets/sounds/typing_1.mp3", {
    volume: 0.5,
  });

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
        // Para evitar que se reproduza tantas veces y sature
        if (Math.floor(latest) % 2 === 0) playTypingSound();
        setCursor(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [
    animatedCursor,
    delimiter,
    duration,
    ease,
    isSameText,
    playTypingSound,
    text,
  ]);

  const returnVaue = () => {
    return text.split(delimiter).slice(0, cursor).join(delimiter);
  };

  return returnVaue();
}
