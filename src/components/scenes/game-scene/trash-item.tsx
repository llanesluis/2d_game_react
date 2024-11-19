import { Trash } from "@/constants";
import { Draggable } from "./dnd";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { useGameStore } from "@/stores/game-store";

export interface DraggableTrashProps extends Trash {
  uniqueId: string;
}

export default function TrashItem({
  name,
  spriteSrc,
  containerName,
  uniqueId,
  containerColor,
}: DraggableTrashProps) {
  const uniqueIdMemo = useMemo(() => uniqueId, [uniqueId]);
  const hintActive = useGameStore((s) => s.hintActive);

  return (
    <Draggable id={uniqueIdMemo} data={{ name, spriteSrc, containerName }}>
      <img
        key={name}
        src={spriteSrc}
        alt={name}
        className={cn(
          "max-h-[4.5rem] max-w-[3.5rem]",
          "shadow-black drop-shadow-2xl",
        )}
        draggable={true}
      />
      <span
        className={cn("absolute inset-0 z-[-1] rounded-full blur-md")}
        style={{ backgroundColor: hintActive ? containerColor : "transparent" }}
      />
    </Draggable>
  );
}

export function FallingTrashItem(props: DraggableTrashProps) {
  const initialPosX = useMemo(() => `${Math.random() * 90}%`, []);

  const gameState = useGameStore((s) => s.gameState);

  return (
    <span
      className={cn(
        "animate-fall absolute isolate inline-flex",
        "active:pause-animation hover:pause-animation",
        gameState === "paused" && "pause-animation",
      )}
      style={{ left: initialPosX }}
    >
      <TrashItem {...props} />
    </span>
  );
}
