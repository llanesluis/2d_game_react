import Next from "@/components/icons/Next";
import { cn } from "@/lib/utils";

export default function SkipButton(
  props: React.HTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      className={cn(
        "flex items-center",
        "select-none text-sm transition-all",
        "text-yellow-500 hover:text-neutral-50 active:scale-95",
      )}
      {...props}
    >
      Saltar
      <Next className={cn("size-4")} />
    </button>
  );
}
