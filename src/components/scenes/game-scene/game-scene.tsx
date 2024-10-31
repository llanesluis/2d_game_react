import { usePlayerName } from "@/components/context/player-provider";
import { cn } from "@/lib/utils";
import Message from "../../icons/Message";
import { Progress } from "../../ui/progress";
import LevelInfoButton from "./level-info-button";
import SkipButton from "./skip-button";
import Timer from "./timer";
import Start from "@/components/icons/Start";
import { useState } from "react";

type Level = {
  time: number;
  imageSrc: string;
  text: string;
  goal: number;
  trash: [
    {
      name: string;
      sprite: string;
      containerName: string; //todo: hacer un type con los nombres de los contenedores
    },
  ];
  containers: [
    {
      name: string; //todo: hacer un type con los nombres de los contenedores
      sprite: string;
    },
  ];
};

const NIVELES = [
  {
    time: 90,
    imageSrc: "/src/assets/images/places/escuela.gif",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint neque explicabo veritatis eius necessitatibus minus est excepturi, eos recusandae et. Dolores vel rerum repudiandae nam, illum quidem quos.",
    goal: 20,
    trash: [
      {
        name: "platano",
        sprite: "/src/assets/images/trash/platano.png",
        containerName: "",
      },
      //todo: las demas basuras
    ],
    containers: [
      {
        name: "plasticos",
        sprite: "",
      },
      // todo: los demas containers
    ],
  },
] satisfies Level[];

type GameState = "idle" | "running" | "paused";

export default function GameScene() {
  const [gameState, setGameState] = useState<GameState>("idle");

  // todo: estado global
  const progress = 30;

  return (
    <section className="relative isolate">
      <Level
        timeInSeconds={45}
        imageSrc="src/assets/images/places/city_4.gif"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint neque explicabo veritatis eius necessitatibus minus est excepturi, eos recusandae et. Dolores vel rerum repudiandae nam, illum quidem quos."
        progress={progress}
        gameState={gameState}
      />

      {gameState !== "running" && (
        <div className="absolute inset-0 isolate flex items-center justify-center bg-muted/30 backdrop-blur">
          <StartButton
            onClick={() => {
              // todo: iniciar nivel cambiando un estado global
              setGameState("running");
            }}
          />
        </div>
      )}
    </section>
  );
}

interface LevelProps {
  timeInSeconds: number;
  imageSrc: string;
  text: string;
  progress: number;
  gameState: GameState;
}

function Level({
  text,
  imageSrc,
  timeInSeconds = 60,
  progress,
  gameState,
}: LevelProps) {
  const { playerName } = usePlayerName();

  return (
    <div className="relative size-full">
      <BackgroundImage imageSrc={imageSrc} />

      {/* info container */}
      <div
        className={cn(
          "absolute top-0 z-10 flex h-[100px] w-full gap-6",
          "bg-black/70 p-2 backdrop-blur",
          "transition-all duration-150 ease-out",
          gameState === "idle" && "translate-y-[-100%]",
        )}
      >
        <Message className="mt-1 size-10 shrink-0 text-neutral-50" />

        <p
          className="line-clamp-4 max-w-[75%] text-sm text-green-500"
          dangerouslySetInnerHTML={{
            __html: `<strong>${playerName}</strong>, ${text}`,
          }}
        />

        <div className="absolute bottom-2 right-2">
          <SkipButton />
        </div>

        <div className="absolute right-2 top-2">
          {gameState === "running" && <Timer timeInSeconds={timeInSeconds} />}
        </div>

        {/* todo: extra info  */}
        <div className="absolute bottom-2 left-4">
          <LevelInfoButton />
        </div>
      </div>

      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 z-10",
          "transition-all duration-150 ease-out",
          gameState === "idle" && "translate-y-full",
        )}
      >
        <Progress className="w-full bg-neutral-600" value={progress} />
      </div>
    </div>
  );
}

function BackgroundImage({ imageSrc }: { imageSrc: string }) {
  return (
    <>
      <div className="relative z-[-1] h-full">
        <img
          src={imageSrc}
          alt="Level image"
          className="absolute inset-0 bottom-0 z-[-1] size-full object-cover object-right-bottom"
        />
      </div>
      <div className="mask-image absolute inset-0 z-[-1] bg-black/10"></div>
    </>
  );
}

function StartButton(props: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "relative size-48",
        "filter-blur text-neutral-50 transition-all hover:text-yellow-500 active:scale-95",
        props.className,
      )}
      {...props}
    >
      <Start />
    </button>
  );
}
