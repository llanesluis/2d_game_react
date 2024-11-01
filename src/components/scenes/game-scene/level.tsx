import Check from "@/components/icons/Check";
import Close from "@/components/icons/Close";
import Message from "@/components/icons/Message";
import { HappyMood, SadMood } from "@/components/icons/Mood";
import Next from "@/components/icons/Next";
import Repeat from "@/components/icons/Repeat";
import Undo from "@/components/icons/Undo";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { Progress } from "@/components/ui/progress";
import { LevelData } from "@/constants";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/stores/game-store";
import { calculateMinutesAndSeconds } from "@/utils";
import { useEffect } from "react";
import LevelInfoButton from "./level-info-button";
import Timer from "./timer";
import TrashContainer from "./trash-container";
import { AlertDialogTitle } from "@radix-ui/react-alert-dialog";
import { useAnimatedText } from "./hooks/useAnimatedText";
import TrashItem from "./trash-item";

interface LevelProps {
  levelData: LevelData;
  onCompleteLevel: () => void;
}

export default function Level({ levelData, onCompleteLevel }: LevelProps) {
  const playerName = useGameStore((s) => s.playerName);
  const gameState = useGameStore((s) => s.gameState);
  const setGameState = useGameStore((s) => s.setGameState);

  const progress = useGameStore((s) => s.progress);
  const time = useGameStore((s) => s.time);

  const isLevelCompleted = progress === levelData?.goal;

  const getIntroMessage = () => {
    if (levelData?.level === 1)
      return `Hola, qué bueno que estás aquí, <strong>${playerName}</strong>.`;
    if (levelData?.level === 2)
      return `!Lo hiciste bien! Gracias por venir, <strong>${playerName}</strong>.`;
    if (levelData?.level === 3)
      return `¡Es un desastre! Qué bueno que llegaste, <strong>${playerName}</strong>.`;
  };

  const text = `${getIntroMessage()} ${levelData?.text}`;
  const animatedText = useAnimatedText({
    text,
    delimiter: " ",
  });

  const calculateProgressBar = () => {
    if (!levelData?.goal) throw Error("levelData.goal is undefined");
    return (progress / levelData?.goal) * 100;
  };

  useEffect(() => {
    setGameState(isLevelCompleted ? "paused" : "running");
  }, [isLevelCompleted, setGameState]);

  return (
    <div className="relative size-full overflow-hidden">
      <BackgroundImage imageSrc={levelData?.imageSrc} />

      <ResetLevelModal openModal={time === 0} />

      <LevelCompletedModal
        openModal={isLevelCompleted}
        handleLevelCompleted={onCompleteLevel}
      />

      {/* info container */}
      <div
        className={cn(
          "absolute top-0 z-10 h-[130px] w-full",
          "flex flex-col justify-between gap-2",
          "bg-black/70 p-2 backdrop-blur",
          "mt-auto",
        )}
      >
        <div className="flex gap-4">
          <Message className="mt-1 size-10 shrink-0 text-neutral-50" />
          <p
            className="line-clamp-3 w-[75%] text-pretty text-sm"
            dangerouslySetInnerHTML={{
              __html: animatedText,
            }}
          />
        </div>

        <div className="mb-2 flex items-center gap-4 pl-14">
          <div className="flex gap-2">
            {levelData?.trash.map((item) => (
              <TrashItem key={item.name} {...item} />
            ))}
          </div>
        </div>

        <div className="absolute right-2 top-5">
          {gameState !== "idle" && <Timer />}
        </div>

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
            key={container.name}
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
    <div className="relative z-[-1] h-full select-none">
      <img
        src={imageSrc}
        alt="Level image"
        className={cn(
          "absolute inset-0 bottom-0 z-[-1] size-full object-cover object-right-bottom",
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
    <AlertDialog open={openModal}>
      <AlertDialogContent className="flex flex-col items-center gap-8">
        <AlertDialogTitle>
          <h2 className="text-2xl">¡Perdiste!</h2>
        </AlertDialogTitle>

        <div className="flex items-center gap-4">
          <Close className="filter-blur size-20 text-blue-500" />
          <SadMood className="filter-blur size-40 text-red-500" />
          <Close className="filter-blur size-20 text-blue-500" />
        </div>

        <div className="text-center">
          <p>
            Puedes <strong>intentar nuevamente</strong> o salir del juego.
          </p>
        </div>

        {/* botones */}
        <div className="mb-4 flex items-center justify-center gap-4">
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
      </AlertDialogContent>
    </AlertDialog>
  );
}

function LevelCompletedModal({
  openModal,
  handleLevelCompleted,
}: {
  openModal: boolean;
  handleLevelCompleted: () => void;
}) {
  const levelData = useGameStore((s) => s.levelData);
  const time = useGameStore((s) => s.time);

  return (
    <AlertDialog open={openModal}>
      <AlertDialogContent className="flex flex-col items-center gap-8">
        <AlertDialogTitle>
          <h2 className="text-2xl">{`¡Completaste el nivel ${levelData?.level}!`}</h2>
        </AlertDialogTitle>

        <div className="flex items-center gap-4">
          <Check className="filter-blur size-20 text-blue-500" />
          <HappyMood className="filter-blur size-40 text-green-500" />
          <Check className="filter-blur size-20 text-blue-500" />
        </div>

        <div className="text-center">
          <p>
            Te quedaron <strong>{calculateMinutesAndSeconds(time)}</strong> de
            tiempo.
          </p>
        </div>

        {/* botones */}
        <button
          className={cn(
            "mb-4 flex items-center gap-2",
            "bg-neutral-500 p-3 ring-1 ring-muted-foreground hover:bg-neutral-400 active:scale-95",
          )}
          onClick={handleLevelCompleted}
        >
          <Next className="size-6" />
          CONTINUAR
        </button>
      </AlertDialogContent>
    </AlertDialog>
  );
}
