import { cn } from "@/lib/utils";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";
import System from "./icons/System";
import { useTheme } from "./theme-provider";
import ButtonWithSound from "./ui/button-with-sound";

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={cn("contents w-fit")} role="radiogroup">
      <ButtonWithSound
        onClick={() => setTheme("light")}
        aria-checked={theme === "light"}
        aria-label="Switch to light theme"
        className={cn(
          "animation",
          theme === "light" && "text-blue-500",
          "active:scale-90",
        )}
        data-theme-switcher="true"
        role="radio"
        type="button"
      >
        <Sun className="size-7" />
      </ButtonWithSound>

      <ButtonWithSound
        onClick={() => setTheme("system")}
        aria-checked={theme === "system"}
        aria-label="Switch to system theme"
        className={cn(
          "animation",
          theme === "system" && "text-blue-500",
          "active:scale-90",
        )}
        data-theme-switcher="true"
        role="radio"
        type="button"
      >
        <System className="size-7" />
      </ButtonWithSound>

      <ButtonWithSound
        onClick={() => setTheme("dark")}
        aria-checked={theme === "dark"}
        aria-label="Switch to dark theme"
        className={cn(
          "animation",
          theme === "dark" && "text-blue-500",
          "active:scale-90",
        )}
        data-theme-switcher="true"
        role="radio"
        type="button"
      >
        <Moon className="size-7" />
      </ButtonWithSound>
    </div>
  );
}
