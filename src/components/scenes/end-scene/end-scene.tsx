import Next from "@/components/icons/Next";
import Trophy from "@/components/icons/Trophy";
import Undo from "@/components/icons/Undo";
import { cn } from "@/lib/utils";

export default function EndScene() {
  return (
    <section className="relative isolate flex size-full flex-col items-center justify-evenly overflow-hidden p-4 md:p-10">
      <div className="relative flex flex-col items-center justify-center gap-8">
        <p className="text-xl">Logros obtenidos:</p>

        <div className="flex gap-4">
          <GoalUnlocked imageSrc="src/assets/images/trash/bolsa_basura.png" />
          <GoalUnlocked
            imageSrc="/src/assets/images/richard.png"
            className="text-yellow-600"
          />
        </div>

        <h1
          className={cn(
            "text-center uppercase",
            "text-4xl font-bold sm:text-6xl md:text-7xl",
          )}
        >
          <span className="text-muted-foreground">terminar el</span>
          <br />
          <span className="filter-blur animate-lights text-red-500">
            juego basura
          </span>
        </h1>
      </div>

      {/* botones */}
      <div
        className={cn(
          "flex items-center justify-center gap-4",
          "text-2xl text-neutral-50",
        )}
      >
        <button
          className={cn(
            "flex items-center gap-2",
            "bg-neutral-500 p-3 ring-1 ring-muted-foreground hover:bg-neutral-400 active:scale-95",
          )}
          onClick={() => {
            // TODO: dirigir a la escena de inicio y reiniciar el juego (initial state)
          }}
        >
          <Undo className="size-8" />
          INICIO
        </button>
        <button
          className={cn(
            "flex items-center gap-2",
            "bg-neutral-500 p-3 ring-1 ring-muted-foreground hover:bg-neutral-400 active:scale-95",
          )}
          onClick={() => {
            // TODO: dirigir a la escena de creditos
          }}
        >
          <Next className="size-8" />
          CRÉDITOS
        </button>
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
