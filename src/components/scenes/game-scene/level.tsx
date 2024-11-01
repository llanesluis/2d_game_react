import Message from "@/components/icons/Message";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/stores/game-store";
import Timer from "./timer";
import LevelInfoButton from "./level-info-button";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { SadMood } from "@/components/icons/Mood";
import Undo from "@/components/icons/Undo";
import Repeat from "@/components/icons/Repeat";
import TrashContainer from "./trash-container";

export default function Level() {
  const playerName = useGameStore((s) => s.playerName);
  const gameState = useGameStore((s) => s.gameState);
  const progress = useGameStore((s) => s.progress);
  const time = useGameStore((s) => s.time);

  const levelData = useGameStore((s) => s.levelData);

  // const goToNextLevel = useGameStore((s) => s.goToNextLevel);

  const calculateProgressBar = () => {
    if (!levelData?.goal) throw Error("levelData.goal is undefined");
    return (progress / levelData?.goal) * 100;
  };

  // useEffect(() => {
  //   const isLevelCompleted = progress === levelData?.goal;
  //   if (isLevelCompleted) goToNextLevel();
  // }, [goToNextLevel, levelData?.goal, progress]);

  return (
    <div className="relative size-full overflow-hidden">
      <BackgroundImage imageSrc={levelData?.imageSrc} />

      <ResetLevelModal openModal={time === 0} />

      {/* info container */}
      <div
        className={cn(
          "absolute top-0 z-10 h-[120px] w-full",
          "flex flex-col justify-between gap-2",
          "bg-black/70 p-2 backdrop-blur",
          "translate-y-[-100%] transition-all duration-150 ease-out",
          gameState === "running" && "translate-y-0",
        )}
      >
        <div className="flex gap-4">
          <Message className="mt-1 size-10 shrink-0 text-neutral-50" />
          <p
            className="line-clamp-3 w-[70%] text-pretty text-sm"
            dangerouslySetInnerHTML={{
              __html: `<strong>${playerName}</strong>, ${levelData?.text}`,
            }}
          />
        </div>

        <div className="mb-2 flex items-center gap-4 pl-14">
          <div className="flex gap-2">
            {levelData?.trash.map((item) => (
              <img
                src={item.spriteSrc}
                alt={item.name}
                className="h-9 max-w-8"
              />
            ))}
          </div>
        </div>

        <div className="absolute right-2 top-5">
          {gameState === "running" && <Timer />}
        </div>

        {/* todo: extra info  */}
        <div className="absolute bottom-3 left-4">
          <LevelInfoButton />
        </div>
      </div>

      {/* containers //todo: acomodarlos y mejorar */}
      <div
        className={cn(
          "filter-blur absolute inset-x-0 -bottom-20 z-10 flex justify-evenly transition-all delay-200",
          gameState === "idle" && "translate-y-full",
        )}
      >
        {levelData?.containers.map((container) => (
          <TrashContainer
            name={container.name}
            spriteSrc={container.spriteSrc}
          />
        ))}
      </div>

      {/* progress bar */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 z-10",
          "transition-all duration-150 ease-out",
          gameState === "idle" && "translate-y-full",
        )}
      >
        <div className="relative p-2">
          <span className="absolute right-4 top-2 z-10 text-xl text-black">
            {progress}/{levelData?.goal}
          </span>
          <Progress
            className="h-6 w-full bg-neutral-50"
            value={calculateProgressBar()}
          />
        </div>
      </div>
    </div>
  );
}

function BackgroundImage({ imageSrc }: { imageSrc?: string }) {
  return (
    <div className="relative z-[-1] h-full">
      <img
        src={imageSrc}
        alt="Level image"
        className={cn(
          "absolute inset-0 bottom-0 z-[-1] size-full object-cover object-right-bottom",
          // "animate-image-background",
        )}
      />
      <div className="mask-image absolute inset-0 z-[-1] bg-black/20"></div>
    </div>
  );
}

function ResetLevelModal({ openModal }: { openModal: boolean }) {
  const restartLevel = useGameStore((s) => s.restartLevel);
  const resetGameToInitialValues = useGameStore(
    (s) => s.resetGameToInitialValues,
  );

  return (
    <Dialog open={openModal}>
      <DialogContent className="flex flex-col items-center gap-8">
        <SadMood className="size-24 text-red-500" />

        <div className="text-center">
          <h2 className="text-2xl">¡Perdiste!</h2>
          <p>Puedes intentar nuevamente o salir del juego.</p>
        </div>

        {/* botones */}
        <div className="flex items-center justify-center gap-4">
          <button
            className={cn(
              "flex items-center gap-2",
              "bg-neutral-500 p-3 ring-1 ring-muted-foreground hover:bg-neutral-400 active:scale-95",
            )}
            onClick={restartLevel}
          >
            <Repeat className="size-6" />
            REINTENTAR
          </button>
          <button
            className={cn(
              "flex items-center gap-2",
              "bg-red-500 p-3 ring-1 ring-muted-foreground hover:bg-red-400 active:scale-95",
            )}
            onClick={resetGameToInitialValues}
          >
            <Undo className="size-6" />
            SALIR
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
