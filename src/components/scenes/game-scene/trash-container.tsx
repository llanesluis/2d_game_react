import { type Container } from "@/constants";

export default function TrashContainer({ name, spriteSrc }: Container) {
  return (
    <div className="select-none">
      <img src={spriteSrc} alt={name} key={name} />
    </div>
  );
}
