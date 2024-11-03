import { cn } from "@/lib/utils";
import { useGameStore } from "@/stores/game-store";
import ApoyoVisual from "./apoyo-visual";
import Start from "@/components/icons/Start";
import ButtonWithSound from "@/components/ui/button-with-sound";

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
      <StartButton onClick={() => runGame()} />

      <div className="mt-auto text-left">
        <ApoyoVisual />
      </div>
    </div>
  );
}

function StartButton(props: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonWithSound
      className={cn(
        "relative size-48 transition-all",
        "hover:filter-blur opacity-80 hover:opacity-100 active:scale-95",
        props.className,
      )}
      {...props}
    >
      <Start />
    </ButtonWithSound>
  );
}
