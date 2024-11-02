import { cn } from "@/lib/utils";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface DroppableProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  id: string;
  data: object;
}

export function Droppable({ children, id, data }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({ id, data });

  return (
    <div
      className={cn("select-none", isOver && "filter-blur")}
      ref={setNodeRef}
    >
      {children}
    </div>
  );
}

interface DraggableProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  id: string;
  data: object;
}
export function Draggable({ children, id, data }: DraggableProps) {
  const { listeners, attributes, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
      data,
    });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={cn(isDragging && "filter-blur")}
    >
      {children}
    </div>
  );
}
