import Next from "@/components/icons/Next";
import Trophy from "@/components/icons/Trophy";
import Undo from "@/components/icons/Undo";
import ButtonWithSound from "@/components/ui/button-with-sound";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/stores/game-store";
import ReactConfetti from "react-confetti";

export default function EndScene() {
  const playerName = useGameStore((s) => s.playerName);
  const goToCreditsScene = useGameStore((s) => s.goToCreditsScene);

  const resetGameToInitialValues = useGameStore(
    (s) => s.resetGameToInitialValues,
  );

  return (
    <section className="relative isolate flex size-full flex-col items-center justify-evenly overflow-hidden p-4 md:p-10">
      <ReactConfetti height={1600} />
      <div className="relative flex size-full flex-col items-center justify-between gap-10">
        <h1
          className={cn(
            "text-center uppercase",
            "text-wrap text-7xl font-bold",
          )}
        >
          <span className="text-neutral-700 dark:text-neutral-200">GAME</span>{" "}
          <span className="filter-blur animate-lights text-red-500">OVER</span>
        </h1>

        <p className="line-clamp-2 flex w-full flex-col self-start text-ellipsis text-lg">
          <strong>{`${playerName}:`}</strong>
          <span>
            Ahora eres un experto del reciclaje, esta es tu recompensa por
            completar el juego basura...
          </span>
        </p>

        <div className="mt-auto flex flex-col gap-2">
          <p className="text-xl">Logros obtenidos:</p>
          <div className="flex gap-4">
            <GoalUnlocked imageSrc="src/assets/images/trash/bolsaBasura.png" />
            <GoalUnlocked
              imageSrc="/assets/images/richard.png"
              className="text-yellow-600"
            />
          </div>
        </div>

        {/* botones */}
        <div
          className={cn(
            "flex items-center justify-center gap-4",
            "text-2xl text-neutral-50",
          )}
        >
          <ButtonWithSound
            className={cn(
              "flex items-center gap-2",
              "bg-neutral-500 p-3 ring-1 ring-muted-foreground hover:bg-neutral-400 active:scale-95",
            )}
            onClick={resetGameToInitialValues}
          >
            <Undo className="size-6" />
            INICIO
          </ButtonWithSound>
          <ButtonWithSound
            className={cn(
              "flex items-center gap-2",
              "bg-neutral-500 p-3 ring-1 ring-muted-foreground hover:bg-neutral-400 active:scale-95",
            )}
            onClick={goToCreditsScene}
          >
            <Next className="size-6" />
            CRÉDITOS
          </ButtonWithSound>
        </div>
      </div>
    </section>
  );
}

interface GoalUnlockedProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
}
function GoalUnlocked({
  imageSrc = "src/assets/images/trash/bolsa_basura.png",
  ...props
}: GoalUnlockedProps) {
  return (
    <div
      className={cn(
        "relative size-56 bg-gradient-to-tr from-red-900 to-red-500",
        "filter-blur text-neutral-200 ring-2 ring-muted-foreground",
        props.className,
      )}
    >
      <img src={imageSrc} alt="Logro" />
      <Trophy className="absolute inset-0 m-1 size-14" />
    </div>
  );
}
