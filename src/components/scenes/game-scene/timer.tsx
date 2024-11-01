import Clock from "@/components/icons/Clock";
import { useGameStore } from "@/stores/game-store";
import { calculateMinutesAndSeconds } from "@/utils";
import { useEffect } from "react";

export default function Timer() {
  const time = useGameStore((s) => s.time);
  const decreaseOneSecond = useGameStore((s) => s.decreaseOneSecond);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time === 0) {
        clearInterval(intervalId);
        return;
      }

      decreaseOneSecond();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [decreaseOneSecond, time]);

  return (
    <div className="flex select-none flex-col items-center text-neutral-50">
      <Clock className="size-8" />
      <span className="text-5xl">{calculateMinutesAndSeconds(time)}</span>
    </div>
  );
}
