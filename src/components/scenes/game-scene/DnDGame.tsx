import { useEffect, useState } from "react";
import TrashContainer from "./trash-container";
import { useGameStore } from "@/stores/game-store";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { LevelData } from "@/constants";
import { cn } from "@/lib/utils";
import { DraggableTrashProps, FallingTrashItem } from "./trash-item";

export function DnDGame({ levelData }: { levelData: LevelData }) {
  const gameState = useGameStore((s) => s.gameState);

  const increaseProgress = useGameStore((s) => s.increaseProgress);
  const decreaseProgress = useGameStore((s) => s.decreaseProgress);

  const handleDragEnd = (e: DragEndEvent) => {
    const draggedElement = e.activatorEvent.target as HTMLElement;

    // Trash item
    const draggedItem = e.active;

    // Container item
    const onDropItem = e.over;
    console.log("Over: " + onDropItem?.id);

    if (!onDropItem) return;

    console.log({ dragItem: draggedItem.data.current?.containerName });
    console.log({ dropContainer: onDropItem.id });

    if (onDropItem.id === draggedItem.data.current?.containerName) {
      increaseProgress(1);

      // Elimino el elemento solo si era el contenedor correcto
      // de lo contrario, regresa a la posicion original
      draggedElement.parentElement?.removeChild(draggedElement);
    } else {
      decreaseProgress(1);
    }
  };
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <TrashSpawner />

      <div
        className={cn(
          "absolute inset-x-0 -bottom-20 z-10 flex justify-evenly transition-all delay-200",
          gameState === "idle" && "translate-y-full",
        )}
      >
        {levelData?.containers.map((container) => (
          <TrashContainer
            key={container.name}
            name={container.name}
            spriteSrc={container.spriteSrc}
          />
        ))}
      </div>
    </DndContext>
  );
}

export function TrashSpawner() {
  const [spawnedTrash, setSpawnedTrash] = useState<DraggableTrashProps[]>([]);
  const levelData = useGameStore((s) => s.levelData);

  // Obtener el array de basura para el nivel actual
  const currentTrash = levelData!.trash;
  const seconds = 1000 / (levelData?.speed ?? 1);

  useEffect(() => {
    // Configurar el intervalo para generar basura cada segundo
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * currentTrash.length);
      const randomTrash = currentTrash[randomIndex];

      // Añadir el nuevo elemento con un ID único
      setSpawnedTrash((prevTrash) => [
        ...prevTrash,
        { ...randomTrash, uniqueId: `${randomTrash.name}_${Date.now()}` },
      ]);
    }, seconds); // Cada segundo

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [currentTrash, seconds]);

  return (
    <div className="absolute top-0 size-full">
      {spawnedTrash.map((item) => (
        <FallingTrashItem key={item.uniqueId} {...item} />
      ))}
    </div>
  );
}
