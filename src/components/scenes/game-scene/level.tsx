import { HappyMood, SadMood } from "@/components/icons/Mood";
import Next from "@/components/icons/Next";
import Repeat from "@/components/icons/Repeat";
import Undo from "@/components/icons/Undo";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { Progress } from "@/components/ui/progress";
import { BUFF_COINS, LevelData } from "@/constants";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/stores/game-store";
import { calculateMinutesAndSeconds } from "@/utils";
import { AlertDialogTitle } from "@radix-ui/react-alert-dialog";
import { useEffect } from "react";
import Timer from "./timer";

import Coin from "@/components/icons/Coin";
import Eye from "@/components/icons/Eye";
import ScreenTransition from "@/components/screen-transition";
import ButtonWithSound from "@/components/ui/button-with-sound";
import useSound from "use-sound";
import BackgroundImage from "../background-image";
import Aside from "./aside";
import { DnDGame } from "./dnd-game";
import LevelInfoButton from "./level-info-button";

interface LevelProps {
  levelData: LevelData;
  onCompleteLevel: () => void;
}

export default function Level({ levelData, onCompleteLevel }: LevelProps) {
  const gameState = useGameStore((s) => s.gameState);
  const setGameState = useGameStore((s) => s.setGameState);

  const progress = useGameStore((s) => s.progress);
  const time = useGameStore((s) => s.time);

  const isLevelCompleted = progress === levelData?.goal;

  const hintActive = useGameStore((s) => s.hintActive);
  const deactivateHint = useGameStore((s) => s.deactivateHint);

  const calculateProgressBar = () => {
    if (!levelData?.goal) throw Error("levelData.goal is undefined");
    return (progress / levelData?.goal) * 100;
  };

  useEffect(() => {
    setGameState(isLevelCompleted ? "paused" : "running");
  }, [isLevelCompleted, setGameState]);

  // Quita la bonificacion del color de basuras cuando pasna 10 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      deactivateHint();
    }, 10000);

    if (!hintActive) clearTimeout(timer);

    return () => clearTimeout(timer);
  }, [deactivateHint, hintActive]);

  // Cuando el timepo se agota y se muestra el modal de reseteo,
  // se pone en pausa para evitar que las basuras sigan cayendo
  useEffect(() => {
    if (time === 0) {
      setGameState("paused");
    }
  }, [setGameState, time]);

  return (
    <div className="relative isolate size-full">
      <ScreenTransition />

      <Aside />

      <BackgroundImage imageSrc={levelData!.imageSrc} />

      <ResetLevelModal openModal={time === 0} />

      <LevelCompletedModal
        openModal={isLevelCompleted}
        handleLevelCompleted={onCompleteLevel}
      />

      {gameState !== "idle" && <Timer />}

      {/* info container */}

      <section className="size-full overflow-hidden">
        <DnDGame levelData={levelData} />
      </section>

      <LevelBonifications />

      {/* progress bar */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 z-10",
          "transition-all duration-150 ease-out",
          gameState === "idle" && "translate-y-full",
        )}
      >
        <div className="relative p-2">
          <span className="absolute right-2 top-2 z-10 text-xl text-neutral-200">
            {progress}/{levelData?.goal}
          </span>
          <Progress
            className="h-6 w-full bg-neutral-900"
            value={calculateProgressBar()}
          />
        </div>
      </div>
    </div>
  );
}

