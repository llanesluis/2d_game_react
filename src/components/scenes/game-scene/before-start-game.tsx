import { cn } from "@/lib/utils";
import { useGameStore } from "@/stores/game-store";
import ApoyoVisual from "./apoyo-visual";
import Start from "@/components/icons/Start";
import ButtonWithSound from "@/components/ui/button-with-sound";
import Alert from "@/components/icons/Alert";
import Eye from "@/components/icons/Eye";

export default function BeforeStartGame() {
  const runGame = useGameStore((s) => s.runGame);

  return (
    <div
      className={cn(
        "absolute inset-0 isolate p-10",
        "flex flex-col items-center justify-center gap-6",
        "overflow-hidden",
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

      <div
        className={cn(
          "relative flex w-full flex-col items-center justify-center gap-1",
          "before:border-y-2 before:border-muted-foreground",
          "before:-rotate-2 before:bg-purple-900/70",
          "before:absolute before:inset-0 before:z-[-1] before:size-full",
          "before:scale-x-125 before:scale-y-105",
        )}
      >
        <h3 className="text-shadow text-xl text-purple-200">Combinaciones</h3>

        <ApoyoVisual />
      </div>

      <div
        className={cn(
          "relative flex size-full flex-col items-center justify-center gap-2 p-1",
          "before:border-y-2 before:border-muted-foreground",
          "before:-rotate-2 before:bg-pink-500/70",
          "before:absolute before:inset-0 before:z-[-1] before:size-full",
          "before:scale-x-125 before:scale-y-105",
        )}
      >
        <h3 className="text-shadow text-xl text-pink-200">Bonificaciones</h3>
        <div className="flex w-full items-center justify-center gap-4">
          <div className="flex items-center gap-4">
            <span className="max-w-56 text-wrap text-right text-xs">
              Abre un modal con los contenedores y sus basuras. ¡El tiempo
              <span className="text-shadow text-pink-200">
                {" "}
                seguirá corriendo
              </span>
              !
            </span>
            <Alert className="filter-blur size-10 text-pink-200" />
          </div>
          <div className="h-full w-1 bg-pink-200" />

          <div className="flex items-center gap-4">
            <Eye className="filter-blur size-10 text-pink-200" />
            <span className="max-w-56 text-wrap text-xs">
              Por <span className="text-shadow text-pink-200">10 segundos</span>{" "}
              podrás ver el color del contenedor de cada basura
            </span>
          </div>
        </div>
        <p></p>
      </div>

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
