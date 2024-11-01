import { Trash } from "@/constants";

export default function TrashItem({ name, spriteSrc, containerName }: Trash) {
  return <img key={name} src={spriteSrc} alt={name} className="h-9 max-w-8" />;
}
