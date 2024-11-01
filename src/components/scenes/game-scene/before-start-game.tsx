import { cn } from "@/lib/utils";
import { useGameStore } from "@/stores/game-store";
import ApoyoVisual from "./apoyo-visual";
import Start from "@/components/icons/Start";

export default function BeforeStartGame() {
  const runGame = useGameStore((s) => s.runGame);
  return (
    <div
      className={cn(
        "absolute inset-0 isolate p-20",
        "flex flex-col items-center justify-center gap-2",
        "text-center backdrop-blur",
      )}
    >
      <h1 className="pb-4 text-4xl">Aprende cómo se juega:</h1>
      <p>
        El <strong>contador comenzará</strong> en cuanto inicies el juego.
      </p>
      <p
        dangerouslySetInnerHTML={{
          __html: `Completa la <strong>barra de progreso</strong> antes de que se 
              <strong>agote el tiempo</strong> para avanzar de nivel.`,
        }}
      />
      <StartButton onClick={runGame} />

      <div className="mt-auto">
        <ApoyoVisual />
      </div>
    </div>
  );
}

function StartButton(props: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "relative size-48",
        "filter-blur text-neutral-50 transition-all hover:text-cyan-200 active:scale-95",
        props.className,
      )}
      {...props}
    >
      <Start />
    </button>
  );
}
