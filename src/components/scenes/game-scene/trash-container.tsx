import { type Container } from "@/constants";
import { useGameStore } from "@/stores/game-store";

export default function TrashContainer({ name, spriteSrc }: Container) {
  const increaseProgress = useGameStore((s) => s.increaseProgress);
  const decreaseProgress = useGameStore((s) => s.decreaseProgress);

  const hanleOnDrop = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();

    // Obtener la data del elemento "dropped"
    const trashContainerName = e.dataTransfer.getData("containerName");

    if (name === trashContainerName) {
      increaseProgress(1);
    } else {
      decreaseProgress(1);
    }
  };

  const allowDrag = (e: React.DragEvent<HTMLImageElement>) => {
    // Por default, la data o elementos no pueden ser "soltrados" (dropped) en otros elementos
    // Para permitir el "drop" se debe prevenir el comportamiento default

    e.preventDefault();
  };

  return (
    <div className="select-none" onDrop={hanleOnDrop} onDragOver={allowDrag}>
      <img src={spriteSrc} alt={name} key={name} />
    </div>
  );
}
