import Next from "@/components/icons/Next";
import Undo from "@/components/icons/Undo";
import ScreenTransition from "@/components/screen-transition";
import ButtonWithSound from "@/components/ui/button-with-sound";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/stores/game-store";
import ReactConfetti from "react-confetti";

export default function EndScene() {
  const playerName = useGameStore((s) => s.playerName);
  const goToCreditsScene = useGameStore((s) => s.goToCreditsScene);
  const retryCounter = useGameStore((s) => s.retryCounter);

  const resetGameToInitialValues = useGameStore(
    (s) => s.resetGameToInitialValues,
  );

  return (
    <section className="relative isolate flex size-full flex-col items-center justify-evenly overflow-hidden p-4 md:p-10">
      <ScreenTransition />

      <ReactConfetti height={1600} />
      <div className="relative flex size-full flex-col items-center justify-between gap-10">
        <h1
          className={cn(
            "text-shadow text-center uppercase",
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
            {retryCounter > 1 && ` solo te tomó ${retryCounter} intentos`}
          </span>
        </p>

        <div className="flex w-full flex-col justify-center gap-4">
          <p className="text-xl">Logros obtenidos:</p>
          <div className="flex flex-wrap justify-center gap-8">
            <GoalUnlocked
              imageSrc="/assets/images/trash/bolsaBasura.png"
              className="from-blue-900 to-green-500"
            />
            <GoalUnlocked imageSrc="/assets/images/goals/richard.png" />

            {retryCounter === 0 && (
              <GoalUnlocked
                imageSrc="/assets/images/goals/trophy.png"
                className="from-yellow-800 to-yellow-500"
              />
            )}

            {retryCounter >= 1 && (
              <GoalUnlocked
                imageSrc="/assets/images/goals/crying.gif"
                className="from-gray-900 to-slate-700"
                text={retryCounter.toString()}
              />
            )}
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
  text?: string;
}
function GoalUnlocked({
  imageSrc = "src/assets/images/trash/bolsa_basura.png",
  text,
  ...props
}: GoalUnlockedProps) {
  return (
    <div
      className={cn(
        "relative size-40 overflow-hidden bg-gradient-to-tr from-neutral-800 to-neutral-400",
        "filter-blur text-neutral-200 ring-2 ring-muted-foreground",
        props.className,
      )}
    >
      <img src={imageSrc} alt="Logro" />
      {text && (
        <span className="filter-blur text-shadow absolute right-2 top-2 text-5xl font-bold text-white">
          {text}
        </span>
      )}
    </div>
  );
}
