import { useEffect, useState } from "react";
import TrashContainer from "./trash-container";
import { useGameStore } from "@/stores/game-store";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { LevelData } from "@/constants";
import { cn } from "@/lib/utils";
import { DraggableTrashProps, FallingTrashItem } from "./trash-item";
import useSound from "use-sound";

export function DnDGame({ levelData }: { levelData: LevelData }) {
  const increaseProgress = useGameStore((s) => s.increaseProgress);
  const decreaseProgress = useGameStore((s) => s.decreaseProgress);

  const [currentStreak, setCurrentStreak] = useState(0);

  // sound effects
  const [playCorrectSound] = useSound("/assets/sounds/correct.mp3", {
    volume: 2,
  });
  const [playIncorrectSound] = useSound("/assets/sounds/wrong.mp3");

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
      playCorrectSound();
      increaseProgress(1);

      // Sumar un punto al contador de aciertos seguidos para una bonificación
      setCurrentStreak((prev) => prev + 1);

      // Elimino el elemento solo si era el contenedor correcto
      // de lo contrario, regresa a la posicion original
      draggedElement.parentElement?.removeChild(draggedElement);
    } else {
      playIncorrectSound();
      decreaseProgress(1);

      // Si el contenedor no es correcto, restaurar el punto de bonificación
      setCurrentStreak(0);
    }
  };

  const addCoins = useGameStore((s) => s.addCoins);
  const [playCoinsSound] = useSound("/assets/sounds/earn-coins.mp3", {
    volume: 3,
  });

  useEffect(() => {
    if (currentStreak <= 0) return;

    if (currentStreak % 5 === 0) {
      addCoins(2);
      playCoinsSound();
    }
  }, [addCoins, currentStreak, playCoinsSound]);

  return (
    <DndContext onDragEnd={handleDragEnd} autoScroll={false}>
      <TrashSpawner />

      <div
        className={cn(
          "absolute inset-x-0 -bottom-20 z-[-1] flex justify-evenly",
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
  const gameState = useGameStore((s) => s.gameState);

  // Obtener el array de basura para el nivel actual
  const currentTrash = levelData!.trash;
  const seconds = 1000 / (levelData?.speed ?? 1);

  useEffect(() => {
    // Configurar el intervalo para generar basura cada segundo
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * currentTrash.length);
      const randomTrash = currentTrash[randomIndex];

      // Solo generar nueva basura cuando el juego esté corriendo
      if (gameState !== "running") return;

      // Añadir el nuevo elemento con un ID único
      setSpawnedTrash((prevTrash) => [
        ...prevTrash,
        { ...randomTrash, uniqueId: `${randomTrash.name}_${Date.now()}` },
      ]);
    }, seconds); // Cada segundo

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [currentTrash, gameState, seconds]);

  return (
    <div className="absolute top-0 size-full">
      {spawnedTrash.map((item) => (
        <FallingTrashItem key={item.uniqueId} {...item} />
      ))}
    </div>
  );
}
