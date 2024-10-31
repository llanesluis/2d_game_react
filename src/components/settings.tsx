import More from "./icons/More";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { VolumeMinus, VolumeOff, VolumePlus } from "./icons/Volume";
import ThemeSelector from "./theme-selector";
import { cn } from "@/lib/utils";

export default function Settings() {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center">
        <More className="size-6" />
      </PopoverTrigger>

      <PopoverContent className="w-fit border-muted-foreground bg-muted">
        <aside className={cn("flex flex-col items-center gap-4")}>
          <button className="flex size-8 items-center justify-center active:scale-90">
            <VolumeMinus />
          </button>
          <button className="flex size-8 items-center justify-center active:scale-90">
            <VolumeOff />
          </button>
          <button className="flex size-8 items-center justify-center active:scale-90">
            <VolumePlus />
          </button>

          <ThemeSelector />
        </aside>
      </PopoverContent>
    </Popover>
  );
}
