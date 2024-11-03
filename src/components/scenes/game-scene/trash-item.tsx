import { Trash } from "@/constants";
import { Draggable } from "./dnd";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

export interface DraggableTrashProps extends Trash {
  uniqueId: string;
}

export default function TrashItem({
  name,
  spriteSrc,
  containerName,
  uniqueId,
}: DraggableTrashProps) {
  const uniqueIdMemo = useMemo(() => uniqueId, [uniqueId]);

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
    </Draggable>
  );
}

export function FallingTrashItem(props: DraggableTrashProps) {
  const initialPosX = useMemo(() => `${Math.random() * 80}vw`, []);

  return (
    <span
      className={cn(
        "animate-fall absolute inline-flex",
        "active:stop-animation hover:stop-animation",
      )}
      style={{ left: initialPosX }}
    >
      <TrashItem {...props} />
    </span>
  );
}
