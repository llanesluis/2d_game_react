import { cn } from "@/lib/utils";
import More from "./icons/More";
import { VolumeMinus, VolumeOff, VolumePlus } from "./icons/Volume";
import ThemeSelector from "./theme-selector";
import ButtonWithSound from "./ui/button-with-sound";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface SettingsProps {
  volumeUp: () => void;
  volumeDown: () => void;
  volumeOff: () => void;
}

export default function Settings({
  volumeDown,
  volumeUp,
  volumeOff,
}: SettingsProps) {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center">
        <More className="size-6" />
      </PopoverTrigger>

      <PopoverContent className="w-fit border-muted-foreground bg-muted">
        <aside className={cn("flex flex-col items-center gap-4")}>
          <ButtonWithSound
            className="flex size-8 items-center justify-center active:scale-90"
            onClick={() => volumeDown()}
          >
            <VolumeMinus />
          </ButtonWithSound>
          <ButtonWithSound
            className="flex size-8 items-center justify-center active:scale-90"
            onClick={() => volumeOff()}
          >
            <VolumeOff />
          </ButtonWithSound>
          <ButtonWithSound
            className="flex size-8 items-center justify-center active:scale-90"
            onClick={() => volumeUp()}
          >
            <VolumePlus />
          </ButtonWithSound>

          <ThemeSelector />
        </aside>
      </PopoverContent>
    </Popover>
  );
}
