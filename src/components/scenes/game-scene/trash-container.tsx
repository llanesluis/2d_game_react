import { type Container } from "@/constants";
import { Droppable } from "./dnd";

export default function TrashContainer({ name, spriteSrc }: Container) {
  return (
    <Droppable id={name} data={{ name, spriteSrc }}>
      <img
        src={spriteSrc}
        alt={name}
        key={name}
        className="pointer-events-none select-none"
      />
    </Droppable>
  );
}
