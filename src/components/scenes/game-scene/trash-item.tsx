import { Trash } from "@/constants";

export default function TrashItem({ name, spriteSrc, containerName }: Trash) {
  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    const item = e.currentTarget;
    const containerName = item.dataset.container!;

    e.dataTransfer.setData("containerName", containerName);
  };

  return (
    <img
      key={name}
      src={spriteSrc}
      alt={name}
      className="h-9 max-w-8"
      draggable={true}
      data-container={containerName} // acceder a la data con element.dataset.container
      onDragStart={handleDragStart}
    />
  );
}
