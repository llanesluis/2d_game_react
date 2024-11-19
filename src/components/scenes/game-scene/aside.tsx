import { cn } from "@/lib/utils";
import LevelMessage from "./levelMessage";
import Coin from "@/components/icons/Coin";
import { useGameStore } from "@/stores/game-store";

export default function Aside() {
  const coins = useGameStore((s) => s.coins);
  const levelData = useGameStore((s) => s.levelData);

  return (
    <>
      <aside
        className={cn(
          "-right-4 max-h-80 w-48 translate-x-full bg-muted p-4",
          "absolute flex flex-col gap-6",
          "border border-muted-foreground/50",
        )}
      >
        <div className="space-y-2">
          <span>monedas:</span>
          <div className="flex w-full items-center gap-1 text-yellow-500">
            <Coin className="size-10" />
            <span className="text-4xl">{coins}</span>
          </div>
        </div>

        <div className="space-y-2">
          <span>basura:</span>
          <div className="grid grid-cols-4 place-items-center gap-1">
            {levelData?.trash.map((item) => (
              <img
                key={item.name}
                src={item.spriteSrc}
                className="max-h-9 max-w-12 object-contain"
              />
            ))}
          </div>
        </div>
      </aside>

      <aside
        className={cn(
          "bottom-0 right-0 z-[-1] h-[420px] w-80 translate-x-full p-4",
          "absolute flex flex-col items-center gap-6",
        )}
      >
        <img
          key={levelData?.level}
          src="/assets/images/kid_loop.gif"
          alt="Persona"
          className={cn("absolute bottom-0 h-64 translate-x-[-40%] rotate-45")}
        />

        <div className="over absolute bottom-[55%] left-4 w-full rounded-[12px] bg-muted p-3">
          <LevelMessage />
          <div className="message-triangle"></div>
        </div>
      </aside>
    </>
  );
}
