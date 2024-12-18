import Start from "@/components/icons/Start";
import User from "@/components/icons/User";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/stores/game-store";
import BackgroundImage from "../background-image";
import useSound from "use-sound";
import ScreenTransition from "@/components/screen-transition";

export default function StartScene() {
  const playerName = useGameStore((s) => s.playerName);
  const setPlayerName = useGameStore((s) => s.setPlayerName);
  const goToGameScene = useGameStore((s) => s.goToGameScene);

  const [playTypingSound] = useSound("/assets/sounds/typing_1.mp3");
  const [playClickSound] = useSound("/assets/sounds/click_1.mp3", {
    volume: 2,
  });

  return (
    <section className="relative isolate flex size-full flex-col justify-between overflow-hidden p-4 md:p-10">
      <ScreenTransition />

      <BackgroundImage imageSrc="/assets/images/places/start_scene.gif" />

      <h1 className="filter-blur text-shadow text-center text-[min(10vw,100px)] font-bold uppercase text-neutral-50">
        RECICLAFT
      </h1>

      <form
        className="flex flex-col justify-center gap-4"
        onSubmit={() => {
          playClickSound();
          goToGameScene();
        }}
      >
        <label
          htmlFor="name"
          className="text-shadow grid text-3xl lowercase text-neutral-50"
        >
          nombre
          <div className="relative flex items-center gap-1">
            <User
              className={cn(
                "absolute left-4 size-8 transition",
                playerName && "text-yellow-500",
              )}
            />
            <input
              type="text"
              className={cn(
                "w-full bg-neutral-900 p-4 pl-16 ring-2 ring-muted-foreground/50",
                playerName && "text-yellow-500",
              )}
              onChange={(e) => {
                playTypingSound();
                setPlayerName(e.target.value);
              }}
              value={playerName || ""}
            />
          </div>
        </label>

        <button
          className={cn(
            "text-shadow relative flex items-center justify-center text-6xl font-bold transition-all",
            "[&:not(:disabled)]:filter-blur [&:not(:disabled)]:text-red-500 [&:not(:disabled)]:hover:text-red-300",
            "disabled:animate-lights disabled:pointer-events-none disabled:text-neutral-500",
          )}
          disabled={!playerName}
        >
          JUGAR
          <Start className="size-12" />
        </button>
      </form>
    </section>
  );
}