function ResetLevelModal({ openModal }: { openModal: boolean }) {
  const restartLevel = useGameStore((s) => s.restartLevel);
  const resetGameToInitialValues = useGameStore(
    (s) => s.resetGameToInitialValues,
  );
  const increaseRetryCounter = useGameStore((s) => s.increaseRetryCounter);

  const [playShowSound] = useSound("/assets/sounds/repeat.mp3", { volume: 2 });

  useEffect(() => {
    if (openModal) {
      playShowSound();
    }
  }, [openModal, playShowSound]);

  return (
    <AlertDialog open={openModal}>
      <AlertDialogContent className="flex flex-col items-center gap-8">
        <AlertDialogTitle>
          <h2 className="text-2xl">¡Perdiste!</h2>
        </AlertDialogTitle>

        <div className="flex items-center gap-4">
          <SadMood className="filter-blur size-20 text-red-500" />
          <img
            src="/assets/images/fail.gif"
            alt="Celebration Kid"
            className="h-52"
          />
          <SadMood className="filter-blur size-20 text-red-500" />
        </div>

        <div className="text-center">
          <p>
            Puedes <strong>intentar nuevamente</strong> o salir del juego.
          </p>
        </div>

        {/* botones */}
        <div className="mb-4 flex items-center justify-center gap-4">
          <ButtonWithSound
            className={cn(
              "flex items-center gap-2",
              "bg-neutral-500 p-3 ring-1 ring-muted-foreground hover:bg-neutral-400 active:scale-95",
            )}
            onClick={() => {
              restartLevel();
              increaseRetryCounter();
            }}
          >
            <Repeat className="size-6" />
            REINTENTAR
          </ButtonWithSound>
          <ButtonWithSound
            className={cn(
              "flex items-center gap-2",
              "bg-red-500 p-3 ring-1 ring-muted-foreground hover:bg-red-400 active:scale-95",
            )}
            onClick={resetGameToInitialValues}
          >
            <Undo className="size-6" />
            SALIR
          </ButtonWithSound>
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

  const [playShowSound] = useSound("/assets/sounds/pass.mp3", { volume: 1.5 });

  useEffect(() => {
    if (openModal) {
      playShowSound();
    }
  }, [openModal, playShowSound]);

  return (
    <AlertDialog open={openModal}>
      <AlertDialogContent className="flex flex-col items-center gap-8">
        <AlertDialogTitle>
          <h2 className="text-2xl">{`¡Completaste el nivel ${levelData?.level}!`}</h2>
        </AlertDialogTitle>

        <div className="flex items-center gap-4">
          <HappyMood className="size-20 text-blue-500" />
          <img
            src="/assets/images/celebrate.gif"
            alt="Celebration Kid"
            className="h-52"
          />
          <HappyMood className="filter-blur size-20 text-blue-500" />
        </div>

        <div className="text-center">
          <p>
            Te quedaron <strong>{calculateMinutesAndSeconds(time)}</strong> de
            tiempo.
          </p>
        </div>

        {/* botones */}
        <ButtonWithSound
          className={cn(
            "mb-4 flex items-center gap-2",
            "bg-neutral-500 p-3 ring-1 ring-muted-foreground hover:bg-neutral-400 active:scale-95",
          )}
          onClick={handleLevelCompleted}
        >
          <Next className="size-6" />
          CONTINUAR
        </ButtonWithSound>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function LevelBonifications() {
  const consumeCoins = useGameStore((s) => s.consumeCoins);
  const coins = useGameStore((s) => s.coins);

  const hintActive = useGameStore((s) => s.hintActive);
  const activateHint = useGameStore((s) => s.activateHint);

  const [spendCoinsSound] = useSound("/assets/sounds/spend-coins.mp3", {
    volume: 3,
  });

  const handleOpenLevelInfo = () => {
    consumeCoins(BUFF_COINS.clue);
    spendCoinsSound();
  };

  const handleActivateColorHint = () => {
    consumeCoins(BUFF_COINS.colorHint);
    activateHint();
    spendCoinsSound();
  };

  return (
    <div className="absolute left-2 top-2 flex w-32 flex-col gap-1 bg-muted/80 p-2 backdrop-blur">
      {/* clue/info bonification */}
      <div className="flex items-center justify-between gap-2">
        <div className="filter-blur flex items-center gap-1 text-yellow-500">
          <Coin className="size-6" />
          <span className="text-2xl">{BUFF_COINS.clue}</span>
        </div>
        <ButtonWithSound disabled={coins < BUFF_COINS.clue}>
          <LevelInfoButton onClick={handleOpenLevelInfo} />
        </ButtonWithSound>
      </div>

      {/* color hint bonification */}
      <div className="flex items-center justify-between gap-2">
        <div className="filter-blur flex items-center gap-1 text-yellow-500">
          <Coin className="size-6" />
          <span className="text-2xl">{BUFF_COINS.colorHint}</span>
        </div>
        <ButtonWithSound
          disabled={coins < BUFF_COINS.colorHint || hintActive}
          className={cn(
            "filter-blur transition-all",
            "hover:stop-animation",
            "disabled:text-muted-foreground",
            coins >= BUFF_COINS.colorHint &&
              "animate-pulse text-purple-500 hover:text-purple-300 active:scale-95",
          )}
          onClick={handleActivateColorHint}
        >
          <Eye className="size-8" />
        </ButtonWithSound>
      </div>
    </div>
  );
}
