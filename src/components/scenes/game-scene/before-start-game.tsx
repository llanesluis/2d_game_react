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
        "absolute inset-0 isolate p-10",
        "flex flex-col items-center justify-center gap-8",
        "backdrop-blur",
      )}
    >
      <h1 className="text-shadow text-4xl [--shadow-color:hsl(var(--muted-foreground))]">
        Aprende cómo se juega:
      </h1>
      <p
        className="text-sm opacity-90"
        dangerouslySetInnerHTML={{
          __html: `El <strong>contador comenzará</strong> en cuanto inicies el juego. Completa la <strong>barra de progreso</strong> antes de que se 
          <strong>agote el tiempo</strong> para avanzar de nivel.`,
        }}
      />

      <ApoyoVisual />

      <div className="mt-auto">
        <StartButton onClick={() => runGame()} />
      </div>
    </div>
  );
}

function StartButton(props: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonWithSound
      className={cn(
        "relative flex items-center bg-yellow-500 py-2 pl-4 transition-all",
        "hover:filter-blur opacity-80 hover:opacity-100 active:scale-95",
        "border border-muted-foreground",
        props.className,
      )}
      {...props}
    >
      <span className="text-shadow text-3xl">COMENZAR</span>
      <Start className="size-10" />
    </ButtonWithSound>
  );
}
