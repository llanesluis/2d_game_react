import { cn } from "@/lib/utils";

interface BackgroundImageProps {
  imageSrc: string;
  opacityEffect?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 80 | 100;
}

export default function BackgroundImage({
  imageSrc,
  opacityEffect = 40,
}: BackgroundImageProps) {
  return (
    <div className="absolute inset-0 z-[-1] h-full select-none">
      <img
        src={imageSrc}
        alt="Level image"
        className={cn(
          "absolute inset-0 z-[-10] size-full",
          "object-cover object-right-bottom",
        )}
      />
      <div
        className={cn(
          "absolute inset-0 z-[-1]",
          `mask-image bg-black/${opacityEffect}`,
        )}
      ></div>
    </div>
  );
}
