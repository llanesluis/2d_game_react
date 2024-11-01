import { type Container } from "@/constants";

export default function TrashContainer({ name, spriteSrc }: Container) {
  return (
    <div>
      <img src={spriteSrc} alt={name} key={name} />
    </div>
  );
}
