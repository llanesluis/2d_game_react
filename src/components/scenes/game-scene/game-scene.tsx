import { LevelData, LEVELS } from "@/constants";
import { useGameStore } from "@/stores/game-store";
import { useEffect } from "react";
import BeforeStartGame from "./before-start-game";
import Level from "./level";
import useSound from "use-sound";
import ScreenTransition from "@/components/screen-transition";

export default function GameScene() {
  const gameState = useGameStore((s) => s.gameState);

  const level = useGameStore((s) => s.level);
  const levelData = useGameStore((s) => s.levelData);
  const setLevelData = useGameStore((s) => s.setLevelData);
  const restartLevel = useGameStore((s) => s.restartLevel);

  const goToNextLevel = useGameStore((s) => s.goToNextLevel);
  const goToEndScene = useGameStore((s) => s.goToEndScene);

  const addCoins = useGameStore((s) => s.addCoins);

  const retryCounter = useGameStore((s) => s.retryCounter);

  const [playCelebrationSound] = useSound("/assets/sounds/celebration.mp3", {
    volume: 0.5,
  });

  useEffect(() => {
    const lvl = LEVELS.find((l) => l.level === level);

    if (!lvl) return;

    setLevelData(lvl);
    restartLevel();
  }, [level, restartLevel, setLevelData]);

  if (!levelData) return null;

  if (gameState === "idle") {
    return (
      <section className="relative isolate">
        <ScreenTransition />

        <BeforeStartGame />
      </section>
    );
  }

  return (
    <section className="relative isolate">
      {level === 1 && (
        <Level
          key={retryCounter + level}
          levelData={LEVELS.find((l) => l.level === 1) as LevelData}
          onCompleteLevel={() => {
            goToNextLevel();
            restartLevel();
            addCoins(5);
          }}
        />
      )}
      {level === 2 && (
        <Level
          key={retryCounter + level}
          levelData={LEVELS.find((l) => l.level === 2) as LevelData}
          onCompleteLevel={() => {
            goToNextLevel();
            restartLevel();
            addCoins(5);
          }}
        />
      )}
      {level === 3 && (
        <Level
          key={retryCounter + level}
          levelData={LEVELS.find((l) => l.level === 3) as LevelData}
          onCompleteLevel={() => {
            goToEndScene();
            restartLevel();
            playCelebrationSound();
          }}
        />
      )}
    </section>
  );
}
