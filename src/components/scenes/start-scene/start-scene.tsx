import Start from "@/components/icons/Start";
import User from "@/components/icons/User";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/stores/game-store";

export default function StartScene() {
  const playerName = useGameStore((s) => s.playerName);
  const setPlayerName = useGameStore((s) => s.setPlayerName);
  const goToGameScene = useGameStore((s) => s.goToGameScene);

  return (
    <section className="relative isolate flex size-full flex-col justify-between overflow-hidden p-4 md:p-10">
      <BackgroundImage />

      <h1 className="filter-blur text-center text-[min(10vw,100px)] font-bold uppercase text-neutral-50">
        RECICLAFT
      </h1>

      <form
        className="flex flex-col justify-center gap-4"
        onSubmit={goToGameScene}
      >
        <label
          htmlFor="name"
          className="grid text-3xl lowercase text-neutral-50"
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
              onChange={(e) => setPlayerName(e.target.value)}
              value={playerName || ""}
            />
          </div>
        </label>

        <button
          className={cn(
            "relative flex items-center justify-center",
            "[&:not(:disabled)]:filter-blur text-6xl font-bold text-red-500 transition-all hover:text-red-300",
            "disabled:pointer-events-none disabled:text-neutral-500",
            "disabled:animate-lights",
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

function BackgroundImage() {
  return (
    <>
      <img
        src="/src/assets/images/places/start_scene.gif"
        alt="Start"
        className="absolute inset-0 z-[-1] size-full object-cover object-center"
      />
      <div className="mask-image absolute inset-0 z-[-1] bg-black/80"></div>
    </>
  );
}
