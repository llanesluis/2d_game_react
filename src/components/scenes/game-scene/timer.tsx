import Clock from "@/components/icons/Clock";
import { calculateMinutesAndSeconds } from "@/utils";
import { useEffect, useState } from "react";

export default function Timer({ timeInSeconds }: { timeInSeconds: number }) {
  const [time, setTime] = useState(timeInSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) return 0;
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex select-none flex-col items-center text-neutral-50">
      <Clock className="size-6" />
      <span className="text-2xl">{calculateMinutesAndSeconds(time)}</span>
    </div>
  );
}
