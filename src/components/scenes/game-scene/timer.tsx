import { useGameStore } from "@/stores/game-store";
import { calculateMinutesAndSeconds } from "@/utils";
import { useEffect } from "react";

export default function Timer() {
  const time = useGameStore((s) => s.time);
  const decreaseOneSecond = useGameStore((s) => s.decreaseOneSecond);
  const isGamePaused = useGameStore((s) => s.gameState === "paused");

  const timerTime = calculateMinutesAndSeconds(time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time === 0 || isGamePaused) {
        clearInterval(intervalId);
        return;
      }

      decreaseOneSecond();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [decreaseOneSecond, isGamePaused, time]);

  return (
    <div className="absolute inset-x-0 z-20 mx-auto size-fit select-none bg-muted px-2">
      <span className="rounded-b text-6xl">{timerTime}</span>
    </div>
  );
}
